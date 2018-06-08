module.exports = function(app){

	pages = [
	  { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
	  { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
	  { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
	]


	app.post('/api/website/:wid/page', createPage);
	app.get('/api/website/:wid/page', findAllPagesForWebsite);
	app.get('/api/page/:pid', findPageById);
	app.put('/api/page/:pid', updatePage);
	app.delete('/api/page/:pid', deletePage);


	function createPage(req, res) {
		var page = req.body;
		page._id = Math.floor(Math.random() * 10000).toString();
		page.websiteId = req.params['wid'];
		pages.push(page);
		res.json(page);
	}

	function findAllPagesForWebsite(req, res) {
		var wid = req.params['wid'];
		let result = [];
		for(let i =0; i < pages.length;i++){
			if(pages[i].websiteId === wid) {
				result.push(pages[i]);
			}
		}

		res.json(result);
	}

	function selectPageById(pid) {
		for(let i=0;i<pages.length;i++) {
			if(pages[i]._id === pid) {
				return pages[i];
			}
		}
	}

	function findPageById(req, res) {
		var pid = req.params['pid'];
		var page = selectPageById(pid);
		res.json(page);
	}

	function updatePage(req, res) {
		var pid = req.params['pid'];
		var page = req.body;
		var oldPage = selectPageById(pid);
		const index = pages.indexOf(oldPage);
		pages[index].name = page.name;
		pages[index].description = page.description;
		res.json(page);
	}

	function deletePage(req, res) {
		var pid = req.params['pid'];
		let oldPage = selectPageById(pid);
		const index = this.pages.indexOf(oldPage);
		pages.splice(index, 1);
		res.json(pages);
	}
}