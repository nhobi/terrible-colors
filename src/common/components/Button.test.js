import React from "react";
import Button from "./Button";
import renderer from "react-test-renderer";

describe("Button", () => {
	it("renders correctly", () => {
		let btn = renderer.create(<Button />).toJSON;

		expect(btn).toMatchSnapshot();
	});

	it("fires onClick prop on click", () => {
		let mock = jest.fn();
		let btn = renderer.create(<Button onClick={mock} />).toJSON();

		btn.props.onClick();
		expect(mock).toBeCalled();
	});
});
