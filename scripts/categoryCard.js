export class CategoryCard {
	constructor(
		id,
		title,
		timeframes = {},
		currentTimeframe = 'weekly',
		color = '',
		icon = ''
	) {
		this.id = id;
		this.title = title;
		this.timeframes = timeframes;
		this.currentTimeframe = currentTimeframe;
		this.color = color;
		this.icon = icon;
	}
}
