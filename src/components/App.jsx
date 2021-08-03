import React from "react";
import { BrowserRouter as Router, withRouter, RouteComponentProps } from "react-router-dom";

import Header from "@components/header/Header";

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                <main>
                    <Header />
                </main>
                It is wooork;
            </Router>
        );
    }
}

export default App;