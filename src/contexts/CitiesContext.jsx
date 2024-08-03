import React, { createContext ,useEffect, useContext,useReducer} from 'react'
// import { useNavigate } from 'react-router-dom'

const CitiesContext =createContext()
  const reducer =(state,action)=>{
    switch(action.type){
      case "loading":
        return {...state,loading:true}
      case "cities/load":
        return {...state,cities:action.payload,loading:false}
      case "city/loaded":
        return {...state,currentCity:action.payload,loading:false}
      case "city/created":
        return {...state,cities:[...state.cities,action.payload],loading:false}
        case "city/deleted":
          return {...state,cities:state.cities.filter(city=>city.id !==action.payload),loading:false}
      case "rejected":
        return {...state,loading:false,error:action.payload}
        default:
          return state
    }
  }

const CitiesProvider = ({children}) => {
    // const[cities,setCities] =useState([])
    // const[loading,setLoading]=useState(false)
    // const[currentCity,setCurrentCity] =useState({})
    const initialState ={
      cities:[],
      loading:false,
      currentCity:{},
      error:null
    }
    const[state,dispatch] =useReducer(reducer,initialState)

    useEffect(()=>{
      
      const fetchApi =async()=>{
        dispatch({type:"loading"})
      try {
        // setLoading(true)
        const res=await fetch("http://localhost:8000/cities")
        const result= await res.json()
        // setCities(result)

        dispatch({type:"cities/load",payload:result})
      } catch (error) {
        // throw new Error("something went wrong")
      dispatch({type:"rejected",payload:error})
        
      }
  
      }
      fetchApi()
    },[])


   
  
  // to get single city

const getCity=async(id)=>{
  dispatch({type:"loading"})
    try {
        
          const result =await fetch(`http://localhost:8000/cities/${id}`)
          if (!result.ok) {
            throw new Error(`Error fetching city: ${result.statusText}`);
          }
          const res =await result.json()
          console.log("res",res)
         dispatch({type:"city/loaded",payload:res})
        
      } catch (error) {
        dispatch({type:"rejected",payload:("there was an error loading data ....",error)})
      }
     
   }      
          //making post request in react
const createCity =async(city)=>{
  // const navigate =useNavigate()
  dispatch({type:"loading"})
  try {
 
    const res =await fetch("http://localhost:8000/cities",{
      method:"POST",
      body:JSON.stringify(city),
      header:{
        "Content-Type":"application/json"
      }
    })
    console.log(res)
    const result =await res.json()
    dispatch({type:"city/created",payload:result})
    // navigate("/app/cities")
  } catch (error) {
    dispatch({type:"rejected",payload:("there was an error creating data ....",error)})
  }
 
  }

  // deleting a city

  const deleteCity =async(id)=>{
    dispatch({type:"loading"})
   try{
    
    await fetch(`http://localhost:8000/cities/${id}`,{
      method:"DELETE"
    })
    // setCities((cities)=>cities.filter((city=>city.id !==id)))
    dispatch({type:"city/deleted",payload:id})
   }catch(error){
    dispatch({type:"rejected",payload:("there was an error deletingdata ....",error)})
   }

  }

  return (
<CitiesContext.Provider value={{loading:state.loading,cities:state.cities,currentCity:state.currentCity,getCity,createCity,deleteCity}}>
    {children}
</CitiesContext.Provider>
  )
}

const useCities=()=>{
    const context =useContext(CitiesContext)
    if(context ===undefined)throw new Error("CitiesContext was used outside the citiesprovider")
    return context
}

export  {CitiesProvider,useCities}