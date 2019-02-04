import React from "react";
import Pig from "./Pig";

const PigList = props => {
	return (
		<ul>
			{props.pigs.map(pig => {
				return <Pig key={pig.name} pig={pig} />;
			})}
		</ul>
	);
};

export default PigList;
