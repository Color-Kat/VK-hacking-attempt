import React from "react";

import "./dialogItem.scss";

export default class DialogItem extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			active: false
		};
	}

	componentDidUpdate () {}

	render () {
		return (
			<div className={`dialog-item ${this.state.active ? "active" : ""}`}>
				<div
					className="dialog-item__preview"
					onClick={() =>
						this.setState(prev => ({
							active: !prev.active
						}))}
				>
					<h2 className="dialog-item__name">{this.props.name}</h2>
					<span className="arrow-down" />
				</div>

				<div className="dialog-item__content">
					<ul>
						{this.props.messages.map(message => {
							return (
								<li
									key={message.name + Math.random()}
									dangerouslySetInnerHTML={{ __html: message.mess }}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}
