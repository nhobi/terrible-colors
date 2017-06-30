import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

class NavBar extends Component {
	constructor(props) {
		super(props);
		this.handleTwitterAnchorClick = this.handleTwitterAnchorClick.bind(
			this
		);
	}

	handleTwitterAnchorClick(e) {
		e.preventDefault();
		let tweet = `${this.props.getRandomMessage()}. %23terriblecolors %23whatadisaster http://terriblecolors.com`;
		window.open(
			`https://twitter.com/home?status=${tweet}`,
			"newwindow",
			"width=600, height=450"
		);
	}

	render() {
		return (
			<NavBarContainer>
				<Logo>
					<LogoTitle>TERRIBLECOLORS.COM</LogoTitle>
					<LogoDescription>
						{this.props.getRandomMessage().toUpperCase()}
					</LogoDescription>
					<br />
					<Anchor
						href="https://github.com/gr33k01/terrible-colors"
						target="_blank"
					>
						github
					</Anchor>

					<Anchor
						href="#"
						target="_blank"
						onClick={this.handleTwitterAnchorClick}
					>
						tweet this
					</Anchor>

					<Link to="/stickers">stickers</Link>
				</Logo>
			</NavBarContainer>
		);
	}
}

const NavBarContainer = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background: #fff;	
	padding: 2em;
	border-top: 5px solid red;
	background-color: rgba(202, 160, 97, .97);
	z-index: 20;
`;

const LogoTitle = styled.span`
	display: block;
`;

const LogoDescription = styled.span`
	font-size: .75em;
`;

const Logo = styled.div`
	color: red;
	width: 100%;
	text-align: center;
	font-size: .4em;	

	@media screen and (min-width: 800px) {
		font-size: 1em;
	}
`;

const Anchor = styled.a`
	color: red;
	font-weight: 100;
	margin: 0 .25em;
	display: inline-block;
`;

export default NavBar;
