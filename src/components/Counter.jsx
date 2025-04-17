import { useState } from "react"
import Button from "./Button"

const Counter = ()=>{
    const [number, setNumber] = useState(1)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const handleLogin = ( )=>{
        setIsLoggedIn(true)
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