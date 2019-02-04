import React, { Component } from "react";
import "../App.css";
import hogs from "../porkers_data";
import PigFilter from "./PigFilter";
import PigList from "./PigList";

const weight =
	"weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";

export default class PigContainer extends Component {
	constructor() {
		super();

		this.state = {
			pigs: hogs,
			sortBy: "",
			greased: false
		};
	}

	handleToggleGreased = () => {
		this.setState({
			greased: !this.state.greased
		});
	};

	handleSort = event => {
		console.log(event.target.value);
		this.setState({ sortBy: event.target.value });
	};

	filterGreased = () => {
		const greasedPigs = this.state.greased
			? this.state.pigs.filter(pig => pig.greased)
			: this.state.pigs.slice();
		return greasedPigs;
	};

	sortPigs = () => {
		switch (this.state.sortBy) {
			case "name":
				return this.state.pigs.sort((a, b) => a.name.localeCompare(b.name));
			case "weight":
				return this.state.pigs.sort((a, b) => a[weight] - b[weight]);
			default:
				return this.state.pigs;
		}
	};

	render() {
		const filter = this.sortPigs();
		const pigs = this.filterGreased(filter);
		return (
			<div className="ui container">
				<PigFilter
					toggleGreased={this.handleToggleGreased}
					sort={this.handleSort}
				/>
				<PigList pigs={pigs} />
			</div>
		);
	}
}
