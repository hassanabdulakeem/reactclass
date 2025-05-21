import React from 'react'
import { useParams } from 'react-router-dom'

const VerifyAccount = () => {
    const {token} = useParams()
    console.log(token)
  return (
    <div>
      <h1>Verify Account</h1>
    </div>
  )
}

export default VerifyAccount
