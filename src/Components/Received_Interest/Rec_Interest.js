import React,{useState,useEffect,useContext} from 'react';
import './Rec_Interest.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../store/PostContext';

function Rec_Interest() {
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
   

      axios.get('http://localhost:3001/interest', {headers}).then((response)=>{
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

     const handleAccept = async (id) => {
      const token = localStorage.getItem('token');

      if (!token) {
        console.log('Token missing');
        navigate('/login')
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      axios.get(`http://localhost:3001/accept-interest/${id}`, {headers}).then((response)=>{
        if(response.data.status===true){
         console.log("Interest accepted")
          
        }else{
          console.log("error in Interest accept")
          
        }
      }).catch(error => {
        console.error('Error:', error);
      });
     
    }

    const handleDecline = async (id) => {
      const token = localStorage.getItem('token');

      if (!token) {
        console.log('Token missing');
        navigate('/login')
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      axios.get(`http://localhost:3001/decline-interest/${id}`, {headers}).then((response)=>{
        if(response.data.status===true){
         console.log("Interest Declined")
          
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
     
    <h3 class="text-center">Interest Received</h3>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
    <a href="/sendInterest" class="btn btn-secondary">Interest Send</a> 
     &nbsp;&nbsp;&nbsp;
    <a href="/profileAccepted" class="btn btn-secondary">Profiles Accepted</a>
     &nbsp;&nbsp;&nbsp; 
    <a href="/declined-interest" class="btn btn-secondary">Profiles Declined</a>
    
  </form>
</nav >


<section>
   
    {
        profile.map((obj)=>{
          return(
<div class="container mt-3 ml-5">
<div class="card" className='card2'>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={`http://localhost:3001/profile-images/${obj._id}1.jpg`} className="img-thumbnail1" alt="..."/>
    </div>
    <div class="col-md-8 pl-0">
      <div class="card-body">
        <h5 class="card-title mb-3">{obj.Name}</h5>
        <p class="card-text mb-2">{obj.age} Years, {obj.religion}, {obj.job}, {obj.location}</p>
        <p class="card-text mb-2">{obj.receivedDetails.Msg}</p>
        <p class="card-text mb-2">Interest received on {obj.receivedDetails.Date}</p>
        <button 
         onClick={()=>{
          setPostDetails(obj)
          navigate('/detailedView')
        }}
         class="btn btn-secondary mr-4">View Profile</button>

        { obj.receivedDetails.Response === 'Accepted' ?
        (<button class="btn btn-secondary mr-4">Accepted</button>):
        (<button onClick={() => handleAccept(obj._id)} class="btn btn-secondary mr-4">Accept Interest</button>)
        }
        
        { obj.receivedDetails.Response === 'Declined' ?
        (<button class="btn btn-secondary mr-4">Declined</button>):
        (<button onClick={() => handleDecline(obj._id)} class="btn btn-secondary mr-4">Decline Interest</button>)
        }
        
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

export default Rec_Interest
