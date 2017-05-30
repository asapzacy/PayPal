import React from 'react'
import { Link } from 'react-router'
import { Payment } from 'components'
import Total from './Total'
import Arrow from 'react-icons/lib/io/ios-arrow-forward'
import Close from 'react-icons/lib/io/android-close'
import styles from './PayWith.css'

const PayWith = ({ price, preferredPayment, isSwitching, switchPreferred }) => (
  <section className={styles.container}>
    <h2 className={styles.text}>{'Pay with:'}</h2>
    <Link to='/user' className={styles.link}>
      <span className={styles.change} onClick={switchPreferred}>
        {'change'}
        { isSwitching ? <Close /> : <Arrow /> }
      </span>
    </Link>
    { preferredPayment && <Payment {...preferredPayment} isPreferred /> }
    <Total price={price} />
  </section>
)

export default PayWith
