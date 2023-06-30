import mongoose, { Schema, Document } from 'mongoose';

export interface PostType extends Document {
  location: string;
  description: string;
  image: string;
}

const postSchema = new Schema({
  location: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});

const Post = mongoose.models.Post || mongoose.model<PostType>('Post', postSchema);

export default Post;
