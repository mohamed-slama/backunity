import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import auth from "./routes/AuthentificationRoute.js";
import play from "./routes/player.js";
import serv from "./routes/serveritems.js";
import User from "./model/User.js";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.set("strictQuery", true);

//setting the database
dotenv.config();

const mongodbUri =
  process.env.MONGO_CONNECT_URI ||
  "mongodb+srv://mohamedslama1:OUzdcNfgcCvb3byt@cluster0.stl4f2f.mongodb.net/Logingame?retryWrites=true&w=majority";

mongoose
  .connect(mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


app.get("/", async (req, res, next) => {
  const users = await User.find();
  res.status(200).json(users);
});
app.use(auth);
app.use(play);
app.use(serv);

app.listen(13756, () => {

  console.log("listening on " + 13756);
});
