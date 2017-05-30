import React from 'react'
import { Title, CreditCard } from 'components'
import Input from './Input'
import styles from './EditPayment.css'

const EditPayment = ({ payments, preferredId, updateInfo, updateCard, savePayment, ...props }) => {
  const newPayment = {
    first: props.first,
    last: props.last,
    type: props.type,
    cc: props.cc,
    expiration: props.expiration,
    csc: props.csc
  }
  let btnText
  let index
  let title
  if (!props.params.paymentId) {
    // if no params.paymentId === means were on /addPayment, so we give
    // newPaymentIndex an index of this.state.payments.length instead of
    // pushing and mutating our this.state.payments array.
    index = payments.length
    btnText = 'Add'
    title = 'Add debit or credit card'
  } else {
    index = preferredId
    btnText = 'Save'
    title = 'Manage debit or credit card'
  }
  const creditCards = ['Visa', 'Amex', 'Mastercard', 'Discover']
  return (
    <section className={styles.container} style={{borderRight:props.hasLoaded && '1px solid #bdbdbd'}}>
      <Title title={title} notHomePage />
      <main className={styles.info}>
        <Input text={'first'} value={newPayment.first} updateInfo={updateInfo} />
        <Input text={'last'} value={newPayment.last} updateInfo={updateInfo} />
        <section className={styles.creditCards}>
          { creditCards.map((el, i) => (
            <CreditCard
              card={el}
              isActive={newPayment.type === el}
              updateCard={() => updateCard(el)}
              key={i}
            />)
          )}
        </section>
        <Input text={'cc'} value={newPayment.cc} updateInfo={updateInfo} icon={newPayment.type} />
        <Input text={'expiration'} value={newPayment.expiration} updateInfo={updateInfo} />
        <Input text={'csc'} value={newPayment.csc} updateInfo={updateInfo} icon={'csc'} />
        <button className={styles.btn} onClick={(e) => savePayment(newPayment, index)}>
          { props.isSaved ? 'Saved' : btnText }
        </button>
      </main>
    </section>
  )
}

export default EditPayment
