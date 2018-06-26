var mongoose = require('mongoose');
var UserSchema = require('./user.schema.server.js');
var UserModel = mongoose.model('UserModel', UserSchema);

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findUserByCreadentials = findUserByCreadentials;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;

function createUser(user) {
	console.log(user);
	return UserModel.create(user);
}

function findUserById(uid) {
	return UserModel.findById(uid);
}

function findUserByUsername(username) {
	return UserModel.findOne({username: username});
}

function findUserByCreadentials(username, password) {
	return UserModel.findOne({username: username, password: password});
}

function updateUser(uid, user) {
	return UserModel.update({_id: uid}, user);
}

function deleteUser(uid) {
	return UserModel.remove({_id:uid});
}

module.exports = UserModel;