import React from "react";
import { connect } from "react-redux";

import "./loader.scss";

class Loader extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div className={`loader ${this.props.is_loading ? "active" : ""}`}>
				{/* icon */}
				<div className="lds-spinner">
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
				</div>

				<div className="loader__text">HACKING...</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { is_loading: state.app.is_loading };
};

export default connect(mapStateToProps)(Loader);
