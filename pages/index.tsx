import ArticleList from '../components/ArticleList'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Index = () => {
  const { data, error } = useSWR('api/articles', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <ArticleList articles={data} />
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`${server}/api/articles`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles: Article[] = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }

export default Index
