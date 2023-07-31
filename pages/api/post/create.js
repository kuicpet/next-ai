import { v2 as cloudinary } from 'cloudinary'
import Post from '../../../models/Post'
import db from '../../../utils/db'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
})

export default async function createPost(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, prompt, photo } = req.body
      const photoUrl = await cloudinary.uploader.upload(photo)
      const newPost = await Post.create({
        name,
        prompt,
        photo: photoUrl.url,
      })
      res.status(201).json({ success: true, data: newPost })
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error,
      })
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }
}
