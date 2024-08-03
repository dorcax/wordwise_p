import React,{useState} from "react"
import { useSearchParams } from "react-router-dom"
export const useUrlPosition =()=>{
    const[searchParams] =useSearchParams()
    const maplat =searchParams.get("lat")
    const maplng =searchParams.get("lng")

    return { maplat,maplng}
}