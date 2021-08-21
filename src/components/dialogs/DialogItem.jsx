import React from "react";
import { findDOMNode, render } from "react-dom";

import "./dialogItem.scss";

export default class DialogItem extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			active: false
		};
	}

	render () {
		// console.log(div.firstChild);
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
							// create fake div
							let div = document.createElement("div");
							// insert there fetched string html to get HTMLElement
							div.innerHTML = message.mess;

							// change all link's herf
							div.querySelectorAll("a").forEach(link => {
								// get href
								let linkHref = link.getAttribute("href");

								if (linkHref) {
									// check is link don't have domain in url (/away.php - true)
									if (
										!(
											linkHref.indexOf("http://") === 0 ||
											linkHref.indexOf("https://") === 0
										)
									) {
										// this link is not absolute
										// because add domain to link
										link.setAttribute("href", `https://vk.com${linkHref}`);
									}
									// else do nothing
								}
							});

							return (
								<li
									key={message.name + Math.random()}
									dangerouslySetInnerHTML={{
										__html: div.innerHTML
									}}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}
