import React from 'react'
import { inputContainer, search, underline } from './styles.css'

const Input = ({ text, value, updatePaymentInfo }) => (
  <div className={inputContainer}>
    <label>{text}</label>
    <input className={search} value={value} type='text' onChange={(e) => updatePaymentInfo(text, e) } spellCheck={false} />
    <span className={underline}></span>
  </div>
)

export default Input
