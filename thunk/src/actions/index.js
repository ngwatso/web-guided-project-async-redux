export const START_FETCHING_DATA = 'START_FETCHING_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

import axios from 'axios';

export const getQuote = () => {
  return (dispatch) => {
    dispatch({ type: START_FETCHING_DATA });
    // flow control
    axios.get('https://api.kanyeo.rest')
      .then(res => {
        console.log('bk: actions/index.js: getQuote: res: ', res)
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.quote })
      })
      .catch(err => {
        console.error('error getting kanye quote: res: ', err.message)
        dispatch({ type: FETCH_DATA_FAILURE, payload: err.message })
      })
  }
}