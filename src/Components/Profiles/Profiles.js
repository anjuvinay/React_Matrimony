import React,{useState,useEffect,useContext} from 'react';
import './Profiles.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../store/PostContext';

function Profiles() {
  const navigate=useNavigate()
  const[product,setProduct]=useState([])
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
     
  
        axios.get('http://localhost:3001/pro', {headers}).then((response)=>{
          setProduct(response.data.items)
         
        })
        .catch((error) => {
          console.error('An error occurred while fetching data:', error);
          navigate('/login')
        });
   
       },[])

  return (
    <section>
    <div class="container mt-4">
    <div class="row">
    {
        product.map((obj)=>{
          return(
      <div class="col-md-3 p-3">
        <div class="card">
  <img  src={`http://localhost:3001/profile-images/${obj._id}1.jpg`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{obj.Name}</h5>
    <p class="card-text">{obj.age} Years, {obj.religion}</p>
    <p class="card-text">{obj.job}, {obj.location}</p>
    <button 
    onClick={()=>{
              setPostDetails(obj)
              navigate('/detailedView')
            }}
              class="btn btn-primary">View Profile</button>
    
  </div>
</div>
      </div>
      )
        })
        }
       </div>

    </div>
   </section>
  );
}

export default Profiles;