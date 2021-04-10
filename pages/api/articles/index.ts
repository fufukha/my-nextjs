import { NextApiRequest, NextApiResponse } from 'next'
import { articles } from '../../../data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(articles)
}

export default handler
