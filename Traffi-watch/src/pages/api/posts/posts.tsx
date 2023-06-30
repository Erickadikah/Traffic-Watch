import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '@/lib/mongo/mongo';
import Post from '@/lib/mongo/postModel';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connect(); // Establishing MongoDB connection
  console.log('req.method', req.method);
  switch (req.method) {
    case 'POST':
      const bodyObject = JSON.parse(req.body);
      const myPost = await Post.create(bodyObject);
      res.json(myPost);
      break;
    case 'GET':
      const allPosts = await Post.find({});
      res.json({ status: 200, data: allPosts });
      break;
  }
}
