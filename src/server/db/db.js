var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/calm');

var User = mongoose.model('User', {
	firstName: String,
	lastName: String,
	email: String,
	password: String,
	salt: String,
	address: {
		rue: String,
		city: String,
		postal_code: String
	},
	phone_number: String,
	coordinate: {
		long: Number,
		lat: Number
	}
});

var Notice = mongoose.model('Notice', {
	author: Schema.ObjectId,
	title: String,
	description: String,
	type: String,
	created: Date
});

var Chat = mongoose.model('Chat', {
	content: String,
	sender: Schema.ObjectId,
	receiver: Schema.ObjectId,
	created: Date
});


module.exports.User = User;
module.exports.Notice = Notice;
module.exports.Chat = Chat;