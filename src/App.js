import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from "./common/components/Button";
import Home from "./components/Home";

class App extends Component {
	render() {
		return (
			<Router>
				<Route path="/" exact={true} component={Home} />
			</Router>
		);
	}
}

export default App;
