import React from 'react'
import { inputContainer, search, underline } from './styles.css'

const Input = ({ text, value, updatePaymentInfo }) => (
  <div className={inputContainer}>
    <input
      className={search}
      value={value}
      type='text'
      onChange={(e) => updatePaymentInfo(text, e)}
      spellCheck={false}
      placeholder={text}
    />
    <span className={underline}></span>
  </div>
)

export default Input
