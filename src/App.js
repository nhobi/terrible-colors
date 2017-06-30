import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Stickers from "./components/Stickers";

//comment
class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Route path="/" exact={true} component={Home} />
				</div>
			</Router>
		);
	}
}

export default App;
