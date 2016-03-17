var usersRoutes = require('./routes/user')
var authRoutes = require('./routes/auth')
var noticeRoutes = require('./routes/notice')
var jwt = require('jsonwebtoken')

var checkToken = function (req, res, next) {
	const token = req.headers.authorization.split(' ')[1]
	try{
		const decoded = jwt.verify(token, process.env.JWT_SECRET)
		req.user = decoded
		next()
	}
	catch(err){
		res.sendStatus(400)
	}
}

module.exports = function routes(app){
	app.use('/users', checkToken, usersRoutes)
	app.use('/auth', authRoutes)
	app.use('/notice', checkToken, noticeRoutes)
}