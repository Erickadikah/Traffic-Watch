import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '@/lib/mongo/mongo';
import Post, { PostType } from '@/lib/mongo/postModel';
import cloudinary from '@/lib/cloudinary/cloudinary';
import upload from '@/lib/multer/multer';

// Define the expected body of the request
interface CreatePostRequest extends NextApiRequest {
  body: {
    location: string;
    description: string;
  };
}

export default async function createPost(req: CreatePostRequest, res: NextApiResponse<PostType>) {
  // Establish MongoDB connection
  await connect();

  if (req.method === 'POST') {
    try {
      // Use upload as middleware for file upload
      upload.single('image')(req, res, async (error: any) => {
        if (error) {
          console.error('Error uploading file:', error);
          res.status(500).json({ error: 'An error occurred while uploading the file' });
          return;
        }

        try {
          const { location, description } = req.body;
          const file = req.file;

          // Upload the image to Cloudinary
          const cloudinaryUpload = await cloudinary.uploader.upload(file.path);

          // Create the post
          const myPost = await Post.create({
            location,
            description,
            image: cloudinaryUpload.secure_url,
          });
          await myPost.save();

          console.log('Created Post:', myPost);
          res.status(201).json(myPost);
        } catch (error) {
          console.error('Error creating post:', error);
          res.status(500).json({ error: 'An error occurred while creating the post' });
        }
      })
}