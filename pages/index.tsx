import ArticleList from '../components/ArticleList'
import { server } from '../config'
import { Article } from '../types/article-types'

type HomeProps = {
  articles: Article[]
}

const Home = ({ articles }: HomeProps) => {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles: Article[] = await res.json()

  return {
    props: {
      articles,
    },
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles: Article[] = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }

export default Home
