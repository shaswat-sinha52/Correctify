import mongoose,{ mongo, Schema } from "mongoose";
const topicschema=new Schema(
    {
        topic:String
    },
    {
        timestamps:true
    }

)
const Topic=mongoose.models.Topic || mongoose.model("Topic",topicschema)
export default Topic