import React from 'react'
import style from "./footer.module.css"
const Footer = () => {
  return (
    <footer className={style.footer}>
        <p className={style.copyright}> &copy; {new Date().getFullYear()} by worldwise Inc</p>
    </footer>
  )
}

export default Footer