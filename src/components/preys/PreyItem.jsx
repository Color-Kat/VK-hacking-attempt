import React from "react";
import { connect } from "react-redux";

export default class PreyItem extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<li className="prey-item">
				<img src={this.props.avatar} alt={this.props.name} />
				<h2>{this.props.name}</h2>
			</li>
		);
	}
}
