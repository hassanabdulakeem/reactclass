const Button = ({text, handleClick, icon})=>{
   
    return(
        <button onClick={handleClick} >{text}</button>
    )
}

export default Button