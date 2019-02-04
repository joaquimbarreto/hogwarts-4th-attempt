import React, { Component } from "react";

const weight =
	"weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";
const medal = "highest medal achieved";

export default class Pig extends Component {
	state = {
		showDetails: false
	};

	toggleShowDetails = () => {
		this.setState({
			showDetails: !this.state.showDetails
		});
	};

	render() {
		const image = require(`../hog-imgs/${this.props.pig.name
			.toLowerCase()
			.replace(/ /gi, "_")}.jpg`);
		return (
			<li className="ui card">
				<div className="image">
					<img
						onClick={this.toggleShowDetails}
						src={image}
						alt={this.props.pig.name}
					/>
				</div>
				<div className="content">
					<a className="header">{this.props.pig.name}</a>
				</div>
				{this.state.showDetails && (
					<div className="extra content">
						<p>Speciality: {this.props.pig.specialty}</p>
						<p>Weight: {this.props.pig[weight]}</p>
						<p>Highest Medal: {this.props.pig[medal]}</p>
					</div>
				)}
			</li>
		);
	}
}
