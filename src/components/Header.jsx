import Button from "./Button"
const Header = ()=>{
    return(
        <div style={styles.container}>
            <h1 style={styles.logo}>Logo</h1>

            <div style={styles.menuItems}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
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