
export const getQuote = () => {
    return (dispatch => {
        dispatch({ type:"FETCH_QUOTE_START"});
        
        dispatch({ type:"FETCH_QUOTE_SUCCESS", payload:"random kanye quote"});
    });
}

// export const startFetch = () => {
//     return({type: "FETCH_QUOTE_START"});
// }