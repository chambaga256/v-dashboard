const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let recordSchema = new Schema({
    collected_eggs:{
        type: Number,
    
    },
    dead_birds:{
        type: Number,
    
    },
    sold_eggs:{
        type: Number,
     

    },
    cost_each:{
        type: Number,
        
        
    },
    demage_eggs:{
        type: Number,
        
    },
    extra_eggs:{
        type: Number
    },
    closed_eggs:{
        type: Number,
       
    },
    date:{
        type:String
    }
    },{
        collection: 'records'
    })

module.exports = mongoose.model('records',  recordSchema);