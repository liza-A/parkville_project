// require mongoose
const mongoose = require('mongoose')
var Schema = mongoose.Schema;
// this helps us capture our user name.
const passportLocalmongoose = require('passport-local-mongoose')

// create schema
const vregistrationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    // the example above means data is a string and it's required
    numberplate: {
        type: String,
        required: true,

    },
    colorofvehicle: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true,
        
    },
    model: {
        type: String,
        required: true,

    },
    date: {
        type: Date,
        required: true,
    },
    nin: {
        type: String,
        required: true,
    },
    duration:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    vehicleprice: {
        type: Number,
        required: true,
    }
});
// export schema
const Vregistration = module.exports = mongoose.model('Vregistration', vregistrationSchema);