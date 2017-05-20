import React, { Component } from 'react'
import Home from '../components/Home'

class HomeContainer extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount() {

  }
  render() {
    return <Home {...this.state} />
  }
}

export default HomeContainer
