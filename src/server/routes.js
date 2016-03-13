var usersRoutes = require('./routes/user');

module.exports = function routes(app){
	app.use('/users', usersRoutes);
}