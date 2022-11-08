let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

    
//Apply model
let recordSchema = require('../models/record');
let activitiesSchema =require('../models/activities');
const { data } = require('autoprefixer');
//send records
router.route('/record').post((req, res, next)=>{
    recordSchema.create(req.body, (error, data)=>{
        if(error){
            return next(error)
        }else{
            console.log(data)
            res.json(data)
        }
    })
});

// registering activities

router.route('/activities').post((req, res, next)=>{
    activitiesSchema.create(req.body, (error,data)=>{

        if(error){
            return next(error)
        }else{
            console.log(data)
            res.json(data)
        }

    })

})
// get the activities
router.route('/activity').get((req,res)=>{
    activitiesSchema.find((error, data)=>{
        if(error){
            return(error)
        }else{
            res.json(data)
        }

    })
    
})

//get applications
router.route('/dashboard').get((req, res)=>{
    // eslint-disable-next-line array-callback-return
    recordSchema.find((error, data)=>{
        if(error){
            return(error)
        }else{
            res.json(data)
        }
    })
});

//admin route
router.route('/admin').get((req, res)=>{
    // eslint-disable-next-line array-callback-return
    recordSchema.find((error, data)=>{
        if(error){
            return(error)
        }else{
            res.json(data)
        }
    })
});

// Delete Application
router.route('/delete-student/:id').delete((req, res, next) => {
    recordSchema.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })

module.exports = router;