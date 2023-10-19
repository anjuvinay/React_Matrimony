import React,{useState,useEffect,useContext} from 'react';
import './Send_int.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../store/PostContext';


function Send_int() {
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
   

      axios.get('http://localhost:3001/send-interest-button', {headers}).then((response)=>{
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
 
     },)

     const cancelInterest = async (id) => {
        const token = localStorage.getItem('token');
  
        if (!token) {
          console.log('Token missing');
          navigate('/login')
        }
  
        const headers = {
          Authorization: `Bearer ${token}`,
        };
  
        axios.get(`http://localhost:3001/cancel-intrest/${id}`, {headers}).then((response)=>{
          if(response.data.deleteInterest===true){
           console.log("Interest Deleted")
            
          }else{
            console.log("error in Interest declining")
            
          }
        }).catch(error => {
          console.error('Error:', error);
        });
       
      }

  return (
    <div>
     <nav class="navbar navbar-light bg-light mb-4">
  <form class="form-inline">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
     
    <h4 class="text-center">Interest Send</h4>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
    
    <a href="/receivedInterest" class="btn btn-secondary">Interest Received</a> 
  </form>
</nav>


<section>
       {
        profile.map((obj)=>{
          return(
 <div class="container mt-3 ml-5">
<div class="card" className='card5'>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={`http://localhost:3001/profile-images/${obj._id}1.jpg`} class="img-thumbnail5" alt="..."/>
    </div>
    <div class="col-md-8 pl-0">
      <div class="card-body">
        <h5 class="card-title mb-3">{obj.Name}</h5>
        <p class="card-text mb-2">{obj.age} Years, {obj.religion}, {obj.job}, {obj.location}</p>
        <p class="card-text mb-2">{obj.sendDetails.Msg}</p>
        <p class="card-text mb-2">Interest send on {obj.sendDetails.Date}</p>

        { obj.sendDetails.Response === 'Declined' ?
        (<p class="card-text mb-2">{obj.Name} has {obj.sendDetails.Response} your Interest</p>):

         obj.sendDetails.Response === 'Accepted' ?
        (<p class="card-text mb-2">{obj.Name} has {obj.sendDetails.Response} your Interest</p>):

        (<p class="card-text mb-2">Waiting for response from {obj.Name}</p>)}

<button  onClick={()=>{
          setPostDetails(obj)
          navigate('/detailedView')
        }}  class="btn btn-secondary mr-4">View Profile</button>
       
        <button onClick={() => cancelInterest(obj._id)} class="btn btn-secondary mr-4">Cancel Interest</button>
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

export default Send_int
