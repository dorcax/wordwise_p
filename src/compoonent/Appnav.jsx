import React from 'react'
import style from "./AppNav.module.css" 
import { NavLink } from 'react-router-dom'
const Appnav = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink to="/app/cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="/app/countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Appnav