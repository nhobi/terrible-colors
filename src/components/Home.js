import React, { Component } from "react";
import Clipboard from "clipboard";
import styled from "styled-components";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

import Color from "./Color";
import { random, shuffle } from "../common/helpers";
import data from "../config/data";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			words: []
		};
	}
	componentWillMount() {
		this.setState({
			words: random(data.terribleWords, 4),
			colors: shuffle(data.terribleColors)
		});
	}

	render() {
		return (
			<HomeContainer>
				<HelpText>
					{"Click to Copy Hex to Clipboard".toUpperCase()}
				</HelpText>
				<ColorContainer>
					{this.state.colors.map((item, i) => {
						return <Color color={item} key={i} />;
					})}
				</ColorContainer>

				<NavBar>
					<Logo>
						<LogoTitle>TERRIBLECOLORS.COM</LogoTitle>
						<LogoDescription>
							{`A ${this.state.words[0].text}, ${this.state.words[1].text} palette for ${this.state.words[3].text} people`.toUpperCase()}
						</LogoDescription>
					</Logo>
				</NavBar>
			</HomeContainer>
		);
	}
}

const HomeContainer = styled.div`

`;

const Logo = styled.div`
	color: red;
	width: 100%;
	text-align: center;
`;

const LogoTitle = styled.span`
	display: block;
`;
const LogoDescription = styled.span`
	font-size: .75em;
`;
const ColorContainer = styled.div`	
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	margin-bottom: 4em;
`;
const HelpText = styled.span`
	position: fixed;
	top: 1em;	
	left: 0;
	right: 0;
	text-align: center;	
	color: #fff;
	font-weight: 900;
	text-shadow: 0px 2px 2px #000;
	letter-spacing: 1px;
	z-index: 1;
`;

export default Home;
