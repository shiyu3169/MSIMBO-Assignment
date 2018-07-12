module.exports = function(app){
	
	var bcrypt = require("bcrypt-nodejs");
	var userModel = require('../models/user/user.model.server.js');

	var passport = require('passport');
	passport.serializeUser(serializeUser);
	passport.deserializeUser(deserializeUser);
	var LocalStrategy = require('passport-local').Strategy;
	passport.use(new LocalStrategy(localStrategy));

	function localStrategy(username, password, done) {
		userModel.findUserByUsername(username).then(
			(user) => {
				if(user && bcrypt.compareSync(password, user.password)) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
			}
		)


        // userModel.findUserByCredentials(username, password).then(
        //     (user) => {
        //         if(user && bcrypt.compareSync(password, user.password)) {
        //             return done(null, user);
        //         } else {
        //             return done(null, false);
        //         }
        //     }
        // )
   }

	app.get('/api/user', findUser);
	app.get('/api/user/:uid', findUserById);
	app.post("/api/user", createUser);
	app.put('/api/user/:uid', updateUser);
	app.delete('/api/user/:uid', deleteUser);
	app.post('/api/register', register);
	app.post('/api/login', passport.authenticate('local'), login);
	app.post('/api/logout', logout);
	app.post('/api/loggedIn', loggedin);

	function loggedin(req, res) {
		if(req.isAuthenticated()) {
			res.send(req.user);
		} else {
			res.send("0");
		}
	}	

	function logout(req, res) {
   		req.logOut();
   		res.sendStatus(200);
	}

	function serializeUser(user, done) {
		done(null, user);
	}

	function deserializeUser(user, done) {
	    userModel
	        .findUserById(user._id)
	        .then(
	            function(user){
	                done(null, user);
	            },
	            function(err){
	                done(err, null);
	            }
	        );
	}

	function login(req, res) {
   		var user = req.user;
   		res.json(user);
	}

	function register (req, res) {
	    var user = req.body;
	    user.password = bcrypt.hashSync(user.password);

	    userModel.createUser(user).then(
	        function(user){
               req.login(user, function(err) {
                   res.json(user);
               });
	        }
	    );
	}

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