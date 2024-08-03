
import React, { createContext, useContext, useReducer } from 'react'

const CreateAuth =createContext()
const initialState={
    user:null,
    isAuthenticated:false
}

const reducer=(state,action)=>{
    switch(action.type){
        case "login":
            return {...state,user:action.payload ,isAuthenticated:true}
        case "logout":
            return initialState
        default:
        throw new Error("UNKNOWN ERROR ")
    }
}

const FAKE_USER = {
    name: "Jack",
    email: "jack@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz",
  };
const AuthContextProvider = ({children}) => {
    const[state,dispatch]=useReducer(reducer,initialState)


    const login =(email,password)=>{
        if(FAKE_USER.email==="jack@example.com" && FAKE_USER.password==="qwerty"){
            dispatch({type:"login",payload:FAKE_USER})
        }




    }
    const logOut=()=>{
        dispatch({type:"logout"})

    }
  return (
    <CreateAuth.Provider value={{user:state.user,isAuthenticated:state.isAuthenticated,login,logOut}}>
       {children}
    </CreateAuth.Provider>
  )
}


const UseAuth =()=>{
    const context =useContext(CreateAuth)
    if(context === undefined){
        throw new Error("Auth context was used outside of the provider")
    }
    return context
}

export { AuthContextProvider,UseAuth}