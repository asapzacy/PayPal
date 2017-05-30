import React from 'react'
import { Logo } from 'components'
import Total from './Total'
import styles from './Header.css'

const Header = ({ price }) => (
  <header className={styles.header}>
    <Logo company={'paypal'} />
    <Total price={price} showCart />
  </header>
)


export default Header
