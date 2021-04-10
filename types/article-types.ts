import { ParsedUrlQuery } from 'querystring'

export interface Article {
  userId: number
  id: number
  title: string
  body: string
}

export interface IParams extends ParsedUrlQuery {
  id: string
}