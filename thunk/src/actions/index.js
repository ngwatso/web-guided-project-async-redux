export const START_FETCHING_DATA = 'START_FETCHING_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

import axios from 'axios';

export const getQuote = () => {
  return (dispatch) => {
    dispatch({ type: START_FETCHING_DATA });
    // flow control
    axios.get('https://api.kanye.rest')
      .then(res => console.log('bk: actions/index.js: getQuote: res: ', res))
      .catch(err => console.error('error getting kanye quote: res: ', res))
  }
}