import React, { useContext } from 'react'
import Provider from '../components/Provider'
import { authContext } from '../contexts/AuthContext'

const Products = () => {
  const {user} = useContext(authContext)
  return (
    <div>
      {user.email}
      <h1>Productys pae</h1>

      
    </div>
  )
}

export default Products
