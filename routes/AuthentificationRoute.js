import mongoose from "mongoose";
import express from "express";
import User from "../model/User.js";
import session from "express-session";

//const argon2i = require ('argon2-ffi').argon2i;
//const crypto = require ('crypto')
const app = express.Router();

/*app.use(session({ 
    secret: 'some secret',
    cookie: {maxAge:30000},
    saveUninitialized: false
}));




app.get('/login', (req, res) => {
    const { username , password } = req.query; // assume name is passed as a query parameter
    req.session.username = username;
    req.session.password = password;
    res.send(`Welcome, ${username}!`);
  });



  app.get('/dashboard', (req, res) => {
  const username = req.session.username;
  if (!username) {
    res.send('You are not logged in!');
  } else {
    res.send(`Welcome back, ${username}!`);
  }
});
  */

app.post("/account/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const userAccount = await User.findOne({ username: username });

    if (userAccount) {
      if (password === userAccount.password) {
        userAccount.lastAuthentification = Date.now();
        await userAccount.save();
        console.log("Retrieving account...");
        return res.status(200).json(userAccount);
      }
    }

    return res.status(401).json({ message: "Invalid credentials" });
  } catch (error) {
    // Handle database or other errors
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/account/create", async (req, res, next) => {
  const newaccount = new User(req.body);
  try {
    const savedaccount = await newaccount.save();
    res.status(200).json({ message: "user is created" });
  } catch (error) {
    next(error);
  }
});

export default app;
