import React,{useState} from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()

  const handleLogin=(e)=>{
    e.preventDefault()

    const dataToSend = {
      Email:email,
      Password:password   
    };
    
    axios.post('http://localhost:3001/login', dataToSend).then((response=>{
      console.log(response.data.logged)
      if(response.data.logged==true){
        alert("Login Success")
        navigate('/')
        
      }else{
        alert("Login Failed")
        
      }
    }))
    .catch((error)=>{
      alert(error.message)
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            defaultValue=""
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            defaultValue=""
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>navigate('/Signup')}>Signup</a>
      </div>
    </div>
  );
}

export default Login;