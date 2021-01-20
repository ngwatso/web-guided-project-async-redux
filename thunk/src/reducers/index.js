
const initialState = {
  quote: '',
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case("FETCH_QUOTE_START"):
      return({
        ...state,
        isFetching: true,
        error:'',
        quote:''
      });
    case("FETCH_QUOTE_SUCCESS"):
      return({
        ...state,
        quote: action.payload,
        isFetching: false
      })
    default:
      return state;
  }
};