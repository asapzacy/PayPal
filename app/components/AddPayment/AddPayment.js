import React from 'react'
import { Link } from 'react-router'
import { Input } from 'components'
import ArrowLeft from 'react-icons/lib/io/ios-arrow-left'
import { addPaymentContainer, addPaymentHeader } from './styles.css'
import { paymentsContainer, paymentsHeader, paymentsIcon, paymentsHeading } from 'styles/shared.css'

const AddPayment = ({ switchPanel, updatePaymentInfo, preferredPayment, updatePayment, ...props }) => {
  const { first, last, cc, expiration, csc } = props
  const userInfo = { first, last, cc, expiration, csc }
  return (
    <section className={paymentsContainer}>
      <header className={paymentsHeader}>
        <span className={paymentsIcon} style={{justifyContent:'flex-start'}}><Link to='/'><ArrowLeft /></Link></span>
        <h2 className={paymentsHeading}>{'Add debit or credit card'}</h2>
        <span className={paymentsIcon}></span>
      </header>
      <main>
        { Object.keys(userInfo).map((key, i) => <Input text={key} value={userInfo[key]} updatePaymentInfo={updatePaymentInfo} key={i} />) }
        <button onClick={(e) => updatePayment(userInfo, preferredPayment)}>{'add'}</button>
      </main>
    </section>
  )
}

export default AddPayment
