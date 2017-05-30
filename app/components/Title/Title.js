import React from 'react'
import { Link } from 'react-router'
import Arrow from 'react-icons/lib/io/ios-arrow-left'
import styles from './Title.css'

const Title = ({ title, notHomePage, children }) => (
  <header className={styles.container}>
      { notHomePage &&
        <span className={styles.icon}>
          <Link to='/user'><Arrow /></Link>
        </span>
      }
    <h2 className={styles.title}>{title}</h2>
    {children}
  </header>
)

export default Title
