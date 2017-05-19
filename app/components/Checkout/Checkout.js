import React from 'react'
import { Wallet, ShoppingCart } from 'components'
import { checkoutContainer } from './styles.css'

const Checkout = () => (
  <main className={checkoutContainer}>
    <Wallet />
    <ShoppingCart />
  </main>
)

export default Checkout
