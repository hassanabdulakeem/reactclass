import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { authContext } from '../contexts/AuthContext'

const VerifyAccount = () => {
    const {token} = useParams()
    const {verifyAccount, verifyingAccount, verificationData} = useContext(authContext)
    useEffect(()=>{
      verifyAccount(token)
    },[])

    // console.log(verificationData)
    
  return (
    <div>
      <h1>Verify Account</h1>
      {
        verifyingAccount ? (
          <h1>Verifying account ........</h1>
        ) : (
          <h1 style={{
            color: verificationData?.status === "error" ? "red" : "green"
          }}>{verificationData?.message}</h1>
        )
      }
    </div>
  )
}

export default VerifyAccount