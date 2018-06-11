module.exports = function(app){ 
	widgets = [
  		{ _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO"},
  		{ _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
  		{ _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%", url: "https://www.w3schools.com/w3css/img_lights.jpg"},
  		{ _id: "456", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"},
  		{ _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
  		{ _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%", url: "https://youtu.be/AM2Ivdi9c4E" },
  		{ _id: "789", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"}
	];

	app.post('/api/page/:pid/widget', createWidget);
	app.get('/api/page/:pid/widget', findAllWidgetsForPage);
	app.get('/api/widget/:wgid', findWidgetById);
	app.put('/api/widget/:wgid', updateWidget) ;
	app.delete('/api/widget/:wgid', deleteWidget);

	function createWidget(req, res) {
		const pid = req.params['pid'];
		const widget = req.body;
		widget._id = Math.floor(Math.random() * Math.floor(10000)).toString();
		widget.pageId = pid;
		widgets.push(widget);
		res.json(widget);
	}

	function findAllWidgetsForPage(req, res) {
		const pid = req.params['pid'];
		var result = [];
		for(var i=0;i<widgets.length;i++){
			if(widgets[i].pageId === pid){
				result.push(widgets[i]);
			}
		}
		res.json(result);
	}

	function selectWidgetById(wgid) {
		for(var i=0;i<widgets.length;i++){
			if(widgets[i]._id === wgid){
				return widgets[i];
			}
		}
	}

	function findWidgetById(req, res) {
		const wgid = req.params['wgid']
		const widget = selectWidgetById(wgid);
		res.json(widget);
	}

	function updateWidget(req, res) {
		const wgid = req.params['wgid'];
		const widget = req.body;
		const oldWidget = selectWidgetById(wgid);
		const index = widgets.indexOf(oldWidget);
		widgets[index].size = widget.size;
		widgets[index].text = widget.text;
		widgets[index].width = widget.width;
		widgets[index].url = widget.url;
		res.json(widget);
	}

	function deleteWidget(req, res) {
		const wgid = req.params['wgid'];
		const oldWidget = selectWidgetById(wgid);
		const index = widgets.indexOf(oldWidget);
		widgets.splice(index,1);
		res.json(widgets);
	}
}

