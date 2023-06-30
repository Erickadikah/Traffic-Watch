import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '@/lib/mongo/mongo';
import Post, { PostType } from '@/lib/mongo/postModel';

export default async function getPosts(req: NextApiRequest, res: NextApiResponse<{ posts: PostType[] }>) {
  await connect(); // Establish MongoDB connection

  if (req.method === 'GET') {
    try {
      const allPosts = await Post.find({});
      res.status(200).json({ posts: allPosts });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while retrieving the posts' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}