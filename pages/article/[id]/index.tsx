import Link from 'next/link'
import Meta from '../../../components/Meta'
import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

const Article = () => {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/articles/${query.id}`,
    fetcher
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Meta title={data.title} description={data.excerpt} />
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

// export const getStaticProps: GetStaticProps = async (context) => {
//   const res = await fetch(
//     //context get the id in the url
//     `${server}/api/articles/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths: GetStaticPaths<IParams> = async () => {
//   //creates a path for all the article even outside of the 6
//   const res = await fetch(`${server}/api/articles`)

//   const articles: Article[] = await res.json()
//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return {
//     //paths: params: {id: '1', id: '2',...}
//     paths,
//     fallback: false,
//   }
// }

// export const getStaticProps: GetStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths: GetStaticPaths<IParams> = async () => {
//   //creates a path for all the article even outside of the 6
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//   const articles: Article[] = await res.json()
//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return {
//     //paths: params: {id: '1', id: '2',...}
//     paths,
//     fallback: false,
//   }
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   )

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// const article = () => {
//   const router = useRouter()
//   const { id } = router.query
//   return (
//     <div>
//       This is an article {id}
//     </div>
//   )
// }

export default Article
