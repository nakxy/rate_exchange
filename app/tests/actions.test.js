/* eslint-disable */
import {useActions} from '../actions/index';
import * as API from '../actions/api';

describe('Test Actions', () => {
    let spy;
    beforeEach(() => {
        spy = jest.spyOn(API, 'getAPI');
      });
      
      afterEach(() => {
        spy.mockRestore();
      });

    test("Should return promise with data on success", () => {
        const testFunc = (data)=>{
            let mockObject = { type: 'GET_DATA', data: { data: {} } }
            expect(mockObject).toEqual(data)
        }
        spy.mockReturnValue(new Promise(resolve => resolve({data:{}})));
        let actions = useActions(testFunc)
        let date = '2021-01-01'
        actions.getData({startDate:date, endDate:date})
        
      });
      test("Should return promise with error on reject", () => {
        const testFunc = (err)=>{
            let mockObject = { type: 'GET_ERROR' }
            expect(mockObject).toEqual(err)
        }
        spy.mockReturnValue(new Promise((resolve,reject) => reject()));
        let actions = useActions(testFunc)
        let date = '2021-01-01'
        actions.getData({startDate:date, endDate:date})
      });
});