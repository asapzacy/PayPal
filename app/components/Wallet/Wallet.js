import React from 'react'
import { Link } from 'react-router'
import { Title, Payment } from 'components'
import Add from 'react-icons/lib/io/android-add'
import Arrow from 'react-icons/lib/io/ios-arrow-forward'
import styles from './Wallet.css'

const Wallet = ({ hasLoaded, payments, preferredId, updatePreferred, isSwitching }) => (
  <section className={styles.container} style={{borderRight:hasLoaded && '1px solid #bdbdbd'}}>
    <Title title={'Wallet'}>
      <menu className={styles.menu}>
        <Link to={'/user/addPayment'} className={styles.link}>
          <Add />{'Add'}
        </Link>
        <Link to={`/user/managePayment/${preferredId}`} className={styles.link}>
          {'Manage'}<Arrow />
        </Link>
      </menu>
    </Title>
    <main className={styles.payments}>
      <ul className={styles.list}>
        { payments.map((el, i) => (
          <Payment
            {...el}
            id={i}
            isPreferred={i === preferredId}
            updatePreferred={updatePreferred}
            isSwitching={isSwitching}
            showCheckmark
            key={i}
          />)
        )}
      </ul>
    </main>
  </section>
)

export default Wallet
