export class CategoryCard {
	constructor(title, color, timeframes = null, image = null) {
		this.title = title;
		this.color = color;
		this.timeframes = timeframes;
		this.image = image;

		this.html = /* html */ `
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
	}
}
