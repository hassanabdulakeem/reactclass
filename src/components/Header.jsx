import { Link, useNavigate } from "react-router-dom"
import Button from "./Button"
import { useContext } from "react"
import { authContext } from "../contexts/AuthContext"
const Header = ()=>{
    const {isAuthenticated} = useContext(authContext)
    const isAuth = isAuthenticated()
    const navigate = useNavigate()
     const logout = ()=>{
        localStorage.removeItem("accessToken")
        navigate("/")
    }

    return(
        <div style={styles.container}>
            <h1 style={styles.logo}>Logo</h1>

            <div style={styles.menuItems}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact us</Link>
                <Link to="/products">Products</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/TodoApp">TodoApp</Link>
            </div>
        {
            isAuth ? (
                <div>
                    <Button text="Explore" bgColor="blue"/>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <Link style={{border: "1px solid", marginRight: "1rem", padding: ".5rem 1rem"}} to="/signin">SIgn in</Link>
                    <Link style={{border: "1px solid", marginRight: "1rem", padding: ".5rem 1rem"}} to="signup">SIgn up</Link>
                </div>
            )
        }
        </div>
    )
}

const styles = {
    container:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#eee"
    },
    logo :{
        color: "red"
    },

    menuItems: {
        display: "flex",
        alignItems: "center",
        gap: "1.5rem"
    }
}


// default export
export default Header

// named export