var Gateway= require('../../models/gateway'); 
var mongoose = require('mongoose'); 

// Wrap all the methods in an object

var gateway = {
    getAll: async(req,res)=>{
        try{
           var data=await Gateway.find()
           res.json(data);
        } 
        catch(err){
            
        }
    },  
    getGatewayById: async(req,res)=>{
         
        try{
           var data=await Gateway.find({_id:req.params.id})
           res.json(data);
        } 
        catch(err){
            
        }
    },    
    insert:async (req,res)=>{ 
    
        try {                   
            const gw = new Gateway({_id:req.body._id,name:req.body.name,address:req.body.address})  
            await gw.validate();                   
            await gw.save();
            res.json(gw);         
        }
        catch (error) {
            
            res.status(400).send(error)
        }    
        
    },    
    delete: async(req,res)=>{
       try{     
           await Gateway.findOneAndRemove({_id: req.body.id})
       }
       catch(err){
        res.status(400).send(error) 
       }
        
    }
}
module.exports = gateway;