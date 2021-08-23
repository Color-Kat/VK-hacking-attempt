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

								link.style.display = "block"; // добавляем display block, чтобы фон был виден
								link.style.backgroundSize = "contain";
								link.style.backgroundRepeat = "no-repeat"; // remove repeat
								link.style.position = "relative"; // add position relative

								if (link.classList.contains("image_cover"))
									link.parentElement.style.display = "flex";

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
										link.setAttribute("target", "_blank");
									}
									// else do nothing
								}
							});

							// change link for emoji
							div.querySelectorAll(".emoji").forEach(emoji => {
								let link = emoji.getAttribute("src");
								emoji.setAttribute("src", `https://vk.com${link}`);
							});

							div
								.querySelectorAll("svg")
								.forEach(svg => (svg.style.display = "none"));

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
