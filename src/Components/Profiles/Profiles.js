import React,{useState,useEffect} from 'react';
import './Profiles.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profiles() {
  const navigate=useNavigate()
  const[product,setProduct]=useState([])

  useEffect(()=>{
      const token = localStorage.getItem('token');

      if (!token) {
        console.log('Token missing');
       return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };
        axios.get('http://localhost:3001/pro', {headers}).then((response)=>{
          setProduct(response.data.items)
         
        })
        .catch((error) => {
          console.error('An error occurred while fetching data:', error);
        });
   
       })

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
    <a href="/view-profile/{{obj._id}}" class="btn btn-primary">View Profile</a>
    
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