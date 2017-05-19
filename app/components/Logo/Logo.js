import React from 'react'
import { logo } from './styles.css'

const Logo = ({ name }) => (
  <img className={logo} src={`/assets/img/logos/${name}.svg`} alt={`${name} logo`} />
)

export default Logo
