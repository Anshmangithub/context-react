import React, { useState , useContext } from 'react'
import UserContext from '../context/UserContext';


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const SubmitHandler =(e)=>{
       e.preventDefault();
       setUser({username , password})
    }
  return (
    <div>
        <h3>Login</h3>
        <input type="text" 
           placeholder='username'
           value={username} 
           onChange={(e)=> setUsername(e.target.value)} />
   {" "}
<input type="text" 
           placeholder='password'
           value={password} 
           onChange={(e)=> setPassword(e.target.value)} />
           <button onClick={SubmitHandler}>Submit</button>
    </div>
  )
}

export default Login