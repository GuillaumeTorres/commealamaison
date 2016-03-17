var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var routes = require('./src/server/routes');
var env = require('node-env-file')

env(__dirname + '/.env');

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));
routes(app);

app.all('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, function() {
	console.log('Server running !');
});