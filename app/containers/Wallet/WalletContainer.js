import React, { Component } from 'react'
import { Wallet } from 'components'

class WalletContainer extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount() {

  }
  render() {
    return <Wallet {...this.state} {...this.props} />
  }
}

export default WalletContainer
