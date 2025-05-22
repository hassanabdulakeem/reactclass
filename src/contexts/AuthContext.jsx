import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [verifyingAccount, setVerifyingAccount] = useState(false)
  const [verificationData, setVerificationData] = useState()
  const [signingIn, setSigningIn] = useState(false);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  // FETCH ALL USERS
  const fetchUsers = async () => {
    try {
      const res = await fetch(`${baseUrl}/users`);
      const data = await res.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate()

  const signin = async (formData) => {
    setSigningIn(true);
    try {
      const res = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const {message, accessToken, status} = await res.json();
      console.log(status)
      if(status === "success"){
        toast.success(message)
        // TODO: save the accessToken into the localStorage
        localStorage.setItem("accessToken", accessToken)
        // TODO: Redirect to dashboard
        navigate("/dashboard")
    }
    
} catch (error) {
      console.log(error);
    } finally {
      setSigningIn(false);
    }
  };

  const isAuthenticated = () => {
    // check if user is authenticated by checking if there's an accessToken in the localStorage
    const accessToken = localStorage.getItem("accessToken");
    // if there's an accessToken, return true
    if (accessToken) {
      return true;
    } else {
      // if there's no accessToken in the localStorage, return false
      return false;
    }
  };

  const verifyAccount = async (token)=>{
    setVerifyingAccount(true)
    try {
      const res = await axios.post(`${baseUrl}/auth/verify/${token}`)
      const data = res.data
      

      if(res.status === 200){
        setVerificationData(data)
      }
    } catch (error) {
      setVerificationData(error.response.data)
      console.log(error.response.data.message)
      console.log(error)
    } finally {
      setVerifyingAccount(false)
    }
  }

  const value = {
    users,
    signingIn,
    verifyingAccount,
    verificationData,
    fetchUsers,
    isAuthenticated,
    signin,
    verifyAccount
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;
