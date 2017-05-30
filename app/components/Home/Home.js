import React from 'react'
import { Link } from 'react-router'
import styles from './Home.css'

const Home = ({ loadSampleData }) => (
  <section className={styles.container}>
    <header className={styles.header}>
      <h1 className={styles.hi}>{'Hi.. '}</h1>
      <h2 className={styles.message}>
        {'I built this project with the following - '}
        <br />
        <a className={styles.link} href={'https://github.com/facebook/react'}>{'React.js'}</a>
        {', '}
        <a className={styles.link} href={'https://github.com/ReactTraining/react-router'}>{'React Router'}</a>
        {', '}
        <a className={styles.link} href={'https://github.com/nodejs/node'}>{'Node.js'}</a>
        {', '}
        <a className={styles.link} href='https://github.com/expressjs/express'>{'Express'}</a>
        {', and '}
        <a className={styles.link} href='https://github.com/webpack/webpack'>{'Webpack 2'}</a>
        {'.'}
      </h2>
    </header>
    <Link to={'/user'} className={styles.btn} onClick={loadSampleData}>
      {'Load sample data'}
    </Link>
  </section>
)

export default Home
