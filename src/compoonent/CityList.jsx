import React, { useCallback } from 'react'
import styles from './Citylist.module.css'
import CityItem from './CityItem';
import { useCities } from '../contexts/CitiesContext';
const CityList = () => {
    const{cities,loading} =useCities()
    if(loading){
        return <p>loading ...</p>;
    }
    return (
    <div>
    <ul className={styles.cityList}>
 {cities?.map((city)=>{
    return <CityItem city={city}  />
})}
    </ul>
    </div>
  )
}

export default CityList