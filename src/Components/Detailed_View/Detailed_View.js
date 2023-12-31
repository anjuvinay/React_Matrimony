import React,{useState,useEffect,useContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Detailed_view.css'
import { PostContext } from '../../store/PostContext';

function Detailed_View() {
  const navigate=useNavigate()
  const {postDetails}=useContext(PostContext)
  const[profile,setProfile]=useState([])

  useEffect(()=>{
    const token = localStorage.getItem('token');

    if (!token) {
      console.log('Token missing');
      navigate('/login')
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };
   
    
      axios.get(`http://localhost:3001/view-profile/${postDetails._id}`, {headers}).then((response)=>{
        console.log(postDetails._id)
        setProfile(response.data.items)
       
      })
      .catch((error) => {
        console.error('An error occurred while fetching data:', error);
        navigate('/login')
      });
 
     },[])

  return (
    <div>
         <div class="container mt-4">
        
            <div class="row">
                 <div class="col-md-4">
                   <br/>
                    <div class="geeks">
                        <img src={`http://localhost:3001/profile-images/${profile._id}1.jpg`} className="card-img-top1" alt="..."/>
                    </div>
                   
                    <br/>
                    <div class="row no-gutters">
                        <div class="col-md-6 geeks">
                        <img src={`http://localhost:3001/profile-images/${profile._id}2.jpg`} className="card-img-top2" alt="..."/>
                        </div>

                        <div class="col-md-6 geeks">
                        <img src={`http://localhost:3001/profile-images/${profile._id}3.jpg`} className="card-img-top2" alt="..."/>
                        </div>
                    </div>

                     
                </div> 

                <div class="col-md-4">
                    <div class="container mt-4 ml-5 checkout">
                        <hr/>
                        <h6>Name: {profile.Name} </h6>
                        <hr/>
                        <h6>Age: {profile.age} Years</h6>
                        <hr/>
                        <h6>Date of Birth: {profile.DOB} </h6>
                        <hr/>
                        <h6>Gender: {profile.gender} </h6>
                        <hr/> 
                        <h6>Height: {profile.height} ft </h6>
                        <hr/>
                        <h6>Weight: {profile.weight} kg </h6>
                        <hr/> 
                        <h6>Complexion: {profile.complexion} </h6>
                        <hr/>
                        <h6>Physical Status: {profile.physical} </h6>
                        <hr/> 
                        <h6>Mother Tongue: {profile.language} </h6>
                        <hr/>                        
                        </div>
                </div>

                        <div class="col-md-4">
                    <div class="container mt-4 ml-5 checkout">
                        
                        <hr/>
                        <h6>Location: {profile.location} </h6>
                        <hr/> 
                        <h6>Marital Status: {profile.marital} </h6>
                        <hr/> 
                        <h6>Diet: {profile.diet} </h6>
                        <hr/>
                        <h6>Religion: {profile.religion} </h6>
                        <hr/> 
                        <h6>Caste: {profile.caste} </h6>
                        <hr/>
                        <h6>Education: {profile.Education} </h6>
                        <hr/> 
                        <h6>Job: {profile.job} </h6>
                        <hr/>
                        <h6>Email: {profile.email} </h6>
                        <hr/>
                        <h6>Mobile: {profile.mobile} </h6>
                        <hr/>   
                          <button onClick={()=>{ navigate(`/interestMsg/${postDetails._id}`) }}
                          class="btn btn-primary mr-4">Send Interest</button>
                          <a href="/send-message/{{profile._id}}" class="btn btn-primary">Send Message</a>        
                         <br/><br/><br/><br/><br/>
                        </div>

                    </div>

                    <h2 class="text-center col-md-12">Partner Preference</h2>
                    <br/>
                    <div class="col-md-6">
                    <div class="container mt-5 ml-5 pr-5 pl-5 checkout">
                        
                        
                        <hr/>
                         <h6>Age: {profile.ffage1} - {profile.ffage2} </h6>
                        <hr/> 
                        <h6>Height: {profile.ffheight1} - {profile.ffheight2} </h6>
                        <hr/> 
                        <h6>Religion: {profile.ffreligion} </h6>
                        <hr/>
                        <h6>Caste: {profile.ffcaste} </h6>
                        <hr/>
                        <h6>Complexion: {profile.ffcomplexion} </h6>
                        <hr/>
                        <h6>Mother Tongue: {profile.fflanguage} </h6>
                        <hr/>             
                         <br/><br/><br/>
                        </div>

                    </div>

                     <div class="col-md-6">
                    <div class="container mt-5 ml-5 pr-5 pl-5 checkout">
                        <hr/>
                        <h6>Diet: {profile.ffdiet} </h6>
                        <hr/>
                        <h6>Education: {profile.ffEducation} </h6>
                        <hr/> 
                        <h6>Job: {profile.ffjob} </h6>
                        <hr/>
                        <h6>Location: {profile.fflocation} </h6>
                        <hr/>
                        <h6>Marital Status: {profile.ffmarital} </h6>
                        <hr/>
                        <h6>Physical Status: {profile.ffphysical} </h6>
                        <hr/>           
                         <br/><br/><br/>
                        </div>

                    </div>

                    
                </div>

                
            </div>

        
    </div>
      
  )
}

export default Detailed_View
