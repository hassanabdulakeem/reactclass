import { Link } from "react-router-dom"
import Button from "./Button"
const Header = ()=>{
    return(
        <div style={styles.container}>
            <h1 style={styles.logo}>Logo</h1>

            <div style={styles.menuItems}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact us</Link>
                <Link to="/products">Products</Link>
                <Link to="/dashboard">Dashboard</Link>
            </div>

            <Button text="Explore" bgColor="blue"/>
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