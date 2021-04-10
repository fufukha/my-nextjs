import ArticleItem from './ArticleItem'
import { Article } from '../types/article-types'
import articleStyles from '../styles/Article.module.css'

type ArticleListProps = {
  articles: Article[]
}
const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article, i) => (
        <ArticleItem key={i} article={article} />
      ))}
    </div>
  )
}

export default ArticleList
