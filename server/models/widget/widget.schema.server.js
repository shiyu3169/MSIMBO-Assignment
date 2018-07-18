var mongoose = require('mongoose');

var WidgetSchema = mongoose.Schema({
	pageId: {type:mongoose.Schema.Types.ObjectId, ref:"PageModel"},
	widgetType: {type: String, enum: ['HEADING', "IMAGE", 'YOUTUBE', 'HTML', "TEXT"]},
	name: String,
	text: String,
	url: String,
	width: String,
	size: Number,
	rows: Number,
	placeholder: String,
	formatted: Boolean,
	dateCreated: {type: Date, default: Date.now}
}, {collection: 'widget'})

module.exports = WidgetSchema;