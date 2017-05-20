import React from 'react'
import { Link } from 'react-router'
import ArrowLeft from 'react-icons/lib/io/ios-arrow-left'
import { addPaymentContainer, addPaymentHeader } from './styles.css'
import { paymentsContainer, paymentsHeader, paymentsIcon, paymentsHeading } from 'styles/shared.css'

const AddPayment = ({ switchPanel, updatePaymentInfo, addPayment, ...props }) =>{
  console.log(props)
  return (
  <section className={paymentsContainer}>
    <header className={paymentsHeader}>
      <span className={paymentsIcon} style={{justifyContent:'flex-start'}}><Link to='/'><ArrowLeft /></Link></span>
      <h2 className={paymentsHeading}>{'Add debit or credit card'}</h2>
      <span className={paymentsIcon}></span>
    </header>
    <main>
      <input type='text' onChange={(e) => updatePaymentInfo('first',e)} spellCheck={false} />
      <input type='text' onChange={(e) => updatePaymentInfo('last',e)} spellCheck={false} />
      <input type='text' onChange={(e) => updatePaymentInfo('number',e)} spellCheck={false} />
      <input type='text' onChange={(e) => updatePaymentInfo('expiration',e)} spellCheck={false} />
      <input type='text' onChange={(e) => updatePaymentInfo('csc',e)} spellCheck={false} />
      <button onClick={() => addPayment(props)}>{'add'}</button>
    </main>
  </section>
)
}

export default AddPayment
