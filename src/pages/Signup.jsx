import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [signingUp, setSigningup] = useState(false)
  const baseUrl = import.meta.env.VITE_BASE_URL
  const navigate = useNavigate()




  // handle input
  const handleInput = (e) => {
    const {name, value} = e.target
    setFormData(prev => ({...prev, [name]: value}))
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSigningup(true)
    try {
        const response = await fetch(`${baseUrl}/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData)
        })
        const data = await response.json()
        if(data.status === "success"){
            toast.success(data.message)
            navigate("/signin")
        }

    } catch (error) {
        console.log(error)
    } finally{
        setSigningup(false)
    }
    
  };

  return (
    <div>
      <h1>Signup</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="joe@example.com"
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John doe"
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

        <button disabled={signingUp}>
            {signingUp ? "signing up..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
