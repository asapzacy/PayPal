import React from 'react'
import { Header, Checkout } from 'components'
import { CheckoutContainer } from 'containers'
import { appContainer, innerContainer } from './styles.css'

const App = () => (
  <div className={appContainer}>
    <main className={innerContainer}>
      <Header />
      <CheckoutContainer />
    </main>
  </div>
)

export default App
