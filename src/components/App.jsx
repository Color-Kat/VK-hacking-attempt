import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./main.scss";
import Header from "@components/header/Header";
import Home from "./home/Home";

class App extends React.Component {
	constructor () {
		super();
	}

	render () {
		return (
			<Router>
				<main className="main">
					<Header />

					{/* Page content */}
					<div className="page">
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
						</Switch>
					</div>

					<footer className="footer">Footer</footer>
				</main>
			</Router>
		);
	}
}

export default App;
