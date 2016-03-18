var mongoose = require('mongoose')
var Chat = require('../db/db').Chat
var express = require('express')
var router = express.Router()



router.get('/user/:id_user', (req, res) => {
	var id = req.params.id_user
	Chat.find({ author: mongoose.Types.ObjectId(id) })
		.then(Chats => res.send(Chats))
		.catch(err => res.send(err))
})

// Enregistre une nouvelle annonce
router.post('/', (req, res) => {
	console.log(req.body)
	const Chat = new Chat(req.body)
	Chat.save()
		.then(Chat => res.send(Chat))
		.catch(error => res.sendStatus(500))
})

// Modifie une annonce
router.put('/:id', (req, res) => {
	
})

module.exports = router;