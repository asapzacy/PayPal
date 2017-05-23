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
      preferredPayment: 0
    }
    this.updatePreferredPayment = this.updatePreferredPayment.bind(this)
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
          preferredPayment: info.payments.length ? 3 : 0
        })
      })
      .catch(e => console.log(e))
  }
  updatePreferredPayment(id) {
    this.setState({ preferredPayment: id })
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
            <ShoppingCart {...this.state} />
          </section>
        </main>
      </div>
    )
  }
}
// { React.cloneElement(this.props.children, {...this.state}, this.updatePreferredPayment={this.updatePreferredPayment}) }

export default MainContainer
