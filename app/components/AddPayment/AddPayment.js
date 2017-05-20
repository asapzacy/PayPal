import React from 'react'
import ArrowLeft from 'react-icons/lib/io/ios-arrow-left'
import { addPaymentContainer, addPaymentHeader } from './styles.css'
import { paymentHeader } from 'styles/shared.css'

const AddPayment = ({ switchPanel, updatePaymentInfo, addPayment, ...props }) =>{
  console.log(props)
  return (
  <section className={addPaymentContainer}>
    <header className={paymentHeader}>
      <span onClick={() => switchPanel('wallet')}><ArrowLeft /></span>
      <h2>{'Add debit or credit card'}</h2>
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
