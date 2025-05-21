import React, { useContext, useState } from 'react'
import {authContext} from "../contexts/AuthContext"

const Signin = () => {
  const {signin, signingIn} = useContext(authContext)
  const defaultData = {
    email : "",
    password: ""
  }
  const [formData, setFormData] = useState(defaultData)

  // collect the details as user types in the input
  const handleInput = (e)=>{
    const {name, value} = e.target
    setFormData(prev=>({...prev, [name]:value}))
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    signin(formData)
  }


  return (
    <div>
      <h1>Sign in page</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder='Joe@example.com' id='email' name='email' onChange={handleInput}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder='*******' id='password' name='password' onChange={handleInput}/>
        </div>

        <button disabled={signingIn}>{signingIn ? "Authenticating..." : "Login"}</button>
      </form>
    </div>
  )
}

export default Signin
