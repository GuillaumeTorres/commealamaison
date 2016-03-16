var mongoose = require('mongoose')
var User = require('../db/db').User
var express = require('express')
var router = express.Router()
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
var nodeGeo = require('node-geocoder')

var geocoderProvider = 'google'
var httpAdapter = 'http'

var geocoder = nodeGeo(geocoderProvider)

const key = 'calm'

const createToken = userData => jwt.sign(userData, key)

const filterUserData = user => ({
	_id: user._id,
	firstName: user.firstName,
	lastName: user.lastName,
	email: user.email,
	address: user.address,
	coordinate: user.coordinate
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
		.catch( error => res.sendStatus(500) )
})

router.post('/signin', (req, res) => {
	var strAddress = req.body.address.street+' '+req.body.address.city+' '+req.body.address.postal_code
	if(!req.body.email || !req.body.password){
		res.send('email or password empty...');
	}
	geocoder.geocode(strAddress)
    .then(function(result) {
        var address = {
			street: result[0].streetNumber +' '+result[0].streetName,
			city: result[0].city,
			postal_code: result[0].zipcode
		}
		var coordinate = {
			long: result[0].longitude,
			lat: result[0].latitude
		}
		var birthday = new Date(req.body.birthday.year, req.body.birthday.month-1, req.body.birthday.day)
		const userData = {
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			birthday: birthday,
			address: address,
			coordinate: coordinate
		}
		const password = req.body.password
		const salt = bcrypt.genSaltSync(10)
		const cryptedPassword = bcrypt.hashSync(password, salt)
		userData.password = cryptedPassword
		userData.salt = salt
		const user = new User(userData)
		user.save()
			.then(filterUserData)
			.then(addToken)
			.then(userDataWithToken => res.send(userDataWithToken))
		return address
    })
    .catch(function(err) {
        console.log('Geocode: ',err)
    })
})

module.exports = router