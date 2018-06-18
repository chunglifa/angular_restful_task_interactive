
console.log('SERVER.JS')
//CONFIGURATIONS*****************************************
console.log('CONFIGURATIONS*****************************************')
var express = require('express');
var app = express();
//BODY PARSER
var bodyParser = require('body-parser');
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// Require path
// var path = require('path');
// Setting our Static Folder Directory
// app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
// Setting our View Engine set to EJS
// app.set('view engine', 'ejs');
//SESSION
// var session = require('express-session');
// app.use(session({
//     secret: 'keyboardkitteh',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 60000 },
//   }))
//IMPORT ANGULAR
app.use(express.static( __dirname + '/myAngular/dist/myAngular' )); 
//LINKING CONFIG FILE MONGOOSE.JS
console.log('LINK FILE MONGOOSE.JS')
require('./server/config/mongoose.js');
//MODELS*****************************************
console.log('MODELS');

// Routes*****************************************
console.log('ROUTES*****************************************')
require('./server/config/routes.js')(app);

//LISTEN*****************************************
console.log('LISTEN*****************************************')
app.listen(8000, function() {
    console.log("listening on port 8000");
});