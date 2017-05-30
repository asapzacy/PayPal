import React from 'react'
import Checkmark from 'react-icons/lib/io/ios-checkmark-empty'
import { paymentItem, paymentItemActive, paymentIcon, paymentInfo, paymentType,
  paymentNumber, paymentPreferred, checkmarkContainer } from './styles.css'

const Payment = ({ cc, type, id, isPreferred, showCheckmark, updatePreferred, isSwitching }) => (
  <li className={isSwitching ? paymentItemActive : paymentItem} onClick={() => updatePreferred(id)} style={{height:isPreferred && '6em'}}>
    <img className={paymentIcon} src={`/assets/icons/${type.toLowerCase()}.svg`} alt={type} />
    <span className={paymentInfo} style={{marginTop:isPreferred && '-0.75em'}}>
      <h4 className={paymentType}>{type}</h4>
      <h5 className={paymentNumber}>{`x-${cc.slice(-4)}`}</h5>
      <h6 className={paymentPreferred} style={{opacity:isPreferred && 1}}>{'(Preferred)'}</h6>
    </span>
    { showCheckmark && <span className={checkmarkContainer} style={{opacity:isPreferred && 1}}><Checkmark /></span> }
  </li>
)

export default Payment
