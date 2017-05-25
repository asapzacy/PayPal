import React from 'react'
import { creditCardContainer, creditCard } from './styles.css'

const CreditCard = ({ card, isActive, updatePaymentCard }) => (
  <span className={creditCardContainer}>
    <img
      className={creditCard}
      style={{filter:isActive && 'none'}}
      src={`/assets/icons/${card.toLowerCase()}.svg`}
      onClick={() => updatePaymentCard(card)}
    />
  </span>
)

export default CreditCard
