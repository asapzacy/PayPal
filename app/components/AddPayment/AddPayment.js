import React from 'react'
import { Link } from 'react-router'
import { Input } from 'components'
import ArrowLeft from 'react-icons/lib/io/ios-arrow-left'
import { EditPaymentMethodContainer, addPaymentHeader } from './styles.css'
import { paymentsContainer, paymentsHeader, paymentsIcon, paymentsHeading } from 'styles/shared.css'

const AddPayment = ({ preferredPaymentId, updatePaymentInfo, updateCardType, savePaymentMethod, buttonText = 'Save', isPaymentSaved, ...props }) => {
  const newPaymentMethod = {
    first: props.first,
    last: props.last,
    type: props.type,
    cc: props.cc,
    expiration: props.expiration,
    csc: props.csc
  }
  return (
    <section className={paymentsContainer}>
      <header className={paymentsHeader}>
        <span className={paymentsIcon} style={{justifyContent:'flex-start'}}><Link to='/'><ArrowLeft /></Link></span>
        <h2 className={paymentsHeading}>{'Add debit or credit card'}</h2>
        <span className={paymentsIcon}></span>
      </header>
      <main>
        <img style={{width:33}} src={`/assets/icons/visa.svg`} onClick={() => updateCardType('Visa')} />
        <img style={{width:33}} src={`/assets/icons/amex.svg`} onClick={() => updateCardType('Amex')} />
        <img style={{width:33}} src={`/assets/icons/mastercard.svg`} onClick={() => updateCardType('Mastercard')} />
        <img style={{width:33}} src={`/assets/icons/Discover.svg`} onClick={() => updateCardType('Discover')}/>
        { Object.keys(newPaymentMethod).map((key, i) => (
          <Input
            text={key}
            value={newPaymentMethod[key]}
            updatePaymentInfo={updatePaymentInfo}
            key={i}
          />)
        )}
        <button onClick={(e) => savePaymentMethod(preferredPaymentId, newPaymentMethod)}>{isPaymentSaved ? `${buttonText === 'Save' ? 'Saved' : 'Added'}` : buttonText}</button>
      </main>
    </section>
  )
}

export default AddPayment
