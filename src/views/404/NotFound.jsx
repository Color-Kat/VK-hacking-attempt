import React from "react";
import { Link } from "react-router-dom";

// import "./preys.scss";

class NotFound extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div id="404" className="404 container">
				<h1 className="404__title title error">404 страница не найдена</h1>
				<h5 className="404__sub-title sub-title" style={{ margin: "20px" }}>
					Такой страницы не существует, вернитесь на{" "}
					<Link to="/" style={{ color: "lime" }}>
						главную
					</Link>
				</h5>
			</div>
		);
	}
}
export default NotFound;
