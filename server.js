import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import auth from "./routes/AuthentificationRoute.js" 
import play from "./routes/player.js"
import serv from "./routes/serveritems.js"
const app = express()

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json());
mongoose.set('strictQuery', true);

//setting the database
dotenv.config() ; 
export const connect = async () => {
    try {
    await mongoose.connect(process.env.MONGO);
    
    } catch (error) {
        throw error
    }
   
}
 

app.use(auth)
app.use(play)
app.use(serv)

app.listen(13756, () => {
    connect() ; 
    console.log("listening on " + 13756);
})
