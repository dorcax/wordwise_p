import React, { useState } from "react";

export const useGeolocation=()=>{
     // const variable array to save the users location
    const [isLoading,setIsLoading] =useState(false)
    const[position,setPosition] =useState(null)
    const[error,setError] =useState(null)
    // define the function that finds the users geolocation
    const getPosition =()=>{
        // if geolocation is not supported by the users browser
        if(!navigator.geolocation){
            return setError("your browser is not support geolocation")
         }
            setIsLoading(true)
            // get the current users location
            navigator.geolocation.getCurrentPosition(
                (pos)=>{

                    // save the geolocation coordinates in two variables
                    const { latitude, longitude } = pos.coords;
                    setPosition({lat:latitude,lng:longitude})
                    console.log(longitude,latitude)
                    setIsLoading(false)
                },
                // if there was an error getting the users location
               (error)=>{
                setError(error.message)
                setIsLoading(false)
               }
            )
    }
    return {error,isLoading,position,getPosition}

}