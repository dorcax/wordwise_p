import React from 'react'
import Navbar from '../compoonent/Navbar'
import style from "./pricing.module.css"
import { Link } from 'react-router-dom'
const Pricing = () => {
  return (
<main className={style.main}>
<Navbar/>
  <section  className={style.text}>
    <div className={style.texts}>
      <h2>simple pricing
        <br />
        just $9/month
      </h2>
      <p className={style.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, in iste aliquid distinctio illum tempora aspernatur facilis nostrum, dolorem mollitia, eligendi modi nesciunt alias repellendus provident veniam vitae recusandae at.
    
</p>
   
   
   
<Link to="/app" className={style.btn

}>start tracking now</Link>
    </div>
    <img src="../../img-2.jpg" alt="overview of a large city" srcset=""  />
   
  </section>
</main>
  )
}

export default Pricing