import "regenerator-runtime/runtime";
import React from "react";
import { render } from "react-dom";

import "@/scss/_variables.scss";
import "@/scss/nullstyle.scss";
import "@/scss/style.scss";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";

import App from "./views/App";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

window.apiPath = "https://color-msg-slv.tk/api/";

const app = (
	<Provider store={store}>
		<App />
	</Provider>
);

render(app, document.querySelector("#app"));

// add scroll-loack class for body if burger-menu is opened
store.subscribe(() => {
	if (store.getState().app.show_burger) {
		document.body.classList.add("_scroll-lock");
	} else {
		document.body.classList.remove("_scroll-lock");
	}
});

window.addEventListener("resize", () => {
	store.dispatch;
});
