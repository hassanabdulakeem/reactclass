import { createContext, useState } from "react";

export const authContext = createContext()

const AuthProvider = ({children}) =>{
    const [users, setUsers] = useState([])
    const baseUrl = 'https://fakestoreapi.com'

    // FETCH ALL USERS
    const fetchUsers = async ()=>{
        try {
            const res = await fetch(`${baseUrl}/users`)
            const data = await res.json()
            console.log(data)
            setUsers(data)
        } catch (error) {
            console.log(error)
        }
    }

    // LOGOUT
   
    
  
   
    const isAuthenticated = ()=>{
        // check if user is authenticated by checking if there's an accessToken in the localStorage
        const accessToken = localStorage.getItem("accessToken")
          // if there's an accessToken, return true
        if(accessToken){
            return true
        } else{
             // if there's no accessToken in the localStorage, return false
            return false
        }
    }

    const value = {
        users,
        fetchUsers,
        isAuthenticated
    }

    return (
        <authContext.Provider value={value}>{children}</authContext.Provider>
    )
}

export default AuthProvider