import { random } from "./helpers";
import data from "../config/data";

describe("random", () => {
	it("returns one random item in collection", () => {
		let randomItem = random(data.terribleColors);

		expect(randomItem.length).toEqual(undefined);
		expect(data.terribleColors).toContain(randomItem);
	});

	it("returns multiple unique, random items in collection", () => {
		let threeRandomItems = random(data.terribleWords, 3);
		let twoRandomItems = random(data.terribleWords, 2);

		expect(threeRandomItems).toHaveLength(3);
		threeRandomItems.forEach(item => {
			expect(data.terribleWords).toContain(item);
		});
		expect(Array.from(new Set(threeRandomItems))).toEqual(threeRandomItems);

		expect(twoRandomItems).toHaveLength(2);
		twoRandomItems.forEach(item => {
			expect(data.terribleWords).toContain(item);
		});
		expect(Array.from(new Set(twoRandomItems))).toEqual(twoRandomItems);
	});

	it("returns all items if count is out of range", () => {
		let items = random(data.terribleWords, 0);
		let moreItems = random(data.terribleWords, data.terribleWords.length + 1);

		expect(items).toEqual(data.terribleWords);
		expect(moreItems).toEqual(data.terribleWords);
	});
});
