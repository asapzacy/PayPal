import React from 'react'
import { CheckoutHeader, CreditCard, Input } from 'components'
import { editPaymentContainer, paymentInfoContainer, creditCardsContainer,
  editPaymentButton } from './styles.css'

const EditPayment = (props) => {
  const { preferredId, updatePaymentInfo, updatePaymentCard,
    savePaymentInfo, isSaved, payments } = props
  const newPaymentMethod = {
    first: props.first,
    last: props.last,
    type: props.type,
    cc: props.cc,
    expiration: props.expiration,
    csc: props.csc
  }
  let buttonText
  let newPaymentIndex
  let checkoutHeaderText
  if (!props.params.paymentId) {
    // if no params.paymentId === means were on /addPayment, so we give
    // newPaymentIndex index of .length instead of pushing and mutating
    // our this.state.payments array.
    newPaymentIndex = payments.length
    buttonText = 'Add'
    checkoutHeaderText = 'Add debit or credit card'
  } else {
    newPaymentIndex = preferredId
    buttonText = 'Save'
    checkoutHeaderText = 'Manage debit or credit card'
  }
  const creditCards = ['Visa', 'Amex', 'Mastercard', 'Discover']
  return (
    <section className={editPaymentContainer}>
      <CheckoutHeader text={checkoutHeaderText} isNotHomePage />
      <main className={paymentInfoContainer}>
        <Input text={'first'} value={newPaymentMethod.first} updatePaymentInfo={updatePaymentInfo} />
        <Input text={'last'} value={newPaymentMethod.last} updatePaymentInfo={updatePaymentInfo} />
        <section className={creditCardsContainer}>
          { creditCards.map((el, i) => (
            <CreditCard
              card={el}
              isActive={newPaymentMethod.type === el}
              updatePaymentCard={() => updatePaymentCard(el)}
              key={i}
            />)
          )}
        </section>
        <Input text={'cc'} value={newPaymentMethod.cc} updatePaymentInfo={updatePaymentInfo} iconType={newPaymentMethod.type} />
        <Input text={'expiration'} value={newPaymentMethod.expiration} updatePaymentInfo={updatePaymentInfo} />
        <Input text={'csc'} value={newPaymentMethod.csc} updatePaymentInfo={updatePaymentInfo} iconType={'csc'} />
        <button className={editPaymentButton} onClick={(e) => savePaymentInfo(newPaymentMethod, newPaymentIndex)}>
          { isSaved ? 'Saved' : buttonText }
        </button>
      </main>
    </section>
  )
}

export default EditPayment
