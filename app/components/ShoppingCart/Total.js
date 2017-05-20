import React from 'react'
import Cart from 'react-icons/lib/io/ios-cart'
import { shoppingCartTotal, cartIcon, total } from './styles.css'

const Total = ({ price }) => (
  <div className={shoppingCartTotal}>
    <Cart className={cartIcon}/>
    <span className={total}>{`$${price.toLocaleString()} USD`}</span>
  </div>
)

export default Total
