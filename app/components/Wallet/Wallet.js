import React from 'react'
import Close from 'react-icons/lib/io/ios-close-empty'
import { walletContainer, walletHeader } from './styles.css'

const Wallet = () => (
  <section className={walletContainer}>
    <header className={walletHeader}>
      <h2>{'Wallet'}</h2>
      <Close />
    </header>
  </section>
)

export default Wallet
