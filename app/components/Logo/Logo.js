import React from 'react'
import styles from './Logo.css'

const Logo = ({ company }) => (
  <img
    className={styles.logo}
    src={`/assets/img/logos/${company}.svg`}
    alt={`${company} Logo`}
  />
)

export default Logo
