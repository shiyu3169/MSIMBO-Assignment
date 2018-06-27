module.exports = function(app){

	var websiteModel = require('../models/website/website.model.server.js')

	app.post("/api/user/:uid/website", createWebsite);
	app.get("/api/user/:uid/website", findAllWebsitesForUser);
	app.get("/api/website/:wid", findWebsiteById);
	app.put("/api/website/:wid", updateWebsite);
	app.delete("/api/website/:wid",deleteWebsite)

	function createWebsite(req, res){
		var website = req.body;
		websiteModel.createWebsiteForUser(website).then(
			(data) => {
				res.json(data);
			}
		);
		
	}
	function findAllWebsitesForUser(req, res) {
		var uid = req.params['uid'];
		websiteModel.findAllWebsitesForUser(uid).then(
			(websites) => {
				res.json(websites);
			}
		);
	}

	function findWebsiteById(req, res) {
		var wid = req.params['wid'];
		websiteModel.findWebsiteById(wid).then(
			(website) => {
				res.json(website);
			}
		)
	}

	function updateWebsite(req, res) {
		var wid = req.params['wid'];
		var website = req.body;
		websiteModel.updateWebsite(wid, website).then(
			data => {
				res.json(data);
			}
		);
	}

	function deleteWebsite(req, res) {
		var wid = req.params['wid'];
		websiteModel.deleteWebsite(wid).then(
			data => {
				res.json(data);
			}
		)
	}
}