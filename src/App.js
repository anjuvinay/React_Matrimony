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
import ReceivedINTerest from './Pages/ReceivedINTerest';
import SendINTerest from './Pages/SendINTerest';
import ProfileACCepted from './Pages/ProfileACCepted';
import ProfileDEClined from './Pages/ProfileDEClined';
import Matching_Profile from './Pages/Matching_Profile';
import Admin_SignUP from './Pages/Admin_SignUP';
import Admin_LogIN from './Pages/Admin_LogIN';
import Admin_HOme from './Pages/Admin_HOme';



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
        <Route element={<ReceivedINTerest/>} path='/receivedInterest'/>
        <Route element={<SendINTerest/>} path='/sendInterest'/>
        <Route element={<ProfileACCepted/>} path='/profileAccepted'/>
        <Route element={<ProfileDEClined/>} path='/profileDeclined'/>
        <Route element={<Matching_Profile/>} path='/matches'/>
        <Route element={<Admin_SignUP/>} path='/adminSignUp'/>
        <Route element={<Admin_LogIN/>} path='/adminLogin'/>
        <Route element={<Admin_HOme/>} path='/adminHome'/>

      </Routes> 
      </Post>
    </div>
  );
}

export default App;


