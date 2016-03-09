var mongoose = require('mongoose');
// var User = require('../db/db').User;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.send([
		{
			firstName: 'guigui',
			lastName: 'toto',
			email: 'guigui.toto@gmail.com'
		},
		{
			firstName: 'guigui',
			lastName: 'toto',
			email: 'guigui.toto@gmail.com'
		},
		{
			firstName: 'guigui',
			lastName: 'toto',
			email: 'guigui.toto@gmail.com'
		},
		{
			firstName: 'guigui',
			lastName: 'toto',
			email: 'guigui.toto@gmail.com'
		}
	]);
});

module.exports = router;