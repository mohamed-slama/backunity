import mongoose from "mongoose" 

const playerSchema = new mongoose.Schema(
    {
        nickname : {
            type : String 
        } ,
        coins : {
            type : Number
        }

        

        
        

    }
)

export default mongoose.model("player",playerSchema)