import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const QUOTE_RETRIEVED = "QUOTE_RETRIEVED";
export const FETCH_FAILED = "FETCH_FAILED";

// !! Action Creators !!
// ?? Action = plain object that has a required 'type' and optional 'payload'

export const getQuote = () => {
	return (dispatch) => {
		dispatch({
			type: START_FETCHING,
		});
		// !! We can now do our GET here!
		// !! axios
		axios.get("https://api.kanye.rest")
			.then((res) => {
				console.log("API RESULT =====> ", res);
				dispatch({
					type: QUOTE_RETRIEVED,
					payload: res.data.quote,
				});
			})
			.catch((err) =>
				console.error("ERROR PULLING DATA", err.message)
			);
		dispatch({ type: FETCH_FAILED, payload: err.message });
	};

	// TODO Transition to isFetching: true
	// return {
	// 	type: START_FETCHING,
	// };

	// TODO Call the API to get the quote (middleware)
};

// !!  State   ==>    Action    ==>   newState
// !!  ======================================= !! //
// ??  NoErr,        getQuote()       Error,
// ??  NoQuote,                       NoQuote,
// ??  NoFetch                        NoFetch
// ??  ======================================= ?? //
// **  NoErr,        getQuote()
// **  Quote,
// **  NoFetch
// **  ======================================= ** //
// ??  Error,        reload()
// ??  NoQuote,
// ??  NoFetch
