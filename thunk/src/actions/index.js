
export getQuote = ()=> {
    //dispatch FETCH_QUOTE_STATE
    //do axios call
    //dispatch FETCH_QUOTE_START
    //dispatch FETCH_QUOTE_FAIL
}

export const startFetch = () => {
    return({type: "FETCH_QUOTE_START"});
}

export const fetchSuccess = (quote) => {
    return({type: "FETCH_QUOTE_START", payload: quote});
}

export const fetchFail = (err) => {
    return({type: "FETCH_QUOTE_FAIL", payload: err});
}