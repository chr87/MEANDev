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
    insert:async (req,res)=>{ 
   
        try {                   
            const gw = new Gateway({usi:req.body.usi,name:req.body.name,address:req.body.address})  
            await gw.validate();                   
            await gw.save();         
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error)
        }    
        
    },    
    delete: async(req,res)=>{
       try{     
           await Gateway.findOneAndRemove({uid: req.body.id})
       }
       catch(err){
        res.status(400).send(error) 
       }
        
    }
}
module.exports = gateway;