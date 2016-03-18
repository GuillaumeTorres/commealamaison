var mongoose = require('mongoose');
 var User = require('../db/db').User;
var express = require('express');
var router = express.Router();

// Retourne tous les utilisateurs
router.get('/', (req, res) => {
	// Retour bdd
	User.find().then((results) => {
		res.send(results);
	});

});

// Retourne un utilisateur
router.get('/:id', (req, res) => {
	res.send(
		{
			firstName: 'Jean',
			lastName: 'Dupond',
			email: 'jean.dupond@gmail.com',
			address: {
				rue: '9 rue de la Paix',
				city: 'Paris',
				postal_code: '75002'
			},
			phone_number: '0683165620',
			coordinate: {
				long: 2.331241099999943,
				lat: 48.8687607
			}
		}
	);
});

// Enregistre un utilisateur
router.post('/', (req, res) => {
	var user = new User(req.body);

	user.save().then((err) => {
		res.send('utilisateur enregitré !');
	});
});

// Modifie un utilisateur
router.put('/', (req, res) => {
	console.log('Update user');
	res.send('Informations modifiées !');
});

module.exports = router;