import { categoryCards } from './categoryCardsManager.js';

const main = document.querySelector('main');

const btnSetCurrentDaily = document.getElementById('btn-set-current-daily');
const btnSetCurrentWeekly = document.getElementById('btn-set-current-weekly');
const btnSetCurrentMonthly = document.getElementById('btn-set-current-monthly');

for (const key in categoryCards) {
	const obj = categoryCards[key];
	main.appendChild(obj.htmlElement);
}

console.log(categoryCards[1].htmlElement);

btnSetCurrentDaily.addEventListener('click', () => {
	for (const key in categoryCards) {
		categoryCards[key].setTimeframe('daily');
	}
});

btnSetCurrentWeekly.addEventListener('click', () => {
	for (const key in categoryCards) {
		categoryCards[key].setTimeframe('weekly');
	}
});

btnSetCurrentMonthly.addEventListener('click', () => {
	for (const key in categoryCards) {
		categoryCards[key].setTimeframe('monthly');
	}
});
