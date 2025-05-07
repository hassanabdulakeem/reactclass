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

    const value = {
        users,
        fetchUsers
    }

    return (
        <authContext.Provider value={value}>{children}</authContext.Provider>
    )
}

export default AuthProvider