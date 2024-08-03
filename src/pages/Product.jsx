import React from 'react'
import styles from "./pricing.module.css"
import Navbar from '../compoonent/Navbar';
export default function Product() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <section className={styles.text}> 
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div className={styles.texts}>
          <h2>About WorldWide.</h2>
          <p className={styles.para1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p className={styles.para}> 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>
    </main>
  );
}
  


