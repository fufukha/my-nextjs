import { server } from '../../../config'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Article, IParams } from '../../../types/article-types'
import Link from 'next/link'

type ArticleProp = {
  article: Article
}

const article = ({ article }: ArticleProp) => {
  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    //context get the id in the url
    `${server}/api/articles/${context.params.id}`
  )

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
  //creates a path for all the article even outside of the 6
  const res = await fetch(`${server}/api/articles`)

  const articles: Article[] = await res.json()
  const ids = articles.map((article) => article.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    //paths: params: {id: '1', id: '2',...}
    paths,
    fallback: false,
  }
}

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

export default article
