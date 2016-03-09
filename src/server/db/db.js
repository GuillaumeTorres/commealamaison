var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/users');

var User = mongoose.model('User', {
	firstName: String,
	lastName: String,
	email: String
});

module.exports.User = User;