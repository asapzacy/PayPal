import React, { Component } from 'react'
import { Checkout } from 'components'

class CheckoutContainer extends Component {
  constructor() {
    super()
    this.state = {
      payments: [],
      panel: ''
    }
    this.addPayment = this.addPayment.bind(this)
    this.switchPanel = this.switchPanel.bind(this)
  }
  componentDidMount() {
    this.switchPanel('wallet')
    const fakeData = {
      first: 'Mark',
      last: 'Stuart',
      type: 'Visa',
      number: '4111 1111 1111 1111',
      expiration: '01/19',
      csc: '123'
    }
    this.addPayment(fakeData)
  }
  addPayment(newPayment) {
    console.log('ay', newPayment)
    const copy = [ ...this.state.payments ]
    copy.push(newPayment)
    this.setState({ payments: copy })
  }
  switchPanel(newPanel) {
    this.setState({ panel: newPanel })
  }
  render() {
    return <Checkout switchPanel={this.switchPanel} addPayment={this.addPayment} {...this.state} />
  }
}

export default CheckoutContainer
