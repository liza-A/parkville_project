const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressValidator = require ('express-validator');
const flash = require('connect-flash');
const passport = require('passport');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
});
const cors = require('cors')
// Import database configurations
const config = require('./config/database');
require('./config/passport')(passport);
// Importing Routes
const signupRoutes = require('./routes/signupRoutes');
const loginRoutes = require('./routes/loginRoutes');
const dashRoutes = require('./routes/dashRoutes');
const vRoutes = require('./routes/vRoutes');
const tRoutes = require('./routes/tRoutes');
const bRoutes = require('./routes/bRoutes');
const sRoutes = require('./routes/sRoutes');
// Instantiating the app/server
const app = express();
// creating a connection between the controller and database
mongoose.connect(config.database)
const db = mongoose.connection
// checking if we've connected
db.once('open',()=>{
    console.log('connected to mongodb');
});

db.on('error', (err)=>{
console.error(err);
});

// Setting up the view engine
app.engine('pug', require('pug').__express);
app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'views')); 

// MIDDLEWARE SECTION
// body Parser middleware section
// we are telling node to focus on information in the input fields
app.use(express.urlencoded({extended:false}));
// telling body parser to use json format
app.use (express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(expressSession);
// initialise
app.use(passport.initialize());
// this creates a session when initialisation has taken place
app.use(passport.session());
app.use(cors());
//passport.use(Signup.createStrategy());
//passport.serializeUser(Signup.serializeUser());
//passport.deserializeUser(Signup.deserializeUser());
// EXPRESS MESSAGE MIDDLEWARE FLASH
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});
// use imported routes
app.use('/', signupRoutes);
app.use('/', loginRoutes);
app.use('/', dashRoutes);
app.use('/', vRoutes);
app.use('/', tRoutes);
app.use('/', bRoutes);
app.use('/', sRoutes);
// For invalid routes as in if someone hits a non existent route.
//This should always be the last route after all other routes are excecuted.
// the message that appears in case someone searches for a route that doesnt exist on my server
app.get('*', (req, res) => {
  res.status(404).send('This is an invalid URL')
})
// server listening port
app.listen(4000,()=>{
    console.log('server started on port 4000')
});

