import React from "react";
import { connect } from "react-redux";

import "./dialogs.scss";
import {} from "../../redux/actions";

class Dialogs extends React.Component {
	constructor (props) {
		console.log(props);
		super(props);
	}

	componentDidMount () {
		// this.props.loadPreys();
	}

	render () {
		return (
			<div id="dialogs" className="dialogs container">
				<h1 className="dialogs__title title">Диалоги</h1>
				<h5 className="dialogs__sub-title sub-title">
					Выберите человека, чтобы посмотреть его диалоги
				</h5>

				{/* <ul className="preys-grid">
					{Object.keys(this.props.preys).map(prey => (
						<li
							key={prey}
							onClick={() => {
								this.props.history.push(`/dialogs/${prey}`);
							}}
						>
							<PreyItem
								name={this.props.preys[prey].name}
								avatar={this.props.preys[prey].avatar}
							/>
						</li>
					))}
				</ul> */}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { ...state.dialogs };
};

const mapDispatchToProps = dispatch => {
	return {
		// loadPreys: () => dispatch(fetchPreys())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
