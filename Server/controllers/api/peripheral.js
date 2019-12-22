var Peripheral= require('../../models/peripheral'); 
var Gateway= require('../../models/gateway'); 
var mongoose = require('mongoose'); 

// Wrap all the methods in an object

var peripheral = {
    getAll: async(req,res)=>{
        try{
           var data=await Peripheral.find()
           res.json(data);
        } 
        catch(err){
            res.status(400).send(err) 
        }
    },  
    getAllByIdGateway:async(req,res)=>{
        try{
            
           var data=await Peripheral.find({gateway:req.params.id})
       
            res.json(data);
         } 
         catch(err){
             res.status(400).send(err) 
         }
    },   
    insert:async (req,res)=>{ 
       
      
        try {              
            var data=await Peripheral.find({gateway:req.body.gateway}).count(); 
             
             if(data<10){
                const gw = new Peripheral({_id:req.body._id,vendor:req.body.vendor,dateCreation:new Date(),status:req.body.status,gateway:req.body.gateway})           
                await gw.save();
                          
                res.json(gw);  
             }   
             else{
                throw new Error('only 10');
             }   
        }
        catch (error) {
           console.log(error)
           if(error.message=='only 10') res.status(401).send(error)
            res.status(400).send(error)
        }          
    },    
    delete: async(req,res)=>{
       try{     
           await Peripheral.findOneAndRemove({_id: req.params.id})
       }
       catch(err){
        res.status(400).send(err) 
       }       
    }
}
module.exports = peripheral;