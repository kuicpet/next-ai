import { v2 as cloudinary } from 'cloudinary'
import Post from '../../../models/Post'
import db from '../../../utils/db'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
})

export default async function getAllPosts(req, res) {
  if (req.method === 'GET') {
    try {
      await db.connect()
      const posts = await Post.find({})
      if (posts.length > 0) {
        res.status(200).json({ success: true, data: posts })
      } else {
        res.status(400).json({ success: false, message: 'Np Posts Found' })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({
        success: false,
        message: 'An error occurred fetching posts',
      })
    } finally {
      await db.disconnect()
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }
}
