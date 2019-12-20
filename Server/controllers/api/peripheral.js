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
            // var data=await Gateway.find({usi:req.params.id})
           var data=await Peripheral.find({gateway:req.params.id})
         //   console.log(data[0].peripherals)
            res.json(data);
         } 
         catch(err){
             res.status(400).send(err) 
         }
    },   
    insert:async (req,res)=>{ 
       
        var query = {'usi':req.body.gateway};
        try {              
            var data=await Gateway.find({usi:req.body.gateway}); 
             
            const gw = new Peripheral({uid:req.body.uid,vendor:req.body.vendor,dateCreation:new Date(),status:req.body.status,gateway:req.body.gateway})           
            await gw.save();
            // var newPeripheral=data[0].peripherals;            
            // newPeripheral.push({uid:req.body.uid,vendor:req.body.vendor,dateCreation:new Date(),status:req.body.status})
            // Gateway.findOneAndUpdate(query, {$set: {peripherals:newPeripheral}}, {new:true}, function(err, doc){

            // })          
            res.json(gw);        
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error)
        }    
        
    },    
    delete: async(req,res)=>{
       try{     
           await Peripheral.findOneAndRemove({uid: req.body.id})
       }
       catch(err){
        res.status(400).send(error) 
       }
       
    }
}
module.exports = peripheral;