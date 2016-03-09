var usersRoutes = require('./home/routes');

module.exports = function routes(app){
	app.use('/users', usersRoutes);
}