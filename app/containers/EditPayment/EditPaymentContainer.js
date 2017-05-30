import React, { Component } from 'react'
import { EditPayment } from 'components'

class EditPaymentContainer extends Component {
  constructor() {
    super()
    this.state = {
      isSaved: false,
      first: '',
      last: '',
      type: '',
      cc: '',
      expiration: '',
      csc: ''
    }
    this.updateInfo = this.updateInfo.bind(this)
    this.updateCard = this.updateCard.bind(this)
    this.savePayment = this.savePayment.bind(this)
  }
  componentDidMount() {
    this.checkIfPayment()
  }
  // this method allows us to we can reuse EditPaymentContainer for -
  //    a. add a new payment
  //    b. manage an existing payment
  checkIfPayment() {
    const paymentId = parseInt(this.props.params.paymentId)
    if (Number.isInteger(paymentId)) {
      const payment = this.props.payments[paymentId]
      if (payment) {
        this.fillInForms(payment)
      }
    }
  }
  //  if card exists --> fill in all form inputs
  fillInForms(payment) {
    this.setState({
      first: payment.first,
      last: payment.last,
      type: payment.type,
      cc: payment.cc,
      expiration: payment.expiration,
      csc: payment.csc
    })
  }
  updateInfo(info, event) {
    this.setState({ [info]: event.target.value })
  }
  updateCard(card) {
    this.setState({ type: card })
  }
  savePayment(newPayment, index) {
    this.props.updatePayments(newPayment, index)
    this.setState({ isSaved: true })
  }
  render() {
    return (
      <EditPayment
        {...this.state}
        {...this.props}
        updateInfo={this.updateInfo}
        updateCard={this.updateCard}
        savePayment={this.savePayment}
      />
    )
  }
}

EditPaymentContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default EditPaymentContainer
