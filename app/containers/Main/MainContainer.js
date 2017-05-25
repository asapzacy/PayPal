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
        price: 0
      },
      paymentMethods: [],
      preferredPaymentId: 0,
      isPaymentMethodBeingUpdated: false
    }
    this.updatePreferredPayment = this.updatePreferredPayment.bind(this)
    this.updatePaymentMethod = this.updatePaymentMethod.bind(this)
    this.changePaymentMethod = this.changePaymentMethod.bind(this)
  }
  componentDidMount() {
    this.makeRequest()
  }
  makeRequest() {
    getUserInfo()
      .then((data) => {
        this.setState({
          isLoading: false,
          user: data.user,
          paymentMethods: data.paymentMethods,
          preferredPaymentId: 1
        })
      })
      .catch((error) => {
        this.setState({
          isLoading: false
        })
      }, () => console.log(error))
  }
  updatePreferredPayment(id) {
    this.setState({
      preferredPaymentId: id,
      isPaymentMethodBeingUpdated: false
    })
  }
  updatePaymentMethod(paymentMethodId, updatedPaymentMethod) {
    const paymentMethodsCopy = [ ...this.state.paymentMethods ]
    paymentMethodsCopy[paymentMethodId] = updatedPaymentMethod
    this.setState({
      paymentMethods: paymentMethodsCopy
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
                  updatePaymentMethod: this.updatePaymentMethod,
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
