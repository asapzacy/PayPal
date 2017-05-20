import React from 'react'
import { Logo } from 'components'
import Total from './Total'
import { shoppingCartContainer, shoppingCartHeader, shoppingCartMain, welcomeMessage } from './styles.css'

const ShoppingCart = ({ price, name }) => (
  <section className={shoppingCartContainer}>
    <header className={shoppingCartHeader}>
      <Logo name={'paypal'} />
      <Total price={price} />
    </header>
    <main className={shoppingCartMain}>
      <p className={welcomeMessage}>{`Welcome back, ${name}!`}</p>
    </main>
  </section>
)

export default ShoppingCart
