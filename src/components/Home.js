import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Color from "./Color";
import { random, shuffle } from "../common/helpers";
import data from "../config/data";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			words: [],
			colors: []
		};
		this.handleColorClick = this.handleColorClick.bind(this);
		this.handleTwitterAnchorClick = this.handleTwitterAnchorClick.bind(
			this
		);
		this.getRandomMessage = this.getRandomMessage.bind(this);
	}

	componentWillMount() {
		let words = random(data.terribleWords, 4);
		let firstTeribleWord = words[0].text, firstWord = "A";
		let colors = shuffle(data.terribleColors);

		if (["a", "e", "i", "o", "u"].indexOf(firstTeribleWord[0]) > -1) {
			firstWord = "An";
		}
		this.setState({
			words,
			firstWord,
			colors
		});
	}

	handleColorClick(color) {
		let words = random(data.terribleWords, 2);
		let message = `You have successfully copied ${color.name.toUpperCase()} (${color.hex}), a ${words[0].text} selection from this ${words[1].text} heap of "colors".`;
		alert(message);
	}

	handleTwitterAnchorClick(e) {
		e.preventDefault();
		let tweet = `${this.getRandomMessage()}. %23terriblecolors %23whatadisaster http://terriblecolors.com`;
		window.open(
			`https://twitter.com/home?status=${tweet}`,
			"newwindow",
			"width=600, height=450"
		);
	}

	getRandomMessage() {
		return `${this.state.firstWord} ${this.state.words[0].text}, ${this.state.words[1].text} "color" palette for ${this.state.words[3].text} ${random(data.terriblePeople).text}`;
	}

	render() {
		return (
			<HomeContainer>
				<HelpText>
					{"Click to Copy Hex to Clipboard".toUpperCase()}
				</HelpText>
				<ColorContainer>
					{this.state.colors.map((item, i) => {
						return (
							<Color
								color={item}
								key={i}
								onClick={this.handleColorClick.bind(this, item)}
							/>
						);
					})}
				</ColorContainer>

				<NavBar getRandomMessage={this.getRandomMessage} />
			</HomeContainer>
		);
	}
}

const HomeContainer = styled.div``;

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
