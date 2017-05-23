import React from 'react'
import { Logo, Payment } from 'components'
import Total from './Total'
import ArrowRight from 'react-icons/lib/io/ios-arrow-right'
import Close from 'react-icons/lib/io/ios-close-empty'
import { shoppingCartContainer, shoppingCartHeader, shoppingCartMain,
  welcomeMessage, payWithContainer } from './styles.css'

const ShoppingCart = ({ price, name, payments, preferredPayment, changePaymentMethod, isPaymentChanging }) =>  (
  <section className={shoppingCartContainer}>
    <header className={shoppingCartHeader}>
      <Logo name={'paypal'} />
      <Total price={price} />
    </header>
    <main className={shoppingCartMain}>
      <p className={welcomeMessage}>{`Welcome back, ${name}!`}</p>
      <section className={payWithContainer} style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap'}}>
        <h2 style={{width:'50%'}}>{'Pay with:'}</h2>
        <span style={{width:'50%',textAlign:'right',cursor:'pointer'}} onClick={changePaymentMethod}>
          {'change'}
          { isPaymentChanging ? <Close /> : <ArrowRight /> }
        </span>
        { payments[preferredPayment] && <Payment {...payments[preferredPayment]} /> }
        <Total price={price} />
      </section>
    </main>
  </section>
)

export default ShoppingCart
