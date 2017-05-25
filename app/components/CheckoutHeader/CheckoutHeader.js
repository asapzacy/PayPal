import React from 'react'
import { Link } from 'react-router'
import ArrowLeft from 'react-icons/lib/io/ios-arrow-left'
import { checkoutHeaderContainer, checkoutHeaderIcon, checkoutHeaderText } from './styles.css'

const CheckoutHeader = ({ text, ...props }) => (
  <header className={checkoutHeaderContainer}>
    <span className={checkoutHeaderIcon}>
      { text !== 'Wallet' && <Link to='/'><ArrowLeft /></Link> }
    </span>
    <h2 className={checkoutHeaderText}>{text}</h2>
    <span className={checkoutHeaderIcon}></span>
    {props.children}
  </header>
)

export default CheckoutHeader
