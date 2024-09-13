export function createCategoryCardElement(
	title,
	icon,
	color,
	currentHours,
	previousHoursLabel,
	previousHours
) {
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
			<p class="category-current-hours-label">
				<span class="current-hours">${currentHours}</span><span>hrs</span>
			</p>
			<p class="category-previous-hours-container">
				<span class="previous-hours-label">${previousHoursLabel} - </span>
				<span class="previous-hours">${previousHours}</span><span>hrs</span>
			</p>
		</div>
	`;

	return categoryCardElement;
}
