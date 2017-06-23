import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
