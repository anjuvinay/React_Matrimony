import React,{useEffect,useContext} from 'react';
import './App.css';
import { BrowserRouter as Router ,Route,Routes,useNavigate} from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';



function App() {
 
  return (
    <div>
     
      <Routes>
      
        <Route element={<Home/>} path='/'/>
        <Route element={<SignUp/>} path='/signup'/>
        <Route element={<Login/>} path='/login'/>

      </Routes> 
      
    </div>
  );
}

export default App;


