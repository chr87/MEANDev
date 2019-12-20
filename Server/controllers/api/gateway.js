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
    console.log(req.body.usi,req.body.name,req.body.address)
        try {                   
            const gw = new Gateway({usi:req.body.usi,name:req.body.name,address:req.body.address})  
            await gw.validate();                   
            await gw.save();
            res.json(gw);         
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error)
        }    
        
    },    
    delete: async(req,res)=>{
       try{     
           await Gateway.findOneAndRemove({usi: req.body.id})
       }
       catch(err){
        res.status(400).send(error) 
       }
        
    }
}
module.exports = gateway;