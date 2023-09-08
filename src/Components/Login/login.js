import React,{useState} from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error, setError] = useState('');

  const navigate=useNavigate()

  const handleLogin=async (e)=>{
    e.preventDefault()

  try {
    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }

    const response = await axios.post('http://localhost:3001/login', {
      Email: email,
      Password: password,
    });

    if (response.data.logged) {
      localStorage.setItem('token', response.data.token);
      navigate('/'); 
    } 
    else {
      setError('Invalid email or password.');
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      setError(error.response.data.message);
    }
     else {
      setError('An error occurred while logging in.');
    }
  }
};


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
        {error && <p className="error">{error}</p>}
        <a onClick={()=>navigate('/Signup')}>Signup</a>
      </div>
    </div>
  );
}

export default Login;