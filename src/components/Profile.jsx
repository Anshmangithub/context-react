import React, { useContext } from 'react'
import UserContext from '../context/UserContext'


const Profile = () => {

    
 const {user} = useContext(UserContext);
 
  if(!user) return <h2>User is not login</h2>

  return <div>Hello : {user.username} </div>
}

export default Profile