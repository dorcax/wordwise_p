import React, { useEffect } from 'react'
import { UseAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const{isAuthenticated} =UseAuth()
    const navigate =useNavigate()
    useEffect(()=>{
        if(!isAuthenticated){
            navigate("/")
        }
    },[isAuthenticated,navigate])
    return isAuthenticated? children:null
}

export default ProtectedRoute