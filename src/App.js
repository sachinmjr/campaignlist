import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./App.css";
import Routes from "./userAuth/Routes";
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: true,
        };
    }

    render() {
        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
        };

        return (!this.state.isAuthenticating &&
            <div className="App container">
                <div className="content-wrapper">
                    <Routes childProps={childProps} />
                </div>
            </div>
        );
    }
}

export default withRouter(App);
