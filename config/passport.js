const LocalStrategy = require('passport-local').Strategy;
const Signup = require('../models/signupModel');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

module.exports = function(passport){
  // Local strategy
  passport.use(new LocalStrategy(function(email, password, done){
    // match username
    let query = { email: email };
    Signup.findOne(query, function(err, signupModel){
      if(err) throw err;

      if(!signupModel) {
        return done(null, false, { message: 'No user found' });
      }
// Match password
bcrypt.compare(password, signupModel.password, function(err, isMatch){
    if (err) throw err;
    if(isMatch) {
      return done(null, signupModel);
    } else {
      return done(null, false, { message: 'Wrong password' });
    }
  });
})
}))
passport.serializeUser(function(signupModel, done) {
    done(null, signupModel.id);
  });

  passport.deserializeUser(function(id, done) {
    Signup.findById(id, function(err, signupModel) {
      done(err, signupModel);
    });
  });
};