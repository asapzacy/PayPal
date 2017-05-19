import React from 'react'
import { Logo } from 'components'
import { headerContainer, divider } from './styles.css'

const Header = () => (
  <header className={headerContainer}>
    <Logo name={'toys-r-us'} />
    <span className={divider}></span>
    <Logo name={'babies-r-us'} />
  </header>
)

export default Header
