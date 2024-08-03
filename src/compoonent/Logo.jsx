import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../public/logo.png"
const Logo = () => {
  return (
    
           <div>
            <Link to="/"><img src={logo} alt="logo img" width={200} /></Link>
          </div>

  )
}

export default Logo