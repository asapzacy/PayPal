import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { MainContainer, EditPaymentInfoContainer } from 'containers'
import { Wallet } from 'components'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={Wallet} />
      <Route path='/addPayment' component={EditPaymentInfoContainer} />
      <Route path='/managePayment/:paymentId' component={EditPaymentInfoContainer} />
    </Route>
  </Router>
)

export default routes
