import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCities } from '../contexts/CitiesContext';
import styles from './City.module.css';
import BackButton from './BackButton';

const City = () => {
  const { id } = useParams();
  const { getCity, currentCity, loading } = useCities();

  useEffect(() => {
    console.log("my id:", id);
    getCity(id);
  }, [id]);

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!currentCity) {
    return <p>No city selected</p>;
  }

  // const { cityName, emoji, date, notes } = currentCity;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        zz
        <h6>City name</h6>
        <h3>
          <span>{currentCity.emoji}</span> {currentCity.cityName}
        </h3>
      </div>
      <div className={styles.row}>
        <h6>You went to {currentCity.cityName} on</h6>
        <p>{formatDate(currentCity.date)}</p>
      </div>
      {currentCity.notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{currentCity.notes}</p>
        </div>
      )}
      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${currentCity.cityName}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out {currentCity.cityName} on Wikipedia &rarr;
        </a>
      </div>
      <div>
        <BackButton />
      </div>
    </div>
  );
};

export default City;
