import { server } from '../config'
import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import { Article } from '../types/article-types'

type HomeProps = {
  articles: Article[]
}

const Home = ({ articles }: HomeProps) => {
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name='keywords' content='web development, programming'></meta>
      </Head>
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
