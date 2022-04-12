// require mongoose
const mongoose = require('mongoose')
var Schema = mongoose.Schema;
// this helps us capture our user name.
const passportLocalmongoose = require('passport-local-mongoose')

// create schema
const bregistrationSchema = mongoose.Schema({
    batterysize: {
        type: String,
        required: true
    },
    // the example above means data is a string and it's required
    batteryprice: {
        type: Number,
        required: true,   
    },
});
// export schema
const Bregistration = module.exports = mongoose.model('Bregistration', bregistrationSchema);