module.exports = function (app) {
  app.post("/api/website/:wid/page", createPage);
  app.get("/api/website/:wid/page", findAllPagesForWebsite);
  app.get("/api/page/:pid", findPageById);
  app.put("/api/page/:pid", updatePage);
  app.delete("/api/page/:pid", deletePage);

  var pages = [
      { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
      { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
      { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
    ];

  // generates next id for new user
  function nextId() {
    return (Number(pages[pages.length - 1]._id) + 1).toString();
  }

  function createPage(req, res) {
    var newPage = req.body;
    newPage._id = nextId();
    pages.push(newPage);
    res.json(pages);
  }
  //  /api/website/:wid/page
  function findAllPagesForWebsite(req, res) {
    var wid = req.params["wid"];
    const results = [];
    for (var x = 0; x < pages.length; x++) {
      if (pages[x].websiteId === wid) {
        results.push(pages[x]);
      }
    }
    res.json(results);
  }

  function selectPageById(pid) {
    return pages.find(function(page) {
      return page._id === pid;
    })
  }

  function findPageById(req, res) {
    var pid = req.params["pid"];
    var page = selectPageById(pid);
    res.json(page);
  }

  function updatePage(req, res) {
    var pid = req.params["pid"];
    var newPage = req.body;
    var oldPage = selectPageById(pid);
    var index = pages.indexOf(oldPage);
    pages[index].name = newPage.name;
    pages[index].description = newPage.description;
    res.json(newPage);
  }

  function deletePage(req, res) {
    var pid = req.params["pid"];
    var page = selectPageById(pid);
    var index = pages.indexOf(page);
    pages.splice(index, 1);
    res.json(pages);
  }
};
