import Button from "./Button"
import Input from "./Input"

const Hero = ()=>{
    const searchProduct = ()=>{
        alert("searching product...")
    }
    return(
        <section>
            <h2>welcome to our website</h2>
            <Input />
            <Button handleClick={searchProduct} text="search" />
        </section>
    )
}

export default Hero