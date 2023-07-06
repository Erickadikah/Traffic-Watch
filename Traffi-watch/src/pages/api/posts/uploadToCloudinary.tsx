import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '@/lib/mongo/mongo';
import Post, { PostType } from '@/lib/mongo/postModel';
import cloudinary from '@/lib/cloudinary/cloudinary';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connect();
  if (req.method === 'GET') {
    const data = { message: 'Hello, world!' };
    res.status(200).json(data);
  } else {
// console.log(req.body)
 const { location, description,image } = JSON.parse(req.body);
//  console.log(JSON.parse(req.body))
 const cloudinaryUpload = await cloudinary.uploader.upload(image);
 const myPost = await Post.create({
            location,
            description,
            image: cloudinaryUpload.secure_url,
          });
          await myPost.save();
          console.log('Created Post:');
          res.status(200).json({myPost});
    // res.status(405).json({ message: 'Method Not Allowed' });
  }
  if ( req.method === 'DELETE') {
    const { id } = req.query;
    const post = await Post.findByIdAndDelete(id);
    res.status(200).json({ post });
    cloudinary.uploader.destroy(post.image);
  }
//update Post
  if ( req.method === 'PUT') {
    const { id } = req.query;
    const { location, description,image } = JSON.parse(req.body);
    const cloudinaryUpload = await cloudinary.uploader.upload(image);
    const post = await Post.findByIdAndUpdate(id, {
      location,
      description,
      image: cloudinaryUpload.secure_url,
    });
    await post.save();
    res.status(200).json({ post });
  }
}