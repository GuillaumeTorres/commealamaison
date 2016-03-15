var mongoose = require('mongoose');
var User = require('../db/db').User;
var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');

const key = 'calm'

const createToken = userData => jwt.sign(userData, key)

const filterUserData = user => ({
	firstName: user.firstName,
	lastName: user.lastName,
	_id: user._id
})

const addToken = userData => Object.assign(userData, {token: createToken(userData)})

router.post('/login', (req, res) => {
	const password = req.body.password
	User.findOne({ email: req.body.email })
		.then(user => User.findOne({
			email: user.email,
			password: bcrypt.hashSync(password, user.salt)
		}))
		.then(filterUserData)
		.then(addToken)
		.then( user => res.send(user) )
		.catch( error => res.send(500) )
		// TODO Log
})

router.post('/signin', (req, res) => {
	const userData = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email
	}
	const password = req.body.password
	const salt = bcrypt.genSaltSync(10);
	const cryptedPassword = bcrypt.hashSync(password, salt)
	userData.password = cryptedPassword
	userData.salt = salt
	const user = new User(userData)
	user.save()
		.then(filterUserData)
		.then(addToken)
		.then(userDataWithToken => res.send(userDataWithToken))
});

module.exports = router