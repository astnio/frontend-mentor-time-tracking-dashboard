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

const html = /* html */ `
	<section class="cateogry-card">
		<picture class="category-background category-bg-${this.color}">
			<img
				class="category-image"
				src="./images/${this.image}.svg"
				alt=""
				srcset="" />
		</picture>
		<div class="category-details">
			<h3 class="category-title">${this.title}</h3>
			<button class="button btn-more-options">
				<img
					class="btn-img-ellipsis"
					src="./images/icon-ellipsis.svg"
					alt="" />
			</button>
			<p class="category-hours-label">
				<span class="category-hours">00</span><span>hrs</span>
			</p>
			<p class="category-hours-previous-label">
				<span>Last week - </span>
				<span class="category-hours-last-week">00</span><span>hrs</span>
			</p>
		</div>
	</section>
`;
