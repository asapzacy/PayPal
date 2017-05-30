import React from 'react'
import Checkmark from 'react-icons/lib/io/ios-checkmark-empty'
import styles from './Payment.css'

const Payment = ({ cc, type, id, isPreferred, showCheckmark, updatePreferred, isSwitching }) => (
  <li className={isSwitching ? styles.itemActive : styles.item}
      onClick={() => updatePreferred(id)}
      style={{height:isPreferred && '6em'}}
  >
    <img className={styles.icon} src={`/assets/icons/${type.toLowerCase()}.svg`} alt={type} />
    <span className={styles.info} style={{marginTop:isPreferred && '-0.75em'}}>
      <h4 className={styles.type}>{type}</h4>
      <h5 className={styles.number}>{`x-${cc.slice(-4)}`}</h5>
      <h6 className={styles.preferred} style={{opacity:isPreferred && 1}}>{'(Preferred)'}</h6>
    </span>
    { showCheckmark &&
      <span className={styles.checkmark} style={{opacity:isPreferred && 1}}>
        <Checkmark />
      </span>
    }
  </li>
)

export default Payment
