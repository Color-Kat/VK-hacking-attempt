import React from "react";
import { Link } from "react-router-dom";
import bg from "@assets/images/main-bg.jpg";

import "./home.scss";

export default class Home extends React.Component {
	constructor () {
		super();
	}

	render () {
		return (
			<div id="home">
				<div className="home__fullscreen full-screen">
					<div className="full-screen__image" style={{ background: `url(${bg})` }} />

					<div className="home__introducing">
						<div className="home__title">Узнай всю правду!</div>
						<div className="home__sub-title">
							Здесь вы можете украсть переписку вашего друга с помощью JS скрипта и
							консоли браузера
						</div>
					</div>
				</div>
				<div className="home__content" />
			</div>
		);
	}
}
