import { Schema, model, models} from  'mongoose'
import mongoose from 'mongoose'

const postSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
}, { timestamps: true })

const Post = mongoose.models.Post &&  'Post' in  mongoose.models ? mongoose.models.Post : model('Post', postSchema)
export default Post