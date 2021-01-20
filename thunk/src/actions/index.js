import axios from 'axios';

// export const getQuote = () => {
//     return (dispatch => {
//         dispatch({ type:"FETCH_QUOTE_START"});
//         setTimeout(()=> {
//             dispatch({ type:"FETCH_QUOTE_SUCCESS", payload:"random kanye quote"});
//         }, 3000);
//     });
// }

export const getQuote = () => dispatch => {
    dispatch({ type:"FETCH_QUOTE_START"});
    axios 
        .get('https://api.kanye.rest')
        .then((resp)=>{
            console.log(resp);
            dispatch({ type:"FETCH_QUOTE_SUCCESS", payload: resp.data.quote});
        })
        .catch(err => {
            dispatch({ type:"FETCH_QUOTE_FAIL", payload:err.response.code});
        });
}

// export const startFetch = () => {
//     return({type: "FETCH_QUOTE_START"});
// }