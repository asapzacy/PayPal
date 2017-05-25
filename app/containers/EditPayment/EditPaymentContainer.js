import React, { Component } from 'react'
import { EditPayment } from 'components'

class EditPaymentContainer extends Component {
  constructor() {
    super()
    this.state = {
      isPaymentSaved: false,
      card: {
        first: '',
        last: '',
        type: '',
        cc: '',
        expiration: '',
        csc: ''
      }
    }
    this.updatePaymentInfo = this.updatePaymentInfo.bind(this)
    this.updatePaymentCard = this.updatePaymentCard.bind(this)
    this.savePaymentInfo = this.savePaymentInfo.bind(this)
  }
  componentDidMount() {
    this.checkIfPaymentInfo()
  }
  // this method allows us to we can reuse EditPaymentContainer for -
  //    a. add a new payment
  //    b. manage an existing payment
  checkIfPaymentInfo() {
    const paymentId = parseInt(this.props.params.paymentId)
    if (Number.isInteger(paymentId)) {
      const paymentInfo = this.props.paymentMethods[paymentId]
      if (paymentInfo) {
        this.fillInPaymentInfo(paymentInfo)
      }
    }
  }
  //  if card exists --> fill in all form inputs
  fillInPaymentInfo(paymentInfo) {
    this.setState({
      card: {
        first: paymentInfo.first,
        last: paymentInfo.last,
        type: paymentInfo.type,
        cc: paymentInfo.cc,
        expiration: paymentInfo.expiration,
        csc: paymentInfo.csc
      }
    })
  }
  savePaymentInfo(index, newPayment) {
    this.props.updatePayment(index, newPayment)
    this.setState({ isPaymentSaved: true })
  }
  updatePaymentInfo(cardInfo, event) {
    this.setState({ [cardInfo]: event.target.value })
  }
  updatePaymentCard(card) {
    this.setState({ type: card })
  }
  render() {
    return (
      <EditPayment
        {...this.state}
        {...this.props}
        updatePaymentInfo={this.updatePaymentInfo}
        updatePaymentCard={this.updatePaymentCard}
        savePaymentInfo={this.savePaymentInfo}
      />
    )
  }
}

EditPaymentContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default EditPaymentContainer