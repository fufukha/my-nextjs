import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'
import { Article } from '../types/article-types'

type ArticleItemProp = {
  article: Article
}

const ArticleItem = ({ article }: ArticleItemProp) => {
  return (
    <Link href='/article[id]' as={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  )
}

export default ArticleItem
