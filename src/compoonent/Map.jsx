import React, { useEffect, useState } from 'react'
import styles from './map.module.css'
import {  useNavigate } from 'react-router-dom'
import {MapContainer,TileLayer,Marker,Popup, useMap, useMapEvents} from "react-leaflet"
import { useCities } from '../contexts/CitiesContext'
import { useGeolocation } from '../Hooks/Geeolocation'
import Button from "./Button"
import { useUrlPosition } from '../Hooks/useUrlPosition'
const Map = () => {
  // return <p>hello world</p>
  const{cities} =useCities()
  const {isloading:isLoadingPosition,position:GeolocationPosition,getPosition} =useGeolocation()
  const[mapPosition,setMapPosition]=useState([40,0])
 const {maplat,maplng} =useUrlPosition()
const navigate=useNavigate()



useEffect(
function (){
  if(maplat && maplng)  {
    console.log("URL Position:", maplat, maplng);
    // console.log(maplat,maplng)
   
     setMapPosition([maplat, maplng])
    
  }
},[maplat,maplng])


const handlePositionClick = () => {
  console.log("Getting current position...");
  getPosition();
};

useEffect(()=>{
  if(GeolocationPosition) {
    console.log("Geolocation Position:", GeolocationPosition);
    setMapPosition([GeolocationPosition.lat,GeolocationPosition.lng])}
},[GeolocationPosition])
  return (
    

    <div className={styles.mapContainer}>
    {/* <div className={styles.map} onClick={()=>navigate("form")}> position:{maplat},{maplng}</div> */}
      {!GeolocationPosition && <Button type="position"  onClick={handlePositionClick}>
      {isLoadingPosition ? "loading ...":"use your position"}
      </Button>}
      
       <MapContainer  center={mapPosition}
      // center={[maplat ||40,maplng||0]}
        zoom={13} scrollWheelZoom={true}  className={styles.map}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
  />
  {/* dsiplaying marker and popup  */}
  

 {cities.length <=3 && cities.map((city)=>{
  //  const lat = city.position.lat ; // Default to 0 if undefined
  //  const lng = city.position.lng 
  const { lat, lng } = city.position;
  console.log('myLat:', lat);
  console.log('myLng:', lat);
  console.log("this is city pos",city.position)
  return <Marker position={[lat,lng]} key={city.id}>
   <Popup>
    <span>{city.emoji}</span>
    {city.cityName}
   </Popup>
 </Marker>
})}
 <ChangeCenter position={mapPosition}/>
 <Detection/> 
</MapContainer>
    </div>
   
  
  
)
} 




function ChangeCenter({ position }) {
//   // is used to get currrent instance of the map  that is currently being displayed

  const map = useMap();
  map.setView(position);
  return null;
}
function Detection (){
  
  const navigate =useNavigate()
  // useMapEvent allow us to use click to detect  click in the map
  useMapEvents(
  {
    click:(e) =>{
      console.log(e)
      navigate(`/app/form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)

    }
    
  }

  )
 
}



export default Map