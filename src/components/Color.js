import React, { Component } from "react";
import styled from "styled-components";

const ColorContainer = styled.div`
	box-sizing: border-box;
	position: relative;
	padding: 2em;		
	margin: 1.5em 0;
	width: 80%;
	@media screen and (min-width: 500px) {
		width: 30%;
	}
`;

const ColorContainerBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	opacity: .2;
`;

const ColorContainerInner = styled.div`
	height: 200px;
	width: 100%;
`;

const ColorTitle = styled.span`
	display: block;
	text-align: center;
	text-transform: uppercase;
	margin-top: 2em;
	letter-spacing: 1px;
`;

export default props => {
	return (
		<ColorContainer onClick={props.onClick} backgroundColor>

			<ColorContainerBg style={{ backgroundColor: props.color.hex }} />
			<ColorContainerInner style={{ backgroundColor: props.color.hex }} />

			<ColorTitle style={{ color: props.color.hex }}>
				{props.color.name.toUpperCase()}
			</ColorTitle>
		</ColorContainer>
	);
};
