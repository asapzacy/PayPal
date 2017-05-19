import React from 'react'
import { headerContainer, logo, divider } from './styles.css'

const Header = () => (
  <header className={headerContainer}>
    <img className={logo} src={'/assets/img/logos/toys-r-us.svg'} />
    <span className={divider}></span>
    <img className={logo} src={'/assets/img/logos/babies-r-us.svg'} />
  </header>
)

export default Header
