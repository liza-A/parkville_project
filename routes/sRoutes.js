const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
router.use(expressValidator());
const mongoose = require('mongoose');


//requiring the model so that it can be used
const Signoffreg = require('../models/signoff');

//route for accessing/viewing the signup page
router.get('/signoffreg', (req, res) => {
    res.render('signoffreg')
});



//route for the post method
router.post('/signoffreg', (req, res) => {
    //declare variables that correspond to the names of the different input fields in the form
    const receipt = req.body.receipt
    const dateandtime = req.body.dateandtime
    const gender = req.body.gender
    
    //validation of the fields we are capturing data from -- this is optional
    // req.checkBody('userName', 'User Name is required').notEmpty()
    // req.checkBody('email', 'Email is required').notEmpty()
    // req.checkBody('passwordNew', 'New Password is required').notEmpty()
    // req.checkBody('passwordConfirm', 'Confirm Password field is required').notEmpty()

    //Handling errors
    const errors = req.validationErrors()
    if (errors){
        //in case of an error, remain on signup
        res.render('signoffreg')
    }
    else {
        let newSignoffreg = new Signoffreg({
//value(as used in the schema): property(as used in the form as the name of the input type)
            receipt: receipt,
            dateandtime: date,
            gender: gender,
        });
        
        newSignoffreg.save((err) =>{
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