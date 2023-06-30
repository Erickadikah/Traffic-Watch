import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '@/lib/mongo/mongo';
import Post from '@/lib/mongo/postModel';

interface CreatePostRequest extends NextApiRequest {
  body: {
    location: string;
    description: string;
    image: string;
  };
}

export default async function createPost(req: CreatePostRequest, res: NextApiResponse<PostType>) {
  await connect(); // Establish MongoDB connection

  if (req.method === 'POST') {
    try {
      const { location, description, image } = req.body;
      console.log('Request Body:', req.body);
      const myPost = await Post.create({ location, description, image });
      console.log('Created Post:', myPost);
      res.status(201).json(myPost);
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).json({ error: 'An error occurred while creating the post' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}


