import React, {useState, useEffect} from 'react';
import {Grid, Button} from '@material-ui/core';
/* eslint-disable */
import { alpha } from '@material-ui/core/styles';
/* eslint-enable */
import Alert from '@material-ui/lab/Alert';
import DateFnsUtils from '@date-io/moment';
import {DatePicker,  MuiPickersUtilsProvider} from '@material-ui/pickers';
import CanvasJSReact from '../assets/canvasjs.react';
import {isEmpty} from 'lodash';
import moment from 'moment'; 

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

//HOME COMPONENT
const Home = (props) => {
    const {getData, resetData, state:{data,apiError}} = props;

    //COMMON STATES
    const [dates, setDates] = useState({
        startDate:new Date(),
        endDate:new Date()
    });
    const [error, setError] = useState('')

    //DETECT CHANGE HERE
    useEffect(() => {
        if(moment(dates.startDate).isAfter(dates.endDate)){
            setError('Start date is after end date')
        }else{
            setError('')
        }
        if(apiError){
            setError('Somthing went wrong please try again later')
        }
    }, [dates,apiError]);

    // COMMON DATEPICKET COMPONENT
    const returnDatePicker = (flag)=>{
        return (<MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
            value={dates[flag]}
            format="DD/MM/yyyy"
            onChange={date => setDates({...dates,[flag]:date})}
        />
       </MuiPickersUtilsProvider>);
    }

    // BUILD CHARTS FOR MORE INFO REFER : https://canvasjs.com/react-charts/line-chart/
    const buildChart= ()=>{
        if(!isEmpty(data)){
        let usd = [], eur=[]
        for(let i in data){
            usd.push({label:moment(i).format("MMM Do"),y:data[i].USD})
            eur.push({label:moment(i).format("MMM Do"),y:data[i].EUR})
        }
        // Hide x-axis label if length is more than 50 to avoid clobbering
        let showLabel = Object.keys(data).length < 50 ? true : false; 

        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2", // "light1", "dark1", "dark2"
            title:{
                text: "Exchange rate between USD and EUR for 1 EUR"
            },
            axisY: {
                title: "Rate",
            },
            axisX: {
                title: "Date",
                interval: 1,
                labelFormatter: function(l){
                    return showLabel ? l.label : ' '
                }
            },
            data: [{
                type: "line",
                toolTipContent: "USD on {label} : {y}",
                dataPoints: usd
            },{
                type: "line",
                toolTipContent: "EUR on {label}: {y}",
                dataPoints:eur
            }]
        }
           return <CanvasJSChart options = {options} />
        }else{
            return (<div/>)
        }
    }

    return (<div>
        <Grid container justifyContent="space-evenly">
            <Grid item xs={6}>
                <div className="home-date">
                    <span>Start Date : </span> {returnDatePicker('startDate')}
                </div>
            </Grid>
            <Grid item xs={6}>
                <div className="home-date">
                    <span>End Date : </span> {returnDatePicker('endDate')}
                </div>
            </Grid>
            <Grid>
            <div className="home-buttons">
            {error ? <Alert severity="error" >{error}</Alert> : null}
            <Button 
                variant="contained" 
                color="primary" 
                style={{margin:'10px', backgroundColor:'rgb(25, 118, 210)'}} 
                onClick={()=>{if(!error) getData(dates)}}
            >Submit</Button>
            <Button 
                variant="outlined" 
                color="primary" 
                onClick={()=>{resetData()}}
            >Cancel</Button>
            </div>
            </Grid>
        </Grid>
        <div className="home-spacer">
            {buildChart()}
        </div>
    </div>)
}
export default Home;