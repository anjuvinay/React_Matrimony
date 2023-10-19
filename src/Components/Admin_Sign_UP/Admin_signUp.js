import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin_signUp.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';


function Admin_signUp() {
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const navigate=useNavigate()

    const handleSubmit=(e)=>{
     e.preventDefault()
 
   const dataToSend = {
     Name: username,
     Email:email,
     Password:password   
   };
   
   axios.post('http://localhost:3001/admin/sign-up', dataToSend).then((response)=>{
     if(response.data.result==true){
       navigate('/adminLogin')
       
     }else{
       alert("Duplicate Email")
       
     }
   })
   
     .catch(error => {
       console.error('Error:', error);
     });
    
   }

  return (
       <div>
      <div className="signupParentDiv">
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            defaultValue=""
          />
          <br />
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
          <button>Signup</button>
        </form>
        <a onClick={()=>navigate('/adminLogin')}>Login</a>
      </div>
    </div>
  )
}

export default Admin_signUp
