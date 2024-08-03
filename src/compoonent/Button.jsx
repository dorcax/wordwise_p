import React from 'react'
import styles from './Button.module.css'
const Button = ({children,type,className ,onClick}) => {
  return (
    
        <button  type={type} className={`${styles.btn} ${styles[type]}`} onClick={onClick}>{children}</button>
    
  )
}

export default Button