import React from 'react'
import Close from 'react-icons/lib/io/ios-close-empty'
import { walletContainer, walletHeader, walletMain,
  updatePaymentsContainer, updatePayment } from './styles.css'

const Wallet = ({ switchPanel }) => (
  <section className={walletContainer}>
    <header className={walletHeader}>
      <span></span>
      <h2>{'Wallet'}</h2>
      <Close />
    </header>
    <main className={walletMain}>
      <section className={updatePaymentsContainer}>
        <span className={updatePayment} onClick={() => switchPanel('add')}>{'+ Add'}</span>
        <span className={updatePayment} onClick={() => switchPanel('manage')}>{'Manage >'}</span>
      </section>
    </main>
  </section>
)

export default Wallet
