import React from 'react'
import { CheckoutHeader, CreditCard, Input } from 'components'
import { paymentsContainer, paymentsHeader, paymentsIcon, paymentsHeading } from 'styles/shared.css'
import { editPaymentContainer } from './styles.css'

const EditPayment = ({ preferredPaymentId, updatePaymentInfo, updatePaymentCard, savePaymentInfo, buttonText = 'Save', isPaymentSaved, ...props }) => {
  const newPaymentMethod = {
    first: props.first,
    last: props.last,
    type: props.type,
    cc: props.cc,
    expiration: props.expiration,
    csc: props.csc
  }
  const creditCards = ['Visa', 'Amex', 'Mastercard', 'Discover']
  return (
    <section className={editPaymentContainer}>
      <CheckoutHeader text={'Add debit or credit card'} />
      <main className={null}>
        <Input text={'first'} value={newPaymentMethod.first} updatePaymentInfo={updatePaymentInfo} />
        <Input text={'last'} value={newPaymentMethod.last} updatePaymentInfo={updatePaymentInfo} />
        <section className={null}>
          { creditCards.map((el, i) => (
            <CreditCard
              card={el}
              isActive={newPaymentMethod.type === el}
              updatePaymentCard={() => updatePaymentCard(el)}
              key={i}
            />)
          )}
        </section>
        <Input text={'cc'} value={newPaymentMethod.cc} updatePaymentInfo={updatePaymentInfo} />
        <Input text={'expiration'} value={newPaymentMethod.expiration} updatePaymentInfo={updatePaymentInfo} />
        <Input text={'csc'} value={newPaymentMethod.csc} updatePaymentInfo={updatePaymentInfo} />
        <button onClick={(e) => savePaymentInfo(preferredPaymentId, newPaymentMethod)}>{isPaymentSaved ? `${buttonText === 'Save' ? 'Saved' : 'Added'}` : buttonText}</button>
      </main>
    </section>
  )
}

export default EditPayment
