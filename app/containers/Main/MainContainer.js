import React, { Component } from 'react'
import { Header, ShoppingCart } from 'components'
import { getUserInfo } from 'helpers/api'
import { mainContainer, innerContainer, checkoutContainer } from './styles.css'

class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      user: {
        name: '',
        price: 0,
      },
      paymentMethods: [],
      preferredPaymentId: 0,
      isPaymentMethodBeingUpdated: false
    }
    this.updatePreferredPayment = this.updatePreferredPayment.bind(this)
    this.updatePayment = this.updatePayment.bind(this)
    this.changePaymentMethod = this.changePaymentMethod.bind(this)
  }
  componentDidMount() {
    this.makeRequest()
  }
  makeRequest() {
    getUserInfo()
      .then((info) => {
        this.setState({
          isLoading: false,
          user: {
            name: info.name,
            price: info.price,
          },
          paymentMethods: info.payments,
          preferredPaymentId: 0
        })
      })
      .catch(e => console.log(e))
  }
  updatePreferredPayment(id) {
    this.setState({
      preferredPaymentId: id,
      isPaymentMethodBeingUpdated: false
    })
  }
  updatePayment(paymentMethodIndex, newPaymentMethod) {
    const paymentsCopy = [ ...this.state.paymentMethods ]
    paymentsCopy[paymentMethodIndex] = newPaymentMethod
    this.setState({
      paymentMethods: paymentsCopy
    })
  }
  changePaymentMethod() {
    this.setState({
      isPaymentMethodBeingUpdated: !this.state.isPaymentMethodBeingUpdated
    })
  }
  render() {
    return (
      <div className={mainContainer}>
        <main className={innerContainer}>
          <Header />
          <section className={checkoutContainer}>
            { this.state.isLoading
              ? <div>{'loading..'}</div>
              : React.cloneElement(this.props.children, {
                  updatePreferredPayment: this.updatePreferredPayment,
                  updatePayment: this.updatePayment,
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
