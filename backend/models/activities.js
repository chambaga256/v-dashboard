const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let activitiesSchema = new Schema({
    brought_in:{
        type: String,
    
    },
    cost:{
        type: Number,
    
    },
    quantity:{
        type: String,
     

    },
    date:{
        type: String,
        
        
    },
  
    },{
        collection: 'activities'
    })

module.exports = mongoose.model('activities',  activitiesSchema);