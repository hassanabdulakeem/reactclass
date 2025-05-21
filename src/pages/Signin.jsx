import React from 'react'
<<<<<<< HEAD
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [signingin, setSigningin] = useState(false)
  const baseUrl = import.meta.env.VITE_BASE_URL
  const navigate = useNavigate()




  // handle input
  const handleInput = (e) => {
    const {name, value} = e.target
    setFormData(prev => ({...prev, [name]:value}))
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSigningin(true)
    try {
        const response = await fetch(`${baseUrl}/auth/signin`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData)
        })
        const data = await response.json()
        if(data.status === "success"){
            toast.success(data.message)
            navigate("/")
        }

    } catch (error) {
        console.log(error)
    } finally{
        setSigningin(false)
    }
    
  };

  return (
    <div>
      <h1>Signin</h1>
=======
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
>>>>>>> b0e82cd5b311c68e0227bc09c9c0069d6348b500

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
<<<<<<< HEAD
          <input
            type="email"
            name="email"
            id="email"
            placeholder="joe@example.com"
            onChange={handleInput}
          />
        </div>
       
         
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="John doe"
            onChange={handleInput}
          />
        </div>

        <button disabled={signingin}>
            {signingin ? "signing in..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Signin;

=======
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
>>>>>>> b0e82cd5b311c68e0227bc09c9c0069d6348b500


