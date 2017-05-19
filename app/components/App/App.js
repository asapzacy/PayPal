import React from 'react'
import { Header, Wallet } from 'components'
import { appContainer, innerContainer } from './styles.css'

const App = () => (
  <div className={appContainer}>
    <main className={innerContainer}>
      <Header />
      <Wallet />
    </main>
  </div>
)

export default App
