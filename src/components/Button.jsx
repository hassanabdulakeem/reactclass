import "./button.css"
const Button = ({ text, handleClick, icon, bgColor }) => {

    return (
        <button onClick={handleClick} style={{...styles, background:bgColor }}>{text}</button>
    )
}

const styles = {
    color: "white",
    border: "none",
    padding: ".5rem 1rem",
    borderRadius: "5px"
}

export default Button