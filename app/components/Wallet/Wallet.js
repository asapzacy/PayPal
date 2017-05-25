import React from 'react'
import { Link } from 'react-router'
import { Payment } from 'components'
import Close from 'react-icons/lib/io/ios-close-empty'
import Add from 'react-icons/lib/io/ios-plus-empty'
import ArrowRight from 'react-icons/lib/io/ios-arrow-right'
import { walletContainer, walletHeader, walletMain,
  updatePaymentsContainer, updatePayment, paymentsList } from './styles.css'
import { paymentsIcon, paymentsHeading } from 'styles/shared.css'

const Wallet = ({ paymentMethods, preferredPaymentId, updatePreferredPayment,
isPaymentMethodBeingUpdated }) => (
  <section className={walletContainer}>
    <header className={walletHeader}>
      <h2 className={paymentsHeading}>{'Wallet'}</h2>
      <section className={updatePaymentsContainer}>
        <Link to='/addPayment' className={updatePayment}><Add />{'Add'}</Link>
        <Link to={`/managePayment/${preferredPaymentId}`} className={updatePayment}>{'Manage'}<ArrowRight /></Link>
      </section>
    </header>
    <main className={walletMain}>
      <ul className={paymentsList}>
        { paymentMethods.map((el, i) => (
          <Payment
            {...el}
            id={i}
            isPreferred={i === preferredPaymentId}
            shouldShowCheckmark={true}
            updatePreferredPayment={updatePreferredPayment}
            isPaymentMethodBeingUpdated={isPaymentMethodBeingUpdated}
            key={i}
          />)
        )}
      </ul>
    </main>
  </section>
)

export default Wallet
