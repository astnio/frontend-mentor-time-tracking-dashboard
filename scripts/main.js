import { categoryCards } from './categoryCardsManager.js';
import { createCategoryCardElement } from './elementMaker.js';

// console.log(categoryCards);
// console.log(categoryCards[1].timeframes.daily.current);

const testCat = categoryCards[1];
console.log(testCat);

const testCard = createCategoryCardElement(
	testCat.title,
	testCat.icon,
	testCat.color,
	testCat.timeframes
);

const main = document.querySelector('main');

main.append(testCard);

const allCategoryCards = document.querySelectorAll('.category-card');
