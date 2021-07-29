import {getAPI} from './api';
import moment from 'moment';

// ALL ACTIONS THAT TRIGGER STATE CHANGE CAN BE DONE FROM HERE
// DISPATCHING SPECIFIC ACTIONS WILL RESULT IN CHANGE IN STATE IN REDUCER
export const useActions = (dispatch) => {
  return {
    getData: (dates) => {
      let sd = moment(dates.startDate).format('YYYY-MM-DD');
      let ed = moment(dates.endDate).format('YYYY-MM-DD');
      getAPI(sd,ed)
        .then(res => {
          dispatch({ type: 'GET_DATA', data:res })
        })
        .catch(() => {
          dispatch({type:'GET_ERROR'})
        })
    },
    resetData:() => {
      dispatch({ type: 'RESET_DATA' })
    }
  }
}