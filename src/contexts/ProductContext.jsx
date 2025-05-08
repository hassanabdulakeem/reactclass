import { useState } from "react";
import { createContext } from "react";
import { useParams } from "react-router-dom";

export const productContext = createContext()

const ProductProvider = ({children})=>{
    const baseUrl = import.meta.env.VITE_BASE_URL
    const [singleProduct, setSingleProduct] = useState({})

   
    const getSingleProduct = async (id)=>{
        try {
            const res = await fetch(`${baseUrl}/products/${id}`)
            const data = await res.json()
            setSingleProduct(data)
        } catch (error) {
            console.log(error)
        }
    }

    const value = {
        singleProduct,
        getSingleProduct
    }
    return <productContext.Provider value={value}>{children}</productContext.Provider>
}

export default ProductProvider