import React,{useEffect,useContext} from 'react';
import './App.css';
import { BrowserRouter as Router ,Route,Routes,useNavigate} from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import CreatePRofile from './Pages/CreatePRofile';
import My_pRofile from './Pages/My_pRofile';
import Post from './store/PostContext';
import DetailedView from './Pages/DetailedView';
import Edit_MyProfile from './Pages/Edit_MyProfile';
import InterestMsg from './Pages/InterestMsg';



function App() {
 
  return (
    <div>
      <Post>
      <Routes>
      
        <Route element={<Home/>} path='/'/>
        <Route element={<SignUp/>} path='/signup'/>
        <Route element={<Login/>} path='/login'/>
        <Route element={<CreatePRofile/>} path='/createProfile'/>
        <Route element={<My_pRofile/>} path='/myProfile'/>
        <Route element={<DetailedView/>} path='/detailedView'/>
        <Route element={<Edit_MyProfile/>} path='/edit'/>
        <Route element={<InterestMsg/>} path='/interestMsg/:id'/>

      </Routes> 
      </Post>
    </div>
  );
}

export default App;


