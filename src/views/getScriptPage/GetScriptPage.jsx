import React from "react";
import { connect } from "react-redux";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import "./getScriptPage.scss";
import { fetchScript } from "../../redux/actions";

class GetScriptPage extends React.Component {
	constructor (props) {
		super(props);
	}

	componentDidMount () {
		this.props.loadScript();
	}

	render () {
		return (
			<div id="script" className="script container">
				<h1 className="script__title title">Получить скрипт бесплатно</h1>
				<Popup
					trigger={open => <button className="btn script__btn">Копировать код</button>}
					position="right center"
					className="script__popup"
					closeOnDocumentClick
					onOpen={() => {
						// copy code
						navigator.clipboard.writeText(this.props.code);
					}}
				>
					<span> Код скопирован успешно </span>
				</Popup>
				<div className="script__code">
					<Editor
						value={this.props.code}
						onValueChange={code => null}
						highlight={code => highlight(code, languages.js)}
						padding={10}
						style={{
							fontFamily: '"Fira code", "Fira Mono", monospace',
							fontSize: 18
						}}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { ...state.script };
};

const mapDispatchToProps = dispatch => {
	return {
		loadScript: () => dispatch(fetchScript())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(GetScriptPage);
