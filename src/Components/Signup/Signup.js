import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

export default function Signup() {
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [gender,setGender]=useState('')
  const [password,setPassword]=useState('')

  const navigate=useNavigate()

   const handleSubmit=(e)=>{
    e.preventDefault()

  const dataToSend = {
    Name: username,
    Email:email,
    Gender:gender,
    Password:password   
  };
  
  axios.post('http://localhost:3001/signup', dataToSend).then((response)=>{
    if(response.data.result==true){
      navigate('/login')
      
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
          <label htmlFor="lname">Gender</label>
          <br />

          {['radio'].map((type) => (
        <div key={`inline-${type}`} className="input">
          <Form.Check
            inline
            label="Male"
            name="gender"
            type="radio"
            id={`inline-radio-1`}
            checked={gender === 'Male'}
            onChange={() => setGender('Male')}
          />
          <Form.Check
            inline
            label="Female"
            name="gender"
            type="radio"
            id={`inline-radio-2`}
            checked={gender === 'Female'}
            onChange={() => setGender('Female')}
          />
        
        </div>
      ))}
         
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
        <a onClick={()=>navigate('/login')}>Login</a>
      </div>
    </div>
  );
}