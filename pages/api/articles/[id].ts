import { NextApiRequest, NextApiResponse } from 'next'
import { articles } from '../../../data'

const handler = ({ query: { id } }: NextApiRequest, res: NextApiResponse) => {
  const filtered = articles.filter((article) => article.id === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Article with the ${id} is not found` })
  }
}

export default handler
