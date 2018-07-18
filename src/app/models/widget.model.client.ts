export class Widget {
	_id?: string;
	widgetType: string;
	pageId: string;
	name?: string;
	size?: number;
	text?: string;
	width?: string;
	url?: string;
	rows?: number;
	placeholder?: string;
	formatted?: boolean;

	constructor(_id, widgetType, pageId) {
		this._id = _id;
		this.widgetType = widgetType;
		this.pageId = pageId;
	}
}