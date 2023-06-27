"use sever"
import connectDB from '@/Database/mongodb'
import Post from '@/models/postModel'

connectDB();

async function createPost(data: any) {
    console.log(data)
}

export default createPost