import React from 'react'
import { Link } from 'react-router'
import { Logo, Payment } from 'components'
import ShoppingCartIcon from 'react-icons/lib/io/ios-cart'
import ArrowRight from 'react-icons/lib/io/ios-arrow-right'
import Close from 'react-icons/lib/io/ios-close-empty'
import { shoppingCartContainer, shoppingCartMain, welcomeMessage,
  shoppingCartHeader, shoppingCartPrice, shoppingCartIcon, payWithContainer,
  payWithText, payWithInfo } from './styles.css'

const ShoppingCart = ({ user, ...props }) =>  (
  <section className={shoppingCartContainer}>
    <ShoppingCartHeader price={user.price} />
    <main className={shoppingCartMain}>
      <p className={welcomeMessage}>{`Welcome back, ${user.name}!`}</p>
      <PayWithContainer
        price={user.price}
        preferredPaymentMethod={props.paymentMethods[props.preferredPaymentId]}
        isPaymentMethodBeingUpdated={props.isPaymentMethodBeingUpdated}
        changePaymentMethod={props.changePaymentMethod}
      />
    </main>
  </section>
)

export default ShoppingCart

const ShoppingCartHeader = ({ price }) => (
  <header className={shoppingCartHeader}>
    <Logo company={'paypal'} />
    <ShoppingCartTotal price={price} shouldShowCart={true} />
  </header>
)

const ShoppingCartTotal = ({ price, shouldShowCart }) => (
  <div>
    { shouldShowCart && <ShoppingCartIcon className={shoppingCartIcon} /> }
    <span className={shoppingCartPrice}>{`$${price.toLocaleString()} USD`}</span>
  </div>
)

const PayWithContainer = ({ price, preferredPaymentMethod, isPaymentMethodBeingUpdated, changePaymentMethod }) => (
  <section className={payWithContainer}>
    <h2 className={payWithText}>{'Pay with:'}</h2>
    <Link to='/' className={payWithInfo}>
      <span onClick={changePaymentMethod}>
        {'change'}
        { isPaymentMethodBeingUpdated ? <Close /> : <ArrowRight /> }
      </span>
    </Link>
    { preferredPaymentMethod && <Payment {...preferredPaymentMethod} isPreferred={true} shouldShowCheckmark={false} /> }
    <ShoppingCartTotal price={price} shouldShowCart={false} />
  </section>
)
