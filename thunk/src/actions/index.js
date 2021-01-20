
export const getQuote = () => dispatch => {
    dispatch({ type:"FETCH_QUOTE_START"});
    setTimeout(()=> {
        dispatch({ type:"FETCH_QUOTE_SUCCESS", payload:"random kanye quote"});
    }, 3000);
}

// export const startFetch = () => {
//     return({type: "FETCH_QUOTE_START"});
// }