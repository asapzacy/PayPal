import React from 'react'
import { Logo } from 'components'
import styles from './Header.css'

const Header = () => (
  <header className={styles.container}>
    <Logo company={'toys-r-us'} />
    <span className={styles.divider}></span>
    <Logo company={'babies-r-us'} />
  </header>
)

export default Header
