var mongoose = require('mongoose'); 
const { Schema } = require('mongoose-valid8');
const gatewaySchema = Schema({  

   _id:{//usi
        type: String,        
        required: true,
        unique: true,
    },
    name: {
        type: String,        
        required: true
        
    },
    address: {
        type: String,
        unique: true,
        ip: true,
        required: true     
    } 
     
})
module.exports = mongoose.model('gateway', gatewaySchema);

