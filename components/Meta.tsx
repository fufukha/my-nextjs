import Head from 'next/head'

type MetaProps = {
  title: string
  keywords: string
  description: string
}

//third party Next SEO does this
const Meta = ({
  title = 'WebDev Newz',
  keywords = 'web development, programming',
  description = 'Get latest news in web development',
}) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  )
}

export default Meta
