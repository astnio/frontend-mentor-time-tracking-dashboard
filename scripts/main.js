import { categoryCards } from './categoryCardsManager.js';
import { createCategoryCardElement } from './elementMaker.js';

console.log(categoryCards);
console.log(categoryCards[1].timeframes.daily.current);

const testCat = categoryCards[1];

const testCard = createCategoryCardElement(
	testCat.title,
	testCat.icon,
	testCat.color,
	testCat.timeframes
);

console.log(testCard);

const main = document.querySelector('main');

main.append(testCard);
