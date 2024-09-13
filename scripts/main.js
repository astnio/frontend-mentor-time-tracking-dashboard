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

	btnSetCurrentDaily.dataset.active = 'true';
	btnSetCurrentWeekly.dataset.active = 'false';
	btnSetCurrentMonthly.dataset.active = 'false';
});

btnSetCurrentWeekly.addEventListener('click', () => {
	for (const key in categoryCards) {
		categoryCards[key].setTimeframe('weekly');
	}

	btnSetCurrentDaily.dataset.active = 'false';
	btnSetCurrentWeekly.dataset.active = 'true';
	btnSetCurrentMonthly.dataset.active = 'false';
});

btnSetCurrentMonthly.addEventListener('click', () => {
	for (const key in categoryCards) {
		categoryCards[key].setTimeframe('monthly');
	}

	btnSetCurrentDaily.dataset.active = 'false';
	btnSetCurrentWeekly.dataset.active = 'false';
	btnSetCurrentMonthly.dataset.active = 'true';
});
