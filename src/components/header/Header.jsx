import React from "react";
import { Link } from "react-router-dom";
import logo from "@assets/logo.png";
import "./header.scss";

class Header extends React.Component {
	constructor () {
		super();
	}

	render () {
		return (
			<header className="header">
				<div className="header__container container">
					{/* <!-- ========= LOGO ======== --> */}
					<Link to="/" className="header__logo">
						<img src={logo} alt="Vk-hacker" />
					</Link>
					{/* <!-- ========= LOGO ======== --> */}

					{/* <!-- ========= MENU ======== --> */}
					<div className="header__menu menu">
						{/* <!-- --- burger-menu icon --- --> */}
						<div className="menu__icon">
							<span />
						</div>
						{/* <!-- --- burger-menu icon --- --> */}

						<nav className="menu__body">
							<ul className="menu__list">
								{/* <!-- simple nav items --> */}
								<li>
									<Link to="/" className="menu__link">
										Главная
									</Link>
								</li>
								<li>
									<Link to="/get-script" className="menu__link">
										Получить скрипт
									</Link>
								</li>
								<li>
									<Link to="/dialogs" className="menu__link">
										Диалоги
									</Link>
								</li>
								{/* <!-- simple menu items --> */}

								{/* <!-- drop-down menu items --> */}
								{/* <li>
									<a href="#" className="menu__link">
										Что такое apple
									</a>
									<span className="menu__arrow" />

									<ul className="menu__sub-list">
										<li>
											<a href="#" className="menu__sub-link">
												Про яблоки
											</a>
										</li>
										<li>
											<a href="#" className="menu__sub-link">
												Про телефоны
											</a>
										</li>
										<li>
											<a href="#" className="menu__sub-link">
												Про аппледисменты
											</a>
										</li>
									</ul>
								</li> */}
								{/* <!-- drop-down menu items --> */}
							</ul>
						</nav>
					</div>
					{/* <!-- ========= MENU ======== --> */}
				</div>
			</header>
		);
	}
}

export default Header;
