import React from 'react'
import CartIcon from 'react-icons/lib/io/ios-cart'
import styles from './Total.css'

const Total = ({ price, showCart }) => (
  <div>
    { showCart && <CartIcon className={styles.icon} /> }
    { price && <span className={styles.price}>{`$${price.toLocaleString()} USD`}</span> }
  </div>
)

export default Total
