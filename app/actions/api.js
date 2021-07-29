import axios from 'axios';

// ALL API CALLS CAN BE MADE FROM HERE
export function getAPI(sd,ed) {
    let url = `https://api.exchangerate.host/timeseries?start_date=${sd}&end_date=${ed}&&symbols=USD,EUR&&base=EUR`
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then((res) => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  