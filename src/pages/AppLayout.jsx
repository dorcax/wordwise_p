import React from 'react'
import Sidebar from '../compoonent/Sidebar'
import styles from './Applayout.module.css'
import Map from '../compoonent/Map'
const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar/>
      <Map/>
        </div>
  )
}

export default AppLayout