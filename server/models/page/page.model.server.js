var mongoose = require('mongoose');

var PageSchema = require('./page.schema.server.js')
var PageModel = mongoose.model('PageModel', PageSchema);

PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;

function createPage(page) {
	return PageModel.create(page);
}

function findAllPagesForWebsite(wid) {
	return PageModel.find({websiteId:wid});
}

function findPageById(pid) {
	return PageModel.findById(pid);
}

function updatePage(pid, page) {
	return PageModel.update({_id:pid}, page);
}

function deletePage(pid) {
	return PageModel.remove({_id:pid})
}

module.exports = PageModel;