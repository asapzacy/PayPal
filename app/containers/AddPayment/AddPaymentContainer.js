import React, { Component } from 'react'
import { AddPayment } from 'components'

class AddPaymentContainer extends Component {
  constructor() {
    super()
    this.state = {
      first: '',
      last: '',
      type: '',
      number: '',
      expiration: '',
      csc: ''
    }
    this.updatePaymentInfo = this.updatePaymentInfo.bind(this)
  }
  componentDidMount() {

  }
  updatePaymentInfo(info, event) {
    this.setState({ [info]: event.target.value })
  }
  render() {
    return <AddPayment updatePaymentInfo={this.updatePaymentInfo} {...this.state} {...this.props} />
  }
}

export default AddPaymentContainer
