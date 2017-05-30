import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { MainContainer, EditPaymentContainer } from 'containers'
import { Home, Wallet } from 'components'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={MainContainer}>
      <IndexRoute component={Home} />
      <Route path='user'>
        <IndexRoute component={Wallet} />
        <Route path='addPayment' component={EditPaymentContainer} />
        <Route path='managePayment/:paymentId' component={EditPaymentContainer} />
      </Route>
    </Route>
  </Router>
)

export default routes
