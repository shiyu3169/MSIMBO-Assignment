module.exports = function(app){

	var pageModel = require('../models/page/page.model.server.js')

	// pages = [
	//   { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
	//   { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
	//   { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
	// ]


	app.post('/api/website/:wid/page', createPage);
	app.get('/api/website/:wid/page', findAllPagesForWebsite);
	app.get('/api/page/:pid', findPageById);
	app.put('/api/page/:pid', updatePage);
	app.delete('/api/page/:pid', deletePage);


	function createPage(req, res) {
		var page = req.body;
		pageModel.createPage(page).then(
			(data) => {
				res.json(data);
			}
		);
	}

	function findAllPagesForWebsite(req, res) {
		var wid = req.params['wid'];
		pageModel.findAllPagesForWebsite(wid).then(
			(data) => {
				res.json(data);
			}
		);
	}


	function findPageById(req, res) {
		var pid = req.params['pid'];
		pageModel.findPageById(pid).then(
			(data) => {
				res.json(data);
			}
		);
	}

	function updatePage(req, res) {
		var pid = req.params['pid'];
		var page = req.body;
		pageModel.updatePage(pid, page).then(
			(data) => {
				res.json(data);
			}
		);
	}

	function deletePage(req, res) {
		var pid = req.params['pid'];
		pageModel.deletePage(pid).then(
			(data)=> {
				res.json(data);
			}
		);
	}
}