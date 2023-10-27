import mongoose from "mongoose"
import express from "express"
import profil from "../model/player.js"
const app = express.Router() ; 


//CREATE
app.post('/account/player',

 async (req, res, next) => {
    const newplayer = new player(req.body);
  
    try {
      const savedplayer= await newplayer.save();
      res.status(200).json(savedplayer);
      
    } catch (err) {
      next(err);
    }
  });
  

  //UPDATE
  app.put('/account/player/:id',
  async (req, res, next) => {
    try {
      const updatedplayer= await player.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedplayer);
    } catch (err) {
      next(err);
    }
  });

  //DELETE
  app.delete('/account/player/:id',
  async (req, res, next) => {
    try {
      await player.findByIdAndDelete(req.params.id);
      res.status(200).json("player has been deleted.");
    } catch (err) {
      next(err);
    }
  });



  export default app;

 