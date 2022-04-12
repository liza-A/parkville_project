// require mongoose
const mongoose = require('mongoose')
var Schema = mongoose.Schema;
// this helps us capture our user name.
const passportLocalmongoose = require('passport-local-mongoose')

// create schema
const signoffSchema = mongoose.Schema({
    receipt: {
        type: String,
        required: true
    },
    // the example above means data is a string and it's required
    dateandtime: {
        type: Date,
        required: true,
    },
    
    gender: {
        type: String,
        required: true
    }

});
// export schema
const Signoff = module.exports = mongoose.model('Signoff', signoffSchema);