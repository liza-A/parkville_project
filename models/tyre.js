// require mongoose
const mongoose = require('mongoose')
var Schema = mongoose.Schema;
// this helps us capture our user name.
const passportLocalmongoose = require('passport-local-mongoose')

// create schema
const tregistrationSchema = mongoose.Schema({
    tyresize: {
        type: String,
        required: true
    },
    // the example above means data is a string and it's required
    tyremake: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    tyreprice: {
        type: Number,
        required: true
    }
});
// export schema
const Tregistration = module.exports = mongoose.model('Tregistration', tregistrationSchema);