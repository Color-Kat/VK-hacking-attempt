import React from "react";

import "./dialogItem.scss";

export default class DialogItem extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		console.log(typeof this.props.messages);
		console.log(this.props.messages);
		return (
			<li className="dialog-item">
				<div className="name">{this.props.name}</div>
				<span className="arrow-down" />

				<div className="content">
					{this.props.messages.map(message => {
						// console.log(message);
						return <li key={message + Math.random}>{message}</li>;
					})}
				</div>
			</li>
		);
	}
}
