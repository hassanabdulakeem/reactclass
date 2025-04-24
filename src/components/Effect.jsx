import { useEffect, useState } from "react"

// The useEffect Hook in React is used for handling side effects in functional components. Side effects can include data fetching, DOM manipulation, or setting up subscriptions.

// The useEffect Hook accepts two arguments: A function containing the side effect logic and An optional dependency array.
const Effect = () => {
    const [user, setUser] = useState("")
    const [auth, setAuth] = useState(false)

    const handleUser = ()=>{
        if(user){
            setUser("")
            // console.log(user);
            
        } else {
            setUser("ayo")
            // console.log(user);
        }
    }

    const handleAuth = ()=>{
        setAuth(prev => !prev)
    }

    const greet = ()=>{
        console.log('hello');
        console.log('welcome');
        console.log('xup');
                
    }

    useEffect(()=>{
        greet()
    },[]) // dependency array
    



  return (
    <div>
        <p>user: {user}</p>
        <p>auth: {auth && user ? user : "no user"}</p>
        <button onClick={handleAuth}>Auth</button>
        <button onClick={handleUser}>User</button>
    </div>
  )
}

export default Effect