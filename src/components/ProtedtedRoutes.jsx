import { useEffect, useState } from "react"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { toast } from "sonner"

const ProtedtedRoutes = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!isAuthenticated){
            toast.warning("You have to be logged in")
            navigate("/signin")
        }
    },[isAuthenticated, navigate])

    return isAuthenticated ? <Outlet /> : null
}

export default ProtedtedRoutes
