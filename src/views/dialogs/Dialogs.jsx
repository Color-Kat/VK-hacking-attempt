import React from "react";
import { connect } from "react-redux";

import "./dialogs.scss";
import { fetchPreys, fetchScript } from "../../redux/actions";

class Dialogs extends React.Component {
	constructor (props) {
		super(props);
	}

	componentDidMount () {
		this.props.loadPreys();
	}

	render () {
		return (
			<div id="dialogs" className="dialogs container">
				<h1 className="script__title">Диалоги</h1>
				<h5 className="script__title">Выберите человека, чтобы посмотреть его диалоги</h5>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { ...state.dialogs };
};

const mapDispatchToProps = dispatch => {
	return {
		loadPreys: () => dispatch(fetchPreys())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
