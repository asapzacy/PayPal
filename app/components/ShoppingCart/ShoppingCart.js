import React from 'react'
import { Logo } from 'components'
import { shoppingCartContainer, shoppingCartHeader } from './styles.css'

const ShoppingCart = () => (
  <section className={shoppingCartContainer}>
    <header className={shoppingCartHeader}>
      <Logo name={'paypal'} />
    </header>
  </section>
)

export default ShoppingCart
