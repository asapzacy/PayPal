import React from 'react'
import { Wallet, ShoppingCart, AddPayment } from 'components'
import { AddPaymentContainer } from 'containers'
import { checkoutContainer, checkout } from './styles.css'

const Checkout = ({ panel, switchPanel, addPaymentMethod, addPayment }) => {
  console.log(panel)
 return (
  <main className={checkoutContainer}>
    <section className={checkout}>
      { panel === 'wallet'
        ? <Wallet switchPanel={switchPanel} />
        : panel === 'add'
          ? <AddPaymentContainer switchPanel={switchPanel} addPayment={addPayment} />
          : ''
      }
    </section>
    <ShoppingCart price={20.96} name={'Mark'} />
  </main>
)
}
export default Checkout
