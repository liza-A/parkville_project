const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
router.use(expressValidator());
const mongoose = require('mongoose');


//requiring the model so that it can be used
const Tregistration = require('../models/tyre');

//route for accessing the tyre page
router.get('/tregistration', (req, res) => {
    res.render('tregistration')
});


//route for the post method
router.post('/tregistration', (req, res) => {
    //declare variables that correspond to the names of the different input fields in the form
    const tyresize = req.body.tyresize
    const tyremake = req.body.tyremake
    const model = req.body.model
    const service = req.body.service
    const tyreprice = req.body.tyreprice
    
    //validation of the fields we are capturing data from -- this is optional
    // req.checkBody('userName', 'User Name is required').notEmpty()
    // req.checkBody('email', 'Email is required').notEmpty()
    // req.checkBody('passwordNew', 'New Password is required').notEmpty()
    // req.checkBody('passwordConfirm', 'Confirm Password field is required').notEmpty()

    //Handling errors
    const errors = req.validationErrors()
    if (errors){
        //in case of an error, remain on signup
        res.render('tregistration')
    }
    else {
        let newTregistration = new Tregistration({
//value(as used in the schema): property(as used in the form as the name of the input type)
            tyresize: tyresize,
            tyremake: tyremake,
            model: model,
            service: service,
            tyreprice: tyreprice
        });
        
        newTregistration.save((err) =>{
            if(err){
                console.error(err);
                return;
            }
            else{
                console.log('data saved in database');
                res.redirect('/dashboard')
            }
        }
        )
    }
});
module.exports = router;