var fs = require('fs');
var path = require('path');
var express = require('express');
var fileUpload = require('express-fileupload');
var http = require('http');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static')
//express frame work
var app = express();
	app.use(bodyParser.urlencoded({limit: '100mb', extended: true }))
	// parse application/json
	app.use(bodyParser.json({limit: '100mb', extended: true}))
    app.use(fileUpload());
    app.use(express.static(__dirname + "/public"));
	app.use(function(req, res, next) {
			res.header("Access-Control-Allow-Origin", "*");
			//res.header("Access-Control-Allow-Headers", "X-Requested-With");
			//res.header("Access-Control-Allow-Headers", "Content-Type");
			//res.header("Access-Control-Allow-Headers", "Auth-Token");
			//res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
			res.header("Access-Control-Allow-Headers", "*");
			next();
    });
	
// Set up mongoose connection
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.set('debug', true);
let dev_db_url = 'mongodb://surveydb:surveydb321@localhost:27017/surveydb';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var server = http.createServer(app);

//Routes
const users_route = require('./routes/users.route'); // Imports routes
const cusers_route = require('./routes/cusers.route'); // Imports routes
const survey_route = require('./routes/survey.route'); // Imports routes
const surveyRes_route = require('./routes/surveyResponce.route'); // Imports routes
app.use('/users', users_route);
app.use('/survey', survey_route);
app.use('/cusers', cusers_route);
app.use('/surveyRes',surveyRes_route);

//Models
const UsersModel = require('./models/users.model');



    
server.listen(3399);
	