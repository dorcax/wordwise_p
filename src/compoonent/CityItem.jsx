import React from "react";
import styles from "./cityItem.module.css";
import { Link,useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    //   weekday: "long",
  }).format(new Date(date));
 
const CityItem = ({ city }) => {
  const {currentCity,deleteCity} =useCities()
  // const {id} =useParams()

  const handleDelete=(e)=>{

    e.preventDefault()
    deleteCity(city.id)
  }
  return (
    <li key={city.id}>
      <Link
        className={`${styles.cityItem} ${currentCity &&currentCity.id === city.id? styles["cityItem--active"]:""}`}
        to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
      >
        
        <span className={styles.emoji}>{city.emoji}</span>
        <h3 className={styles.name}>{city.cityName}</h3>
        <time
          dateTime={new Date(city.date).toISOString()}
          className={styles.date}
        >
          {formatDate(city.date)}
        </time>
        <button className={styles.deleteBtn} onClick={handleDelete}>&times;</button>
      </Link>
    </li>
  );
};

export default CityItem;
