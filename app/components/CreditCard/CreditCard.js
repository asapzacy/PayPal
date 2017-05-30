import React from 'react'
import styles from './CreditCard.css'

const CreditCard = ({ card, isActive, updateCard }) => (
  <span className={styles.container}>
    <img
      className={isActive ? styles.ccActive : styles.cc}
      src={`/assets/icons/${card.toLowerCase()}.svg`}
      onClick={() => updateCard(card)}
    />
  </span>
)

export default CreditCard
