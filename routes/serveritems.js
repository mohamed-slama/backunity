import mongoose from "mongoose"
import express from "express"
import serveritems from "../model/serveritems.js"
const app = express.Router() ;

//CREATE
app.post('/serveritems',

 async (req, res, next) => {
    const newserveritems = new serveritems(req.body);
  
    try {
      const savedserveritems= await newserveritems.save();
      res.status(200).json(savedserveritems);
    } catch (err) {
      next(err);
    }
  });


   //UPDATE
   app.put('/serveritems/:id',
   async (req, res, next) => {
     try {
       const updatedserveritems= await serveritems.findByIdAndUpdate(
         req.params.id,
         { $set: req.body },
         { new: true }
       );
       res.status(200).json(updatedserveritems);
     } catch (err) {
       next(err);
     }
   });
 
   //DELETE
   app.delete('/serveritems/:id',
   async (req, res, next) => {
     try {
       await serveritems.findByIdAndDelete(req.params.id);
       res.status(200).json("server item has been deleted.");
     } catch (err) {
       next(err);
     }
   });
 

  export default app;