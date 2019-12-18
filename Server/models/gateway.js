var mongoose = require('mongoose'); 
 
const gatewaySchema = mongoose.Schema({  

    _id:{
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

