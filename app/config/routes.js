import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { MainContainer, WalletContainer, AddPaymentContainer } from 'containers'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={WalletContainer} />
      <Route path='/addPayment' component={AddPaymentContainer} />
    </Route>
  </Router>
)

export default routes
