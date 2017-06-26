import React, { Component } from "react";
import styled from "styled-components";

const NavBarContainer = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background: #fff;	
	padding: 2em;
	border-top: 5px solid red;
	background-color: rgba(202, 160, 97, .97);
	z-index: 5;
`;

class NavBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<NavBarContainer>
				{this.props.children}
			</NavBarContainer>
		);
	}
}

export default NavBar;
