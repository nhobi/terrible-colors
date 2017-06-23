import styled from "styled-components";
import React from "react";

const Button = styled.a`
	color: red;	
	padding: .5em 1em;
	border: 1px solid red;
	border-radius: 30px;
`;

export default props => {
	return (
		<Button onClick={props.onClick}>
			{props.text}
		</Button>
	);
};
