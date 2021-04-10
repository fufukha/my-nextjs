import { useRouter } from 'next/router'
import { GetServerSideProps, GetStaticProps } from 'next'
import { Article } from '../../../types/article-types'
import Link from 'next/link'

type ArticleProp = {
  article: Article
}

const article = ({ article }: ArticleProp) => {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <h1>Article is {id}</h1>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
} 



//
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
