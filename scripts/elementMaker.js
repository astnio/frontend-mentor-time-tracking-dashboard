export function createCategoryCardElement(title, icon, color, timeframes) {
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

	const categoryCardElement = document.createElement('section');
	categoryCardElement.classList.add('category-card');

	categoryCardElement.innerHTML = /* html */ `
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
	`;

	return categoryCardElement;
}
