import {get} from 'lodash';

const initialState = {
  startDate:'',
  endDate:'',
  data:{},
  apiError:false,
}
  
// GENERIC REDUCER TO MAINTAN STATE
const reducer = (state = initialState , action) => {
  switch (action.type) {
    case 'GET_DATA' : {
      return Object.assign({...state}, {data:get(action,'data.rates',{}),apiError:false}) 
    }
    case 'GET_ERROR':{
      return Object.assign({...state}, {apiError:true}) 
    }
    case 'RESET_DATA' : {
      return Object.assign({...state}, {data:{},apiError:false}) 
    }
    default: return state
  }
}

export { reducer, initialState };