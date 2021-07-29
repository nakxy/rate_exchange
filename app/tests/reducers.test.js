/* eslint-disable */
import * as Reducers from '../reducers/index';

describe('Test Reducers', () => {
    let initialState = {
        startDate:'',
        endDate:'',
        data:{},
        apiError:false,
    }
    test("Should return proper state for actions", () => {
        let response = Reducers.reducer(initialState,{
            type:'GET_ERROR'
        })
        let mockRes = {
            ...initialState,
            apiError:true,
        }
        expect(mockRes).toEqual(response)
    });
    test("Should return empty state for invalid payload", () => {
        let response = Reducers.reducer(initialState,{
            type:'GET_DATA',
            data:{}
        })
        expect(initialState).toEqual(response)
    });
});