import React from 'react'
import { Link } from 'react-router'
import { CheckoutHeader, Payment } from 'components'
import Close from 'react-icons/lib/io/ios-close-empty'
import Add from 'react-icons/lib/io/ios-plus-empty'
import ArrowRight from 'react-icons/lib/io/ios-arrow-right'
import { walletContainer, updatePaymentNav, updatePaymentLink, walletMain, updatePayment, paymentsList } from './styles.css'

const Wallet = ({ paymentMethods, preferredPaymentId, updatePreferredPayment,
isPaymentMethodBeingUpdated }) => (
  <section className={walletContainer}>
    <CheckoutHeader text={'Wallet'}>
      <nav className={updatePaymentNav}>
        <Link to={'/addPayment'} className={updatePaymentLink}>
          <Add />{'Add'}
        </Link>
        <Link to={`/managePayment/${preferredPaymentId}`} className={updatePaymentLink}>
          {'Manage'}<ArrowRight />
        </Link>
      </nav>
    </CheckoutHeader>
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
