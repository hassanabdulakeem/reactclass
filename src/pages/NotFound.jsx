import React, { useContext } from 'react'
import { authContext } from '../contexts/AuthContext'

const NotFound = () => {
  const {user} = useContext(authContext)
  return (
    <div>
      <h1>Sorry {user.name}</h1>
      <h1>Page not found</h1>
    </div>
  )
}

export default NotFound
