import { START_FETCHING, QUOTE_RETRIEVED, FETCH_FAILED } from "../actions";

const initialState = {
	quote: null,
	isFetching: false,
	error: "",
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case START_FETCHING: {
			return {
				...state,
				isFetching: true,
				error: "",
			};
		}
		case QUOTE_RETRIEVED: {
			return {
				...state,
				quote: action.payload,
				isFetching: false,
			};
		}
		case FETCH_FAILED: {
			return {
				...state,
				error: action.payload,
				isFetching: false,
			};
		}
		default:
			return state;
	}
};
