import React from 'react'
import styles from './CountryList.module.css'
import CountryItem from './CountryItem';
import Message from './Message';
import { useCities } from '../contexts/CitiesContext';
const CountryList = () => {

    const{cities,loading} =useCities()
    if(loading){
        return <p>loading ...</p>;
    }
    if(!cities.length){
        <Message>
            Add your first city by clicking on the city map
        </Message>
    }
    const countries =cities.reduce((arr,city)=>
    {
        
    if(!arr.map(el=>el.country).includes(city.country)) { 
        return [...arr,{country:city.country,emoji:city.emoji}] 
    }else{
        return arr
    }
     },
        [])
    return (
    <div>
    <ul className={styles.countryList}>
{countries.map((country)=>{
    return <CountryItem country={country} />
})}
    </ul>
    </div>
  )
}

export default CountryList