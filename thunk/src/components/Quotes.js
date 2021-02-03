import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getQuote } from "../actions";

// const Quotes = (props) => {
//   const quote = props.quote
//   const isFetching = props.isFetching
//   const error = props.error
// ?? Deconstructed on line 12 below

const Quotes = ({ quote, isFetching, error, ...props }) => {
	useEffect(() => {});

	const handleGetQuote = (e) => {
		e.preventDefault();
		props.getQuote();
	};

	// if (error) {
	// 	return <h2>We got an error: {error}</h2>;
	// }

	if (isFetching) {
		return <h2>Fetching quote for ya!</h2>;
	}

	return (
		<>
			<h2>Kanye says: {quote}</h2>
			{error && (
				<div>
					<h2 style={{ color: "red" }}>
						We got an error: {error}
					</h2>
				</div>
			)}
			<button onClick={handleGetQuote}>Get new quote</button>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		quote: state.quote,
		isFetching: state.isFetching,
		error: state.error,
	};
};

export default connect(mapStateToProps, { getQuote })(Quotes);
