import mongoose, { Schema, Document } from 'mongoose';

export interface PostType extends Document {
  location: string;
  description: string;
  image: string;
}

const postSchema = new Schema({
  location: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  image: { type: Object, required: true },
  cloudinary_id: { type: String },
  // image: { type: String}
});
const Post = mongoose.models.Post || mongoose.model<PostType>('Post', postSchema);

export default Post;
