import React from "react";
import styled from "styled-components";
import ClipboardButton from "react-clipboard.js";

const ColorContainer = styled.div`
	box-sizing: border-box;
	position: relative;
	padding: 2em;		
	margin: 1.5em 0;
	width: 90%;	
	@media screen and (min-width: 800px) {
		width: 45%;
		transition: 200ms transform ease;
		backface-visibility: hidden;

		&:hover {
			transform: scale(1.01) translateY(-10px);
			div {
				opacity: 1;		
			}
		}
	}
	@media screen and (min-width: 1200px) {
		width: 30%;
	}
	@media screen and (min-width: 1600px) {
		width: 18%;		
	}
`;

const ColorContainerBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	opacity: .2;
	transition: 350ms all ease;
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
    line-height: 1.5;
`;

export default props => {
	return (
		<ColorContainer>

			<ColorContainerBg style={{ backgroundColor: props.color.hex }} />
			<ColorContainerInner style={{ backgroundColor: props.color.hex }} />

			<ColorTitle style={{ color: props.color.hex }}>
				{props.color.name.toUpperCase()}
			</ColorTitle>
			<ClipboardButton
				data-clipboard-text={props.color.hex}
				onSuccess={props.onClick}
				style={{
					appearance: "none",
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					width: "100%",
					cursor: "pointer",
					zIndex: 10
				}}
			/>
		</ColorContainer>
	);
};
