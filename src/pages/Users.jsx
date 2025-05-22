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
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  resetToken: String,
  resetTokenExpire: Date,
});

module.exports = mongoose.model('User', userSchema);


export default Users
