var mongoose = require('mongoose');
// var User = require('../db/db').User;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	User.find(function(err, results){
		if (err) { console.log(err); }

		res.send({ users:results })
	})
	// res.send([
	// 	{
	// 		firstName: 'user1',
	// 		lastName: 'user1',
	// 		email: 'user1@gmail.com'
	// 	},
	// 	{
	// 		firstName: 'user2',
	// 		lastName: 'user2',
	// 		email: 'user2@gmail.com'
	// 	},
	// 	{
	// 		firstName: 'user3',
	// 		lastName: 'user3',
	// 		email: 'user3@gmail.com'
	// 	}
	// ]);
});

module.exports = router;