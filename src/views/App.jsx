import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./main.scss";
import Header from "@components/header/Header";
import Home from "./home/Home";
import Footer from "../components/footer/Footer";
import GetScriptPage from "./getScriptPage/GetScriptPage";
import Loader from "../components/loader/Loader";
import Dialogs from "./dialogs/Dialogs";

class App extends React.Component {
	constructor () {
		super();
	}

	render () {
		return (
			<Router>
				<main className="main">
					<Header />

					<Loader />

					{/* Page content */}
					<div className="page">
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>

							<Route path="/get-script">
								<GetScriptPage />
							</Route>

							<Route path="/dialogs">
								<Dialogs />
							</Route>
						</Switch>
					</div>

					<Footer />
				</main>
			</Router>
		);
	}
}

export default App;
