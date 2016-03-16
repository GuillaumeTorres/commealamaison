var usersRoutes = require('./routes/user');
var authRoutes = require('./routes/auth');

var auth = (req, res, next) => {
	if(true){
		next();
	}else{
		return res.redirect(403, '/');
	}
}

module.exports = function routes(app){
	app.use('/users', auth, usersRoutes);
	app.use('/auth', authRoutes);
}