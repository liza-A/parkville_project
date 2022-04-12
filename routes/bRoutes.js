const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
router.use(expressValidator());
const mongoose = require('mongoose');


//requiring the model so that it can be used
const Bregistration = require('../models/battery');

//route for accessing/viewing the signup page
router.get('/bregistration', (req, res) => {
    res.render('bregistration')
});



//route for the post method
router.post('/bregistration', (req, res) => {
    //declare variables that correspond to the names of the different input fields in the form
    const batterysize = req.body.batterysize
    const batteryprice = req.body.batteryprice
    

    //validation of the fields we are capturing data from -- this is optional
    // req.checkBody('userName', 'User Name is required').notEmpty()
    // req.checkBody('email', 'Email is required').notEmpty()
    // req.checkBody('passwordNew', 'New Password is required').notEmpty()
    // req.checkBody('passwordConfirm', 'Confirm Password field is required').notEmpty()

    //Handling errors
    const errors = req.validationErrors()
    if (errors){
        //in case of an error, remain on signup
        res.render('bregistration')
    }
    else {
        let newBregistration = new Bregistration({
//value(as used in the schema): property(as used in the form as the name of the input type)
            batterysize: batterysize,
            batteryprice: batteryprice
            
        });
        
        newBregistration.save((err) =>{
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