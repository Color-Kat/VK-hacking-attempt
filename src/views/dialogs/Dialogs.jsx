import React from "react";
import { connect } from "react-redux";

import "./dialogs.scss";
import { fetchDialogs } from "../../redux/actions";
import { withRouter } from "react-router-dom";
import DialogItem from "../../components/dialogs/DialogItem";

class Dialogs extends React.Component {
	constructor (props) {
		super(props);
	}

	preyId = this.props.match.params.id;

	componentDidMount () {
		this.props.loadDialogs(this.preyId);
	}

	render () {
		return (
			<div id="dialogs" className="dialogs container">
				<h1 className="dialogs__title title">Диалоги</h1>
				<h5 className="dialogs__sub-title sub-title">
					Выберите человека, чтобы посмотреть его диалоги
				</h5>

				{this.props.dialogs[this.preyId] ? (
					<ul className="preys-grid">
						{Object.keys(this.props.dialogs[this.preyId]).map(dialogName => {
							if (dialogName !== "name" && dialogName !== "avatar") {
								return (
									<DialogItem
										key={dialogName}
										name={dialogName}
										messages={this.props.dialogs[this.preyId][dialogName]}
									/>
								);
							}
						})}
					</ul>
				) : (
					<span>Ничего не найдено</span>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { ...state.dialogs };
};

const mapDispatchToProps = dispatch => {
	return {
		loadDialogs: preyId => dispatch(fetchDialogs(preyId))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Dialogs));
