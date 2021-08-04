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
			<div className="home">
				<div className="home__fullscreen full-screen">
					<div className="full-screen__image" style={{ background: `url(${bg})` }} />

					<div className="home__introducing">
						<h1 className="home__title">Узнай всю правду!</h1>
						<div className="home__sub-title">
							Попробуй украсть переписку вашего друга с помощью JS скрипта и консоли
							браузера!
						</div>
					</div>

					<div className="home__to-bottom">
						<span className="home__details">Подробнее</span>
						<div className="bottom-arrow">
							<span />
							<span />
							<span />
						</div>
					</div>
				</div>
				<div className="home__content" />
			</div>
		);
	}
}
