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
					{this.props.dialogs && this.props.dialogs[this.preyId] ? (
						this.props.dialogs[this.preyId]["name"]
					) : (
						""
					)}{" "}
					переписывался с этими людьми. Выберети диалог.
				</h5>

				{/* check if id exists */}
				{this.props.dialogs && this.props.dialogs[this.preyId] ? (
					<ul className="dialogs__grid">
						{/* check if dialogs exist  */}
						{Object.keys(this.props.dialogs[this.preyId]).length > 0 ? (
							// map all dialogs
							Object.keys(this.props.dialogs[this.preyId]).map(dialogName => {
								if (
									dialogName !== "name" &&
									dialogName !== "avatar" &&
									dialogName
								) {
									return (
										<DialogItem
											key={dialogName}
											name={dialogName}
											messages={this.props.dialogs[this.preyId][dialogName]}
										/>
									);
								}
							})
						) : (
							<span className="dialogs__empty">Диалогов нет</span>
						)}
					</ul>
				) : (
					<h2 className="dialogs__empty error">Ничего не найдено</h2>
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
