import mongoose from "mongoose" 

const serveritemsSchema = new mongoose.Schema(
    {
        name : {
            type : String 
        } ,
        positionx : {
            type : Number
        },

        positiony : {
            type : Number
        }
    
    }
)

export default mongoose.model("serveritems",serveritemsSchema)