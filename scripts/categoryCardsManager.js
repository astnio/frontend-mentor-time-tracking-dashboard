import { data } from './fetchData.js';
import { CategoryCard } from './categoryCard.js';

export const categoryCards = {};

data.forEach((element) => {
	const categoryCard = new CategoryCard(
		element.id,
		element.title,
		element.timeframes,
		'weekly',
		element.color,
		element.icon
	);
	categoryCards[element.id] = categoryCard;
});
