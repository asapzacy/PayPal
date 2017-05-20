import React from 'react'
import { Link } from 'react-router'
import Close from 'react-icons/lib/io/ios-close-empty'
import { walletContainer, walletHeader, walletMain,
  updatePaymentsContainer, updatePayment } from './styles.css'
import { paymentsContainer, paymentsHeader } from 'styles/shared.css'

const Wallet = ({ switchPanel }) => (
  <section className={paymentsContainer}>
    <header className={paymentsHeader}>
      <span></span>
      <h2>{'Wallet'}</h2>
      <Close />
    </header>
    <main className={walletMain}>
      <section className={updatePaymentsContainer}>
        <Link to='/addPayment'><span className={updatePayment}>{'+ Add'}</span></Link>
        <span className={updatePayment} onClick={() => switchPanel('manage')}>{'Manage >'}</span>
      </section>
    </main>
  </section>
)

export default Wallet
