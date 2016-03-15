var usersRoutes = require('./routes/user');
var authRoutes = require('./routes/auth');

module.exports = function routes(app){
	app.use('/users', usersRoutes);
	app.use('/auth', authRoutes);
}