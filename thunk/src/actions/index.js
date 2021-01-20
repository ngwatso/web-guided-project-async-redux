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
        .then(()=>{
            dispatch({ type:"FETCH_QUOTE_SUCCESS", payload:"random kanye quote"});
        })
        .catch(err => {
            dispatch({ type:"FETCH_QUOTE_SUCCESS", payload:err.response.code});
        });
}

// export const startFetch = () => {
//     return({type: "FETCH_QUOTE_START"});
// }