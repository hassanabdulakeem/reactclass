import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {

    const {id} = useParams()
   console.log(id);
   fetch(`fake/product/${id}`)
   

  return (
    <div>
      <h2>Single product page</h2>
    </div>
  )
}

export default SingleProduct
