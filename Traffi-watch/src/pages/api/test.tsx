import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '@/lib/mongo/mongo';
import Post from '@/lib/mongo/postModel';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connect(); // Establish MongoDB connection
  console.log('req.method', req.method);
  switch (req.method) {
    case 'POST':
      const bodyObject = JSON.parse(req.body);
      const myPost = await createPost(bodyObject);
      res.json(myPost);
      break;
    case 'GET':
      const allPosts = await getAllPosts();
      res.json({ status: 200, data: allPosts });
      break;
  }
}

async function createPost(postData: any) {
  const post = new Post(postData);
  const newPost = await post.save();
  return newPost;
}

async function getAllPosts() {
  const allPosts = await Post.find({});
  return allPosts;
}
