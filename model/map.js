import mongoose from "mongoose" 

const mapSchema = new mongoose.Schema(
    {
        namemap : {
            type : String 
        } 

    }
)

export default mongoose.model("map",mapSchema)