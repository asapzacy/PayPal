import React, { Component } from 'react'
import { App } from 'components'

class AppContainer extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount() {
    console.log('hi')
  }
  render() {
    return <App {...this.state} />
  }
}

export default AppContainer
