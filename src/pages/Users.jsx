import React, { useContext, useEffect } from 'react'
import { authContext } from '../contexts/AuthContext'

const Users = () => {
    const {fetchUsers, users} = useContext(authContext)
    useEffect(()=>{
        fetchUsers()
    },[])

  return (
    <div>
      {
        users?.length > 0 ? (
            <section>
                {users?.map(user=>(
                    <div>
                        <p>{user.name.firstname}</p>
                        <p>{user.phone}</p>
                        <p>{user.email}</p>
                    </div>
                ))}
            </section>
        ) : (
            <p>No user!</p>
        )
      }
    </div>
  )
}

export default Users
