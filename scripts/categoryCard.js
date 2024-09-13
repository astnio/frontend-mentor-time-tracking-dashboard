import { createCategoryCardElement } from './elementMaker.js';

export class CategoryCard {
	previousHoursLabel = '';
	previousHours = '';
	currentHours = '';
	htmlElement = null;

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

		this.htmlElement = createCategoryCardElement(
			this.title,
			this.icon,
			this.color,
			this.timeframes.weekly.current,
			'weekly',
			this.timeframes.weekly.previous
		);
	}

	setTimeframe(timeframe) {
		switch (timeframe) {
			case 'daily':
				this.previousHoursLabel = 'Yesterday';
				this.previousHours = this.timeframes.daily.previous;
				this.currentHours = this.timeframes.daily.current;
				break;
			case 'weekly':
				this.previousHoursLabel = 'Last Week';
				this.previousHours = this.timeframes.weekly.previous;
				this.currentHours = this.timeframes.weekly.current;
				break;
			case 'monthly':
				this.previousHoursLabel = 'Last Month';
				this.previousHours = this.timeframes.monthly.previous;
				this.currentHours = this.timeframes.monthly.current;
				break;
		}
	}

	updateHtml() {
		// this.htmlElement.querysel
	}
}
