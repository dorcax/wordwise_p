import React from 'react'
import style from "./side.module.css"
import Logo from './Logo'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import DefaultLisst from './DefaultLisst'
import Appnav from './Appnav'

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
        <Logo/>
    <Appnav/>
        <Outlet />
       <Footer />
    </div>
  )
}

export default Sidebar
