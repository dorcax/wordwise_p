// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";

import styles from "./Form.module.css";

import Button from "./Button";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
import Message from "./Message"
import { useUrlPosition } from "../Hooks/useUrlPosition";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { useCities } from "../contexts/CitiesContext";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const {createCity}=useCities()
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
 const navigate =useNavigate()
 const{maplat,maplng} =useUrlPosition()
const[isLoadingGeocoding,setisLoadingGeocoding]=useState(false)

const[emoji,setEmoji] =useState("")
const[error,setError]=useState("")
const[startDate,setStartDate] =useState(new Date())
 useEffect(()=>{
  const fetchCity =async()=>{
  try {
    setisLoadingGeocoding(true)
    setError("")
    if(!maplat &&!maplng){
      return ;

    }
    const res =await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${maplat}&longitude=${maplng}`)
    const result =await res.json()
    if(!result.countryCode){
       throw new Error("That doesn't seem be to be a city.click somehwere else")
    }
    console.log(result)
    setCityName(result.city ||result.locality ||"")
    setCountry(result.countryName)
    setEmoji(convertToEmoji(result.countryCode))
  } catch (error) {
    setError(error.message)
  }finally{
    setisLoadingGeocoding(false)
  }
}
fetchCity()
 },[maplat,maplng])


//  onSubmit handleclick

const handleSubmit =async(e)=>{
  e.preventDefault()



const city={
  cityName,country,emoji,
  date,
  notes,

  position:{lat:maplat,lng:maplng} 

}
console.log(city)
await createCity(city)
navigate("/app/cities")
}

 if(isLoadingGeocoding){
  return <p>loading</p>
 }
if(error){
  return <Message >
    {error}
  </Message>
}

// if(!maplat && !maplng){
//   return <Message>there clicking on the map</Message>
// }
 

return (
  
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        {/* <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        /> */}

        <DatePicker  selected={startDate} onChange={(date)=>setStartDate(date)} dateFormat="dd/MM/yyy"/>
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        {/* <button>Add</button> */}
        <Button type="primary"  >Add</Button>
        {/* <button>&larr; Back</button>
         */}
      <BackButton/>
      </div>
    </form>
  );
 }

export default Form;