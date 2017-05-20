import React, { Component } from 'react'
import { Header, ShoppingCart } from 'components'
import { CheckoutContainer } from 'containers'
import { mainContainer, innerContainer, checkoutContainer } from './styles.css'

class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      price: 0
    }
  }
  componentDidMount() {
    console.log('hi')
    this.setState({ name: 'zac', price: 100 })
  }
  render() {
    return (
      <div className={mainContainer}>
        <main className={innerContainer}>
          <Header />
          <section className={checkoutContainer}>
            { React.cloneElement(this.props.children, {...this.state}) }
            <ShoppingCart {...this.state} />
          </section>
        </main>
      </div>
    )
  }
}

export default MainContainer
