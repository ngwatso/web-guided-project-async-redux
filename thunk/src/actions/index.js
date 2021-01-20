
export const getQuote = () => {
    return (dispatch => {
        dispatch({ type:"FETCH_QUOTE_START"});
        setTimeout(()=> {
            dispatch({ type:"FETCH_QUOTE_SUCCESS", payload:"random kanye quote"});
            setTimeout(()=> {
                dispatch({ type:"FETCH_QUOTE_FAIL", payload:"YOU PLAYED YOURSELF"});
            }, 3000);
        }, 3000);
    });
}

// export const startFetch = () => {
//     return({type: "FETCH_QUOTE_START"});
// }