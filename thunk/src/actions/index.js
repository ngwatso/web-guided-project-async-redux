export const START_FETCHING_DATA = 'START_FETCHING_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const getQuote = () => {
  return {
    type: START_FETCHING_DATA
  };
}