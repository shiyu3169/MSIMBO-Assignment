import { Injectable } from '@angular/core';

// injecting service into module
@Injectable()

export class UserService {

  constructor() { }

  users = [
		{_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder", email: "alice@gmail.com"},
		{_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley",  email: "bob@whatever.com"},
		{_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia",  email: "charly@hotmail.com"},
		{_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu",   lastName: "Wang", email: "swang@ulem.org"}
		];


  api = {
    'createUser'   : this.createUser,
    'findUserById' : this.findUserById,
    'findUserByUsername': this.findUserByUsername,
    'findUserByCredentials': this.findUserByCredentials,
    'updateUser': this.updateUser,
    'deleteUser': this.deleteUser
  };

  createUser(user: any) {
    user._id = Math.random();
    this.users.push(user);
    return user;
  }

  findUserById(userId: string) {
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {  return this.users[x]; }
    }
  }

  findUserByUsername(username: string) { 
  	return this.users.find(function(user){
  		return user.username === username;
  	});
  }
  findUserByCredentials(username: string, password: string) { 
  	return this.users.find(function(user){
  		return user.username === username && user.password === password; 
  	});
 }
  updateUser(userId, user) {
  	const olduser = this.findUserById(userId);
  	const index = this.users.indexOf(olduser);
  	this.users[index].username = user.username;
  	this.users[index].firstName = user.firstName;
  	this.users[index].lastName = user.lastname;
  	this.users[index].email = user.email;
  } 
  deleteUser(userId) {
  	const oldUser = this.findUserById(userId);
  	const index = this.users.indexOf(oldUser);
  	this.users.splice(index, 1);
  }
}
