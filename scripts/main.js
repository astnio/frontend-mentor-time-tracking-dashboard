import { CategoryCard } from './categoryCard.js';

const dataPath = '/data.json';

async function loadData(dataLocation) {
	try {
		const response = await fetch(dataLocation);
		if (!response.ok) {
			throw new Error('Error reading data!');
		}
		return await response.json();
	} catch (error) {
		console.error('Error reading data ', error);
		return null;
	}
}

const data = await loadData(dataPath);
console.log(data);

const categoryCards = {};

let idCounter = 0;

data.forEach((element) => {
	const categoryCard = new CategoryCard(
		element.id,
		element.title,
		element.timeframes,
		element.color,
		element.icon
	);
	categoryCards[element.id] = categoryCard;
	idCounter++;
});

console.log(categoryCards);
console.log(categoryCards[1].timeframes.daily.current);

function categoryCardElement(title, icon, color, timeframes) {
	let previousHoursLabel = '';
	let previousHours = '';
	let currentHours = '';

	switch (timeframes) {
		case 'daily':
			previousHoursLabel = 'Yesterday';
			previousHours = timeframes.daily.previous;
			currentHours = timeframes.daily.current;
			break;
		case 'weekly':
			previousHoursLabel = 'Last Week';
			previousHours = timeframes.weekly.previous;
			currentHours = timeframes.weekly.current;
			break;
		case 'monthly':
			previousHoursLabel = 'Last Month';
			previousHours = timeframes.monthly.previous;
			currentHours = timeframes.monthly.current;
			break;
	}

	return /* html */ `
	<section class="cateogry-card">
		<picture class="category-background category-bg-${color}">
			<img
				class="category-image"
				src="./images/icon-${icon}.svg"
				alt=""/>
		</picture>
		<div class="category-details">
			<h3 class="category-title">${title}</h3>
			<button class="button btn-more-options">
				<img
					class="btn-img-ellipsis"
					src="./images/icon-ellipsis.svg"
					alt="" />
			</button>
			<p class="category-hours-label">
				<span class="category-hours">${currentHours}</span><span>hrs</span>
			</p>
			<p class="category-hours-previous-label">
				<span>${previousHoursLabel} - </span>
				<span class="category-hours-last-week">${previousHours}</span><span>hrs</span>
			</p>
		</div>
	</section>
`;
}
