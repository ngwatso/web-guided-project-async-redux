
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
    default:
      return state;
  }
};