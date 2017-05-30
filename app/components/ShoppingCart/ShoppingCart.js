import React from 'react'
import Header from './Header'
import PayWith from './PayWith'
import styles from './ShoppingCart.css'

const ShoppingCart = ({ hasLoaded, user, payments, preferredId, ...props }) =>  (
  <section className={styles.container} style={{opacity:hasLoaded && 1}}>
    <Header price={user.price} />
    <main className={styles.main}>
      <p className={styles.welcome}>{`Welcome back, ${user.name}!`}</p>
      <PayWith
        price={user.price}
        preferredPayment={payments[preferredId]}
        isSwitching={props.isSwitching}
        switchPreferred={props.switchPreferred}
      />
    </main>
  </section>
)

export default ShoppingCart
