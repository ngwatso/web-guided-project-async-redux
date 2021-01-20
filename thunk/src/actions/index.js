
export const startFetch = () => {
    return({type: "FETCH_QUOTE_START"});
}

export const fetchSuccess = (quote) => {
    return({type: "FETCH_QUOTE_START", payload: quote});
}

export const fetchFail = (err) => {
    return({type: "FETCH_QUOTE_START", payload: err});
}