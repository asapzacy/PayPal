import React from 'react'
import styles from './Footer.css'

const Footer = () => (
  <footer className={styles.container}>
    <p>{'built by Zac Arellano - '}
      <a className={styles.link} href='https://github.com/zacarellano/PayPal'>{'source'}</a>
    </p>
  </footer>
)

export default Footer
