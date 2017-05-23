import React from 'react'
import Checkmark from 'react-icons/lib/io/ios-checkmark-empty'
import { paymentItem, paymentIcon, paymentInfo, paymentType,
  paymentNumber, paymentPreferred, checkmarkContainer } from './styles.css'

const Payment = ({ cc, type, isPreferred, updatePreferredPayment, id }) => (
  <li className={paymentItem} onClick={() => updatePreferredPayment(id + 1)}>
    <img className={paymentIcon} src={`/assets/icons/${type.toLowerCase()}.svg`} alt={type} />
    <span className={paymentInfo}>
      <h4 className={paymentType}>{type}</h4>
      <h5 className={paymentNumber}>{`x-${cc.slice(-4)}`}</h5>
      { isPreferred && <h6 className={paymentPreferred}>{'(Preferred)'}</h6> }
    </span>
    { isPreferred && <span className={checkmarkContainer}><Checkmark /></span> }
  </li>
)

export default Payment
