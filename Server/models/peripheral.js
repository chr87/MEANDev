var mongoose = require('mongoose'); 
 
const userSchema = mongoose.Schema({
   
    _id: {//uid
        type: Number,   
        unique:true,     
        required: true
        
    },
    vendor: {
        type: String,              
        required: true     
    },
    dateCreation:{
        type:Date,               
        required: true 
    },
    status:{
        type:Boolean,         
        required: true 
    },
    gateway:
    {
        type:String
    }
})
module.exports = mongoose.model('peripherical', userSchema);