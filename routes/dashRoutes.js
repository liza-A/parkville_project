const express = require('express');
const router = express.Router();
const passport = require('passport');
const expressValidator = require('express-validator');
router.use(expressValidator());
const mongoose = require('mongoose');
const Vregistration = require('../models/vehicle');
const Tregistration = require('../models/tyre');
const Bregistration = require('../models/battery');

//retrieve vehicle
router.get('/dashboard', async(req, res) => {
    try{
        const data = await Vregistration.find({});
        let totalEarning = await Vregistration.aggregate([
            {$group:{_id:'$all',
             totalParking:{ $sum:'$vehicleprice'},
            }}
          ]);
        console.log('our total earnings',totalEarning)
  
         let totalTyrePrice = await Tregistration.aggregate([
              {$group:{_id:'$all', totalTyrePrice:{ $sum:'$tyreprice'}}}
            ]);
        console.log('our total earnings',totalTyrePrice)
         let totalBatteryPrice = await Bregistration.aggregate([
              {$group:{_id:'$all', totalBatteryPrice:{ $sum:'$batteryprice'}}}
            ]);
        console.log('our total earnings',totalBatteryPrice)
        console.log('>>>> all vregistrations' ,data)
        res.render('dashboard', {
            vregistrations : data,
            total:totalEarning[0],
            totalTyrePrice:totalTyrePrice[0],
            totalBatteryPrice:totalBatteryPrice[0],
          })
    }
    catch(error) {
        return res.status(400).send(
            {
                status: 400,
                message: 'failed to fetch all clients',
                error
            });
    }
});
//delete vehicle
router.get('/deleteVehicle/:id',async(req, res) => {
    try{
        await Vregistration.deleteOne({_id:req.params.id})
        res.redirect('/dashboard');
    }
    catch{
        res.status(400).send('unable to delete from database')
    }

});
//Updating Client info
// router.get('/vehicle/:id',async(req,res) =>{
//     try{
//         const updateVehicle = await Vregistration.findOne({_id:req.params.id})
//         res.render('vregistration',{vregistration:updateVehicle})
//     }catch(error){
//         res.status(400).send('unable to find in the database');
//     }
// }
// )
// router.post("/vehicle/",async(req, res) =>{
//     try{
//         await Vregistration.findOneAndUpdate({_id:req.query.id}, req.body)
//         res.redirect('/dashboard');
//     }catch (error){
//         res.status(400).send('unable to update registration');
//     }
// })

// router.get('/dashboard', async(req, res) => {
//      try{
//          const data = await Tregistration.find({});
//          console.log('>>>> all tregistrations' ,data)
//          res.render('dashboard', {tregistrations : data})
//      }
//      catch(error) {
//          return res.status(400).send(
//              {
//                  status: 400,
//                  message: 'failed to fetch all clients',
//                  error
//              });
//      }
//  });
 //delete from tyre clinic unit
// router.get('/deleteVehicle/:id',async(req, res) => {
//      try{
//         await Tregistration.deleteOne({_id:req.params.id})
//          res.redirect('/dashboard');
//      }
//      catch{
//          res.status(400).send('unable to delete from database')
//      }

//  });
module.exports = router;