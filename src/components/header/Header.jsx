import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

class Header extends React.Component {
	constructor () {
		super();
	}

	render () {
		return (
			<header class="header">
				<div class="header__container container">
					{/* <!-- ========= LOGO ======== --> */}
					<a href="#" class="header__logo" />
					{/* <!-- ========= LOGO ======== --> */}

					{/* <!-- ========= MENU ======== --> */}
					<div class="header__menu menu">
						{/* <!-- --- burger-menu icon --- --> */}
						<div class="menu__icon">
							<span />
						</div>
						{/* <!-- --- burger-menu icon --- --> */}

						<nav class="menu__body">
							<ul class="menu__list">
								{/* <!-- simple nav items --> */}
								<li>
									<a href="#" data-goto=".page__section_1" class="menu__link">
										Блок 1
									</a>
								</li>
								<li>
									<a href="#" data-goto=".page__section_2" class="menu__link">
										Block two
									</a>
								</li>
								<li>
									<a href="#" data-goto=".page__section_3" class="menu__link">
										Block number three
									</a>
								</li>
								{/* <!-- simple menu items --> */}

								{/* <!-- drop-down menu items --> */}
								<li>
									{/* <!-- title --> */}
									<a href="#" class="menu__link">
										Что такое apple
									</a>
									{/* <!-- arrow --> */}
									<span class="menu__arrow" />

									{/* <!-- drop-down content --> */}
									<ul class="menu__sub-list">
										<li>
											<a href="#" class="menu__sub-link">
												Про яблоки
											</a>
										</li>
										<li>
											<a href="#" class="menu__sub-link">
												Про телефоны
											</a>
										</li>
										<li>
											<a href="#" class="menu__sub-link">
												Про аппледисменты
											</a>
										</li>
									</ul>
								</li>
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
