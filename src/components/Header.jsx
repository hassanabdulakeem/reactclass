import Button from "./Button"
const Header = ()=>{
    return(
        <div>
            <h1>Logo</h1>

            <div>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>

            <Button text="Explore"/>
            <Button text="signup" />
            <Button text="Get started"/>
        </div>
    )
}


// default export
export default Header

// named export