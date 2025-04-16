// product name
// price
// button "add to cart"

import Button from "./Button"

const ProductCard =()=>{
    return(
        <div>
            <h2>Iphone XR</h2>
            <span>$4,000</span>
            {/* <button></button> */}
            <Button text="Add to cart"/>
        </div>
    )
}

export default ProductCard