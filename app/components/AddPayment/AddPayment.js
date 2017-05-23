import React from 'react'
import { Link } from 'react-router'
import ArrowLeft from 'react-icons/lib/io/ios-arrow-left'
import { addPaymentContainer, addPaymentHeader } from './styles.css'
import { paymentsContainer, paymentsHeader, paymentsIcon, paymentsHeading } from 'styles/shared.css'

const AddPayment = ({ switchPanel, updatePaymentInfo, addPayment, ...userInfo }) => (
  <section className={paymentsContainer}>
    <header className={paymentsHeader}>
      <span className={paymentsIcon} style={{justifyContent:'flex-start'}}><Link to='/'><ArrowLeft /></Link></span>
      <h2 className={paymentsHeading}>{'Add debit or credit card'}</h2>
      <span className={paymentsIcon}></span>
    </header>
    <main>
      <input type='text' value={userInfo.first} onChange={(e) => updatePaymentInfo('first',e)} spellCheck={false} />
      <input type='text' value={userInfo.last} onChange={(e) => updatePaymentInfo('last',e)} spellCheck={false} />
      <input type='text' value={userInfo.cc} onChange={(e) => updatePaymentInfo('cc',e)} spellCheck={false} />
      <input type='text' value={userInfo.expiration} onChange={(e) => updatePaymentInfo('expiration',e)} spellCheck={false} />
      <input type='text' value={userInfo.csc} onChange={(e) => updatePaymentInfo('csc',e)} spellCheck={false} />
      <button onClick={() => addPayment(props)}>{'add'}</button>
    </main>
  </section>
)

export default AddPayment
