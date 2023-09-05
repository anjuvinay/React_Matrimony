import React,{useState,useEffect} from 'react';
import './Profiles.css';
import axios from 'axios';

function Profiles() {
    const[product,setProduct]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/pro').then((response)=>{
          setProduct(response.data.items)
         
        })
       })

  return (
    <section>
    <div class="container mt-5">
    <div class="row">
    {
        product.map((obj)=>{
          return(
      <div class="col-md-3 p-3">
        <div class="card" 
        // style={{width: 15rem; height:25rem}}
        >
  <img 
//   style={{width: 15rem; height: 13rem;}} 
  src={`http://localhost:3001/profile-images/${obj._id}1.jpg`} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{obj.Name}</h5>
    <p class="card-text">{obj.age} Years, {obj.religion}</p>
    <p class="card-text">{obj.job}, {obj.location}</p>
    <a href="/view-profile/{{this._id}}" class="btn btn-primary">View Profile</a>
    
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