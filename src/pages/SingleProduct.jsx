import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { productContext } from '../contexts/ProductContext'

const SingleProduct = () => {
  const {id} = useParams()
  const {singleProduct, getSingleProduct } = useContext(productContext)
  useEffect(()=>{
    getSingleProduct(id)
  },[])
   

  return (
    <div>
      <h2>Single product page</h2>
      <h2>{singleProduct?.title}</h2>
    </div>
  )
}

export default SingleProduct
