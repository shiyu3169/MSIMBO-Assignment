module.exports = function(app){
	
	var userModel = require('../models/user/user.model.server.js');

	app.get('/api/user', findUser);
	app.get('/api/user/:uid', findUserById);
	app.post("/api/user", createUser);
	app.put('/api/user/:uid', updateUser);
	app.delete('/api/user/:uid', deleteUser);

	// find user by given id
	function findUserById(req, res){
		var uid = req.params["uid"];
		userModel.findUserById(uid).then(
			data => {
				res.json(data);
			}
		)
    }

	function findUser(req, res) {
		const username = req.query['username'];
		const password = req.query['password'];
		
		// find user by credentials
		if(username && password) {
			userModel.findUserByCreadentials(username, password).then(
				data => {
					res.json(data);
				}
			);
    		return;
		}
		// find user by username
		if(username) {
			userModel.findUserByUsername(username).then(
				data => {
					res.json(data);	
				}
			);
			return;
		}
		res.json(users);
	}

	function createUser(req, res) {
		var user = req.body;
		userModel.createUser(user).then(
			(data) => {
				res.json(data);
			}
		)
	}

	function updateUser(req, res) {
		var uid = req.params['uid'];
		var user = req.body;
		userModel.updateUser(uid, user).then(
			data => {
				res.json(data);
			}
		);
	}

	function deleteUser(req, res) {
		var uid = req.parms["uid"];
		userModel.deleteUser(uid).then(
			data => {
				res.json(data);
			}
		);
	}
}