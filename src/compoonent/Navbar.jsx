import React from 'react'
import  { NavLink }  from 'react-router-dom'
import styles from "./navbar.module.css"
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <Logo/>
        <ul className={styles.ul}>
           
            <li>
                <NavLink to="/pricing" className={styles.link}>
                pricing</NavLink>
            </li>
            <li>
                <NavLink to="/product" className={styles.link}>Product</NavLink>
            </li>
            <li >
                <NavLink to="/login"  className={styles.link}>Login</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar