var mongoose = require('mongoose')
var Notice = require('../db/db').Notice
var express = require('express')
var router = express.Router()

// Retourne les annonces autour de chez soi, filtré par type
router.post('/search', (req, res) => {
	console.log(req.body)
	console.log(req.user)
	// Notice.find({ _id:  })
	// 	.then(user => res.send(user))
	// 	.catch(err => res.send(err))
	res.send([
		{
			author: {
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
			},
			title: 'Le bricoleur du dimanche',
			description: 'Salut, je suis Jean, retraité et disponnible pour peindre une pièce de votre maison pour pas chère !',
			type: 'Peinture',
			created: 1457910000
		},
		{
			author: {
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
			},
			title: 'Peintre expert !',
			description: 'Askip je suis le meilleurs !',
			type: 'Peinture',
			created: 1457910000
		}
	])
})

// Retourne une annocne
router.get('/:id', (req, res) => {
	res.send(
		{
			author: {
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
			},
			title: 'Le bricoleur du dimanche',
			description: 'Salut, je suis Jean, retraité et disponnible pour peindre une pièce de votre maison pour pas chère !',
			type: 'Peinture',
			created: 1457910000
		}
	)
})

router.get('/user/:id_user', (req, res) => {
	var id = req.params.id_user
	Notice.find({ author: mongoose.Types.ObjectId(id) })
		.then(notices => res.send(notices))
		.catch(err => res.send(err))
})

// Enregistre une nouvelle annonce
router.post('/', (req, res) => {
	console.log(req.body)
	const notice = new Notice(req.body)
	notice.save()
		.then(notice => res.send(notice))
		.catch(error => res.sendStatus(500))
})

// Modifie une annonce
router.put('/:id', (req, res) => {
	
})

module.exports = router;