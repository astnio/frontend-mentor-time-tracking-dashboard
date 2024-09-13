export class CategoryCard {
	constructor(id, title, timeframes = {}, color = '', icon = '') {
		this.id = id;
		this.title = title;
		this.color = color;
		this.timeframes = timeframes;
		this.icon = icon;
	}
}
