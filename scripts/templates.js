export function categoryCard() {
	const html = /* html */ `
    			<section class="cateogry-card">
				<picture class="category-background category-bg-orange">
					<img
						class="category-image"
						src="./images/icon-work.svg"
						alt=""
						srcset="" />
				</picture>
				<div class="category-details">
					<h3 class="category-title">Category</h3>
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

	return html;
}
