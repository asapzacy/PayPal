import React from 'react'
import { inputContainer, inputSearch, inputIcon, inputUnderline } from './styles.css'

const Input = ({ text, value, updatePaymentInfo, iconType }) => (
  <div className={inputContainer}>
    <input
      className={inputSearch}
      value={value}
      type={'text'}
      onChange={(e) => updatePaymentInfo(text, e)}
      spellCheck={false}
      placeholder={text}
    />
    { iconType &&
      <span className={inputIcon} style={{backgroundImage:`url(http://localhost:8080/assets/icons/${iconType}.svg)`}}></span>
    }
    <span className={inputUnderline}></span>
  </div>
)

export default Input
