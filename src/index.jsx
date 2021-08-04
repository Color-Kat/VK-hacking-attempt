import React from "react";
import { render } from "react-dom";

import "@/scss/_variables.scss";
import "@/scss/nullstyle.scss";
import "@/scss/style.scss";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";
import App from "./components/App";

const store = createStore(rootReducer);

const app = (
	<Provider store={store}>
		<App />
	</Provider>
);

render(app, document.querySelector("#app"));
