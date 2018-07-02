module.exports = function(app){ 

	var multer = require('multer'); // npm install multer --save
    var upload = multer({ dest: './dist/assets/uploads' });

    var widgetModel = require("../models/widget/widget.model.server");

	app.post('/api/page/:pid/widget', createWidget);
	app.get('/api/page/:pid/widget', findAllWidgetsForPage);
	app.get('/api/widget/:wgid', findWidgetById);
	app.put('/api/widget/:wgid', updateWidget) ;
	app.delete('/api/widget/:wgid', deleteWidget);
	app.post("/api/user/:uid/website/:wid/page/:pid/widget/:wgid/upload", upload.single('myFile'), uploadImage);

	function uploadImage(req, res) {

		const uid = req.params['uid'];
        const wid = req.params['wid'];
        const pid = req.params['pid'];
        const wgid = req.params['wgid'];

        var myFile = req.file;

        widget = widgetModel.findWidgetById(wgid).then(
        	(widget) => {
        		widget.url = '/assets/uploads/'+myFile.filename;
        		widgetModel.updateWidget(wgid, widget).then(
        			(data) => {
        				var callbackUrl = req.headers.origin + "/user/" + uid + "/website/" + wid + "/page/" + pid + "/widget/" + wgid;
        				res.redirect(callbackUrl);
        			}
        		);
        	}
        );

       

        

        
	}


	function createWidget(req, res) {
		const widget = req.body;
		widgetModel.createWidget(widget).then(
			widget => {
				res.json(widget);
			}
		);
	}

	function findAllWidgetsForPage(req, res) {
		const pid = req.params['pid'];
		widgetModel.findAllWidgetsForPage(pid).then(
			(widgets) => {
				res.json(widgets);
			}
		);
	}

	function findWidgetById(req, res) {
		const wgid = req.params['wgid']
		widgetModel.findWidgetById(wgid).then(
			widget => {
				res.json(widget);
			}
		);
	}

	function updateWidget(req, res) {
		const wgid = req.params['wgid'];
		const widget = req.body;
		widgetModel.updateWidget(wgid, widget).then(
			data => {
				res.json(data);
			}
		);
	}

	function deleteWidget(req, res) {
		const wgid = req.params['wgid'];
		widgetModel.deleteWidget(wgid).then(
			data => {
				res.json(data);
			}
		);
	}
}

