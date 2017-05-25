import React, { Component } from 'react'
import { AddPayment } from 'components'

class EditPaymentInfoContainer extends Component {
  constructor() {
    super()
    this.state = {
      first: '',
      last: '',
      type: '',
      cc: '',
      expiration: '',
      csc: '',
      isPaymentSaved: false
    }
    this.updatePaymentInfo = this.updatePaymentInfo.bind(this)
    this.updateCardType = this.updateCardType.bind(this)
    this.savePaymentMethod = this.savePaymentMethod.bind(this)
  }
  componentDidMount() {
    this.getPaymentMethodId()
  }
  getPaymentMethodId() {
    const paymentMethodId = parseInt(this.props.params.paymentId)
    if (Number.isInteger(paymentMethodId)) {
      const paymentMethod = this.props.paymentMethods[paymentMethodId]
      if (paymentMethod) {
        this.fillInPaymentInfo(paymentMethod)
      }
    }
  }
  fillInPaymentInfo(paymentMethod) {
    this.setState({
      first: paymentMethod.first,
      last: paymentMethod.last,
      type: paymentMethod.type,
      cc: paymentMethod.cc,
      expiration: paymentMethod.expiration,
      csc: paymentMethod.csc
    })
  }
  savePaymentMethod(index, newPayment) {
    this.props.updatePayment(index, newPayment)
    this.setState({ isPaymentSaved: true })
  }
  updatePaymentInfo(cardInfo, event) {
    this.setState({ [cardInfo]: event.target.value })
  }
  updateCardType(card) {
    this.setState({ type: card })
  }
  render() {
    return (
      <AddPayment
        {...this.state}
        {...this.props}
        updatePaymentInfo={this.updatePaymentInfo}
        updateCardType={this.updateCardType}
        savePaymentMethod={this.savePaymentMethod}
      />
    )
  }
}

EditPaymentInfoContainer.contextTypes = { router: React.PropTypes.object.isRequired }

export default EditPaymentInfoContainer
