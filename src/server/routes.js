var usersRoutes = require('./routes/user');
var authRoutes = require('./routes/auth');
var noticeRoutes = require('./routes/notice');

module.exports = function routes(app){
	app.use('/users', usersRoutes);
	app.use('/auth', authRoutes);
	app.use('/notice', noticeRoutes);
}