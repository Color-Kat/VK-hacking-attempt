import React from "react";
import { render } from "react-dom";

import "@/scss/_variables.scss";
import "@/scss/nullstyle.scss";
import "@/scss/style.scss";

import App from "./components/App";
import { createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";

const store = createStore(rootReducer);

render(<App />, document.querySelector("#app"));
