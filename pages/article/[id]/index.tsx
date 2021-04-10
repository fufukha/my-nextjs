import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import { Article } from '../../../types/article-types'
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  )

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

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
