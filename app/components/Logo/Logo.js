import React from 'react'
import { logo } from './styles.css'

const Logo = ({ company }) => (
  <img className={logo} src={`/assets/img/logos/${company}.svg`} alt={`${company} logo`} />
)

export default Logo
