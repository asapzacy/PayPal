import React from 'react'
import { Link } from 'react-router'
import { Payment } from 'components'
import Total from './Total'
import Arrow from 'react-icons/lib/io/ios-arrow-right'
import Close from 'react-icons/lib/io/ios-close-empty'
import styles from './PayWith.css'

const PayWith = ({ price, preferredPayment, isSwitching, switchPreferred }) => (
  <section className={styles.container}>
    <h2 className={styles.text}>{'Pay with:'}</h2>
    <Link to='/' className={styles.info}>
      <span onClick={switchPreferred}>
        {'change'}
        { isSwitching ? <Close /> : <Arrow /> }
      </span>
    </Link>
    { preferredPayment && <Payment {...preferredPayment} isPreferred /> }
    <Total price={price} />
  </section>
)

export default PayWith
