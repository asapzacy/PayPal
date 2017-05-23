import React, { Component, PropTypes } from 'react'
import { AddPayment } from 'components'

class AddPaymentContainer extends Component {
  constructor() {
    super()
    this.state = {
      first: '',
      last: '',
      type: '',
      cc: '',
      expiration: '',
      csc: ''
    }
    this.updatePaymentInfo = this.updatePaymentInfo.bind(this)
  }
  componentDidMount() {
    const paymentId = Number(this.props.params.paymentId) - 1
    if (Number.isInteger(paymentId)) {
      this.editPaymentInfo(this.props.payments[paymentId])
    }
  }
  editPaymentInfo(paymentInfo) {
    this.setState({
      first: paymentInfo.first,
      last: paymentInfo.last,
      type: paymentInfo.type,
      cc: paymentInfo.cc,
      expiration: paymentInfo.expiration,
      csc: paymentInfo.csc
    })
  }
  updatePaymentInfo(info, event) {
    this.setState({ [info]: event.target.value })
  }
  render() {
    return <AddPayment updatePaymentInfo={this.updatePaymentInfo} {...this.state} {...this.props} />
  }
}

AddPaymentContainer.contextTypes = { router: React.PropTypes.object.isRequired }

export default AddPaymentContainer
