import React, { Component } from 'react'
import { Header, Footer, Loading, ShoppingCart } from 'components'
import { getUserInfo } from 'helpers/api'
import styles from './Main.css'

class MainContainer extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      hasLoaded: false,
      user: {
        name: '',
        price: 0
      },
      payments: [],
      preferredId: 0,
      isSwitching: false
    }
    this.updatePayments = this.updatePayments.bind(this)
    this.updatePreferred = this.updatePreferred.bind(this)
    this.switchPreferred = this.switchPreferred.bind(this)
    this.loadSampleData = this.loadSampleData.bind(this)
  }
  componentDidMount() {
    if (this.props.location.pathname !== '/') {
      this.makeRequest()
    } else {
      this.init()
    }
  }
  init() {
    this.setState({
      user: {
        name: 'user',
        price: 1234
      }
    })
  }
  makeRequest() {
    // to create a sense of 'waiting', calls this.delay() after data is returned
    this.setState({ isLoading: true }, () => {
      getUserInfo()
        .then((data) => {
          this.setState({
            user: {
              name: data.user.name,
              price: data.user.price
            },
            payments: data.payments,
            preferredId: 0
          }, () => this.delay())
        })
        .catch((error) => {
          this.setState({
            isLoading: false,
          })
          throw new Error(error)
        })
    })
  }
  updatePreferred(id) {
    this.setState({
      preferredId: id,
    })
    this.switchPreferred()
  }
  updatePayments(newPayment, index) {
    const paymentsCopy = [ ...this.state.payments ]
    paymentsCopy[index] = newPayment
    this.setState({
      payments: paymentsCopy
    })
  }
  switchPreferred() {
    this.setState({
      isSwitching: !this.state.isSwitching
    })
  }
  loadSampleData() {
    this.makeRequest()
  }
  delay() {
   if (this.state.isLoading) {
     this.delayId = setTimeout(() => {
       this.setState({
        isLoading: false,
        hasLoaded: true
      })
     }, 1220)
   }
 }
  render() {
    return (
      <div className={styles.outerContainer}>
        <main className={styles.innerContainer}>
          <Header />
          <main className={styles.checkout}>
            { this.state.isLoading
              ? <Loading />
              : React.cloneElement(this.props.children, {
                  updatePayments: this.updatePayments,
                  updatePreferred: this.updatePreferred,
                  loadSampleData: this.loadSampleData,
                  ...this.state
                })
            }
            <ShoppingCart {...this.state} switchPreferred={this.switchPreferred} />
          </main>
          <Footer />
        </main>
      </div>
    )
  }
}

export default MainContainer
