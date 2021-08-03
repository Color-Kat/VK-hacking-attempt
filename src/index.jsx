import React from "react";
import {
    render
} from "react-dom";

import "@/scss/_variables.scss";
import "@/scss/nullstyle.scss";
import "@/scss/style.scss";

import App from './components/App';



render( < App / > , document.querySelector('#app'));