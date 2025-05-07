
// usestate, useRef, useEffect



import { useState } from "react"
import Button from "./Button"

const Counter = ()=>{
    const [number, setNumber] = useState()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const handleLogin = ( )=>{
      setIsLoggedIn(true)
    //   const res = await fetch('http://localhost:4005/users', {
    //     method: "PATCH",
    //     body: {

    //     },
    //     // headers:{
    //     //     ""
    //     // }
    //   })
    //   const data = await res.json()
    }

    return(
        <div>
            {
                isLoggedIn ? (
                    <p>Welcome</p>
                ) : (
                    <div>
                        <p>Pleae login</p>
                        <button onClick={handleLogin}>login</button>
                    </div>
                )
            }
        </div>
    )
}

export default Counter