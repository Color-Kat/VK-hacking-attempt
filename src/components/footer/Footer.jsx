import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import logo from "@assets/logo.png";

export default class Home extends React.Component {
	constructor () {
		super();
	}

	render () {
		return (
			<footer className="footer">
				<div className="footer__container container">
					<div className="footer__main">
						<Link to="/" className="footer__logo">
							<img src={logo} alt="" className="logo_img" />
							<span className="logo_title">VK ПРОФИ ХАКЕР</span>
						</Link>

						<span className="footer__description">
							На данном сайте размещаются украденные с помощью скрипта переписки из
							VK. Эти действия являются незаконными, так что использовать скрипт можно
							только в целях самообразования.
							<b style={{ color: "lime" }}> Вторжение в личную жизнь - незаконно!</b>
						</span>
					</div>

					<div className="footer__columns">
						<div className="footer__collumn">
							<h6 className="footer__collumn_title">ССЫЛКИ</h6>
							<Link to="/">Главная</Link>
							<Link to="/get_script">Получить скрипт</Link>
							<Link to="/dialogs">Диалоги</Link>
							{/* <Link to="#"></Link> */}
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
