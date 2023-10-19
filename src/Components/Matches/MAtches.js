import React,{useState,useEffect,useContext} from 'react';
import './MATches.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../store/PostContext';


function MAtches() {
  const navigate=useNavigate()
    const[profile,setProfile]=useState([])
    const {setPostDetails}=useContext(PostContext)

    useEffect(()=>{
      const token = localStorage.getItem('token');
  
      if (!token) {
        console.log('Token missing');
        navigate('/login')
      
      }
  
      const headers = {
        Authorization: `Bearer ${token}`,
      };
     
  
        axios.get('http://localhost:3001/matches', {headers}).then((response)=>{
          if (response.data.items) {
              setProfile(response.data.items)
            } 
            else {
              navigate('/createProfile')
            }
          
         
        })
        .catch((error) => {
          console.error('An error occurred while fetching data:', error);
          navigate('/login')
        });
   
       },[])

  return (
    <div>
     <section>
{
        profile.map((obj)=>{
          return(
    <div class="container mt-3 ml-5">
<div class="card8" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={`http://localhost:3001/profile-images/${obj._id}1.jpg`} class="img-thumbnail8" alt="..."/>
    </div>
    <div class="col-md-8 pl-0">
      <div class="card-body">
        <h5 class="card-title mb-3">{obj.Name}</h5>
        <p class="card-text mb-2">{obj.age} Years, {obj.religion}, {obj.job}, {obj.location}</p>
        <button onClick={()=>{
          setPostDetails(obj)
          navigate('/detailedView')
        }} class="btn btn-secondary mr-4">View Profile</button> 
      </div>
    </div>
  </div>
</div>
</div>
)
})
}
</section>

    </div>
  )
}


export default MAtches
