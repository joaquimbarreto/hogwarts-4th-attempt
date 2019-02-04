import React from "react";

const PigFilter = props => {
	return (
		<div className="ui grid container">
			Sort by: Name:
			<input onChange={props.sort} name="sort" value="name" type="radio" />
			Weight:
			<input onChange={props.sort} name="sort" value="weight" type="radio" />
			Show only greased pigs
			<input onChange={props.toggleGreased} name="greased" type="checkbox" />
		</div>
	);
};

export default PigFilter;
