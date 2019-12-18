var mongoose = require('mongoose'); 
 
const userSchema = mongoose.Schema({
   
    udi: {
        type: Number,        
        required: true
        
    },
    vendor: {
        type: String,
        unique: true,        
        required: true     
    },
    dateCreation:{
        type:Date,
        unique: true,        
        required: true 
    },
    status:{
        type:Boolean,
        unique: true,        
        required: true 
    },
    gateway:{
        type:String
    }

    
})
module.exports = mongoose.model('peripherical', userSchema);