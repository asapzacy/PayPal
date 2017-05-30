import React from 'react'
import styles from './Input.css'

const Input = ({ text, value, icon, updateInfo }) => (
  <div className={styles.container}>
    <input
      className={styles.search}
      value={value}
      type={'text'}
      onChange={(e) => updateInfo(text, e)}
      spellCheck={false}
      placeholder={text}
    />
    { icon &&
      <span className={styles.icon} style={{backgroundImage:`url(http://localhost:8080/assets/icons/${icon}.svg)`}}></span>
    }
    <span className={styles.underline}></span>
  </div>
)

export default Input
