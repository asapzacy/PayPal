import React from 'react'
import { Header, Wallet, ShoppingCart, Checkout } from 'components'
import { appContainer, innerContainer } from './styles.css'

const App = () => (
  <div className={appContainer}>
    <main className={innerContainer}>
      <Header />
      <Checkout />
    </main>
  </div>
)

export default App
