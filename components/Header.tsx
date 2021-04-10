import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={`title ${headerStyles.title}`}>
        <span>WebDev</span> News
        <style jsx>
          {`
            .title {
              color: grey
            }
          `}
        </style>
      </h1>
      <p className={headerStyles.description}>Keep up to date with the latest web dev news</p>
    </div>
  )
}

export default Header
