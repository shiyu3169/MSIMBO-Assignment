var mongoose = require('mongoose');

var PageSchema = mongoose.Schema({
	name: String,
	websiteId: {type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'}, 
	description: String,
	dateCreated: {type: Date, default: Date.now}
},{collection: "page"});


module.exports = PageSchema;