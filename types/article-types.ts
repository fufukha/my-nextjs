import { ParsedUrlQuery } from 'querystring'

export interface Article {
  userId?: number | string
  id: number | string
  title: string
  excerpt?: string
  body: string
}

export interface IParams extends ParsedUrlQuery {
  id: string
}
