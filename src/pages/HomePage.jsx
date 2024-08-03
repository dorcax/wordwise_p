import React from "react";
import {Link }from "react-router-dom"
import Navbar from "../compoonent/Navbar";
import style from "./Homepage.module.css";
import Logo from "../compoonent/Logo";
// import Button from "../compoonent/Button";
const HomePage = () => {
  return (
    <main className={style.mainheader}>
      <section className={style.homepage}>
        <header >
        <Navbar/>
        </header>
        <div className={style.text}>
        <h1 >
          
          You travel the world.
          <br />
          WorldWise keeps track of your adventures
        </h1>

        <h2>
          
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        {/* <Button className={style.btn} type="button" >Start tacking now</Button>
         */}
         <Link to="/app" className={style.btn

         }>start tracking now</Link>
        </div>
       
      </section>
    </main>
  );
};

export default HomePage;
