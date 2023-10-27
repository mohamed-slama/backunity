import mongoose from "mongoose" 

const UserSchema = new mongoose.Schema(
    {
        username : {
            type : String 
        } ,
        password : {
            type : String 
        },
        email : {
            type : String 
        },
        lastAuthentification : {
            type : Date 
        }
    }
)

export default mongoose.model("User",UserSchema)