const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
router.use(expressValidator());
const mongoose = require('mongoose');
//requiring the model so that it can be used
const Vregistration = require('../models/vehicle');

//route for accessing/viewing the vehicle registration page
router.get('/vregistration', (req, res) => {
    res.render('vregistration')
});

//route for the post method
router.post('/vregistration', (req, res) => {
    //declare variables that correspond to the names of the different input fields in the form
    const name = req.body.name
    const numberplate = req.body.numberplate
    const colorofvehicle = req.body.colorofvehicle
    const phonenumber = req.body.phonenumber
    const model = req.body.model
    const date = req.body.date
    const nin = req.body.nin
    const duration = req.body.duration
    const description = req.body.description
    const vehicleprice = req.body.vehicleprice

    //validation of the fields we are capturing data from -- this is optional
    // req.checkBody('userName', 'User Name is required').notEmpty()
    // req.checkBody('email', 'Email is required').notEmpty()
    // req.checkBody('passwordNew', 'New Password is required').notEmpty()
    // req.checkBody('passwordConfirm', 'Confirm Password field is required').notEmpty()

    //Handling errors
    const errors = req.validationErrors()
    if (errors){
        //in case of an error, remain on signup
        res.render('vregistration')
    }
    else {
        let newVregistration = new Vregistration({
//value(as used in the schema): property(as used in the form as the name of the input type)
            name:name,
            numberplate: numberplate,
            colorofvehicle: colorofvehicle,
            phonenumber: phonenumber,
            model: model,
            date: date,
            nin: nin,
            duration: duration,
            description: description,
            vehicleprice: vehicleprice
        });
        
        newVregistration.save((err) =>{
            if(err){
                console.error(err);
                return;
            }
            else{
                console.log('data saved in database');
                res.redirect('/dashboard')
            }
        }) 
    }
});
module.exports = router;