import React from 'react'
import Checkmark from 'react-icons/lib/io/ios-checkmark-empty'
import { paymentItem, paymentIcon, paymentInfo, paymentType,
  paymentNumber, paymentPreferred, checkmarkContainer } from './styles.css'

const Payment = ({ cc, type, isPreferred, updatePreferredPayment, id }) => (
  <li className={paymentItem} onClick={() => updatePreferredPayment(id + 1)} style={{height:isPreferred && '6.2em'}}>
    <img className={paymentIcon} src={`/assets/icons/${type.toLowerCase()}.svg`} alt={type} />
    <span className={paymentInfo}>
      <h4 className={paymentType}>{type}</h4>
      <h5 className={paymentNumber}>{`x-${cc.slice(-4)}`}</h5>
      <h6 className={paymentPreferred} style={{opacity:isPreferred && 1}}>{'(Preferred)'}</h6>
    </span>
    <span className={checkmarkContainer} style={{opacity:isPreferred && 1}}><Checkmark /></span>
  </li>
)

export default Payment
