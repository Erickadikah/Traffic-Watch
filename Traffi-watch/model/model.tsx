import { Schema, model, models } from "mongoose";


const dataSchema = new Schema({
    location: {
        String,
    },
    description: {
        String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    }
})

export default models.Data || model("Data", dataSchema);