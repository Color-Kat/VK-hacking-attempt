import React from "react";
import { BrowserRouter as Router, withRouter, RouteComponentProps } from "react-router-dom";

class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                It is wooork;
            </Router>
        );
    }
}

export default App;