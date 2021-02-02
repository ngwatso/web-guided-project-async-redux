import { FETCH_DATA_SUCCESS, START_FETCHING_DATA } from '../actions';

const initialState = {
  quote: null,
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_DATA: {
      return {
        ...state,
        isFetching: true
      }
    }
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        quote: action.payload,
        isFetching: false,
        error: ''
      }
    }
    default:
      return state;
  }
};