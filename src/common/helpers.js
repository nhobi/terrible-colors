function getRandomIndex(length) {
	return Math.floor(Math.random() * length);
}

function removeItem(items, indexToRemove) {
	return items.filter(i => i !== items[indexToRemove]);
}

export const random = (items, count = 1) => {
	if (count < 1 || count > items.length) {
		return items;
	}

	if (count === 1) {
		return items[getRandomIndex(items.length)];
	}

	let randomItems = [];

	for (let i = 0; i < count; i++) {
		let indexToAdd = getRandomIndex(items.length);

		randomItems = [...randomItems, items[indexToAdd]];
		items = removeItem(items, indexToAdd);
	}

	return randomItems;
};

export const shuffle = array => {
	let currentIndex = array.length, temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
};
