var Peripheral= require('../../models/peripheral'); 
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
    insert:async (req,res)=>{ 
   
        try {                   
            const gw = new Peripheral({_id:req.body.id,name:req.body.name,address:req.body.address})           
            await gw.save();         
        }
        catch (error) {
            console.log(error)
            res.status(400).send(error)
        }    
        
    },    
    delete: async(req,res)=>{
       try{     
           await Peripheral.findOneAndRemove({_id: req.body.id})
       }
       catch(err){
        res.status(400).send(error) 
       }
       
    }
}
module.exports = peripheral;