import { Configuration, OpenAIApi } from 'openai'
import db from '../../../utils/db'

const config = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
})

const openai = new OpenAIApi(config)

export default async function createAi(req, res) {
  if (req.method === 'POST') {
    try {
      await db.connect()
      const { prompt } = req.body
      const aiResponse = await openai.createImage({
        prompt,
        n: 1,
        size: '1024x1024',
        response_format: 'b64_json',
      })
      const image = aiResponse.data.data[0].b64_json
      res.status(200).json({ photo: image })
    } catch (error) {
      console.log(error)
      res.status(500).json(error?.response?.data?.error?.message)
    }
  } else {
    res.status(400).json({ message: 'Method not allowed' })
  }
}
