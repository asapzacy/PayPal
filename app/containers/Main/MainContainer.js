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
      payments: [],
      preferredPayment: 0,
      isPaymentChanging: false
    }
    this.updatePreferredPayment = this.updatePreferredPayment.bind(this)
    this.changePaymentMethod = this.changePaymentMethod.bind(this)
  }
  componentDidMount() {
    this.makeRequest()
  }
  makeRequest() {
    getUserInfo()
      .then((info) => {
        this.setState({
          name: info.name,
          price: info.price,
          payments: info.payments,
          preferredPayment: 0
        })
      })
      .catch(e => console.log(e))
  }
  updatePreferredPayment(id) {
    this.setState({ preferredPayment: id }, () => {
      this.changePaymentMethod()
    })
  }
  changePaymentMethod() {
    this.setState({ isPaymentChanging: !this.state.isPaymentChanging })
  }
  render() {
    return (
      <div className={mainContainer}>
        <main className={innerContainer}>
          <Header />
          <section className={checkoutContainer}>
            { React.cloneElement(this.props.children, {
                updatePreferredPayment: this.updatePreferredPayment,
                ...this.state
              })
            }
            <ShoppingCart {...this.state} changePaymentMethod={this.changePaymentMethod} />
          </section>
        </main>
      </div>
    )
  }
}

export default MainContainer
