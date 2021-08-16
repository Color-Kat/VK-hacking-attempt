import React from "react";

import "./preyItem.scss";

export default class PreyItem extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div className="prey-item">
				<span />
				<img src={this.props.avatar} alt={this.props.name} />
				<h2>{this.props.name}</h2>
			</div>
		);
	}
}
