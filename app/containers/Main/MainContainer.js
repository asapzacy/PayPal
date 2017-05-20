import React, { Component } from 'react'
import { Header, ShoppingCart } from 'components'
import { CheckoutContainer } from 'containers'
import { getUserInfo } from 'helpers/api'
import { mainContainer, innerContainer, checkoutContainer } from './styles.css'

class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      price: 0,
      payments: []
    }
  }
  componentDidMount() {
    this.makeRequest()
    console.log('hi')
  }
  makeRequest() {
    console.log('make request')
    getUserInfo()
      .then((info) => {
        this.setState({
          name: info.name,
          price: info.price,
          payments: info.payments
        })
      })
      .catch(e => console.log(e))
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
