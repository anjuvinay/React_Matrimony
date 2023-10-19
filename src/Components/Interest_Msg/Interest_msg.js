import React,{useState,useContext} from 'react';
import './Interest_msg.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PostContext } from '../../store/PostContext';
// import { useParams } from 'react-router-dom';

function Interest_msg() {
    const [message,setMessage]=useState('')
    const navigate=useNavigate()
    const {postDetails}=useContext(PostContext)
    // const { id } = useParams();

    const handleMessage=async (e)=>{
        e.preventDefault()

        const token = localStorage.getItem('token');

      if (!token) {
        console.log('Token missing');
        navigate('/login')
      
      }

      const header = {
        Authorization: `Bearer ${token}`,
      };

      console.log(postDetails)

      if (!postDetails) {
        console.log('postDetails is not defined');
        return;
      }

      try{
        const formData = new FormData();
        formData.append('message', message);
        console.log(formData)
       
          // axios.post(`http://localhost:3001/int-msg/${id}`, formData, {
           await axios.post(`http://localhost:3001/int-msg/${postDetails._id}`, formData, {
            headers: header,
          }).then((response) => {
            if(response.data.sendInterest===true){
              navigate('/')
               
             }else{
              alert("To send Interest, you have to create a profile first")
              navigate('/createProfile');
              console.log("error in Interest sending") 
             }
            
              })} catch (error) {
                console.error('Error posting data:', error);
              }
            };
  return (
    <div>
     <section>
    <div class="container mt-4">
        <div class="row">
            <div class="col-md-6">
                <h3 class="text-center pt-4">Add a message</h3>
                <form onSubmit={handleMessage}>
                      
                <label htmlFor="comment">Message:</label>
                
                <textarea className="form-control" rows="5" name="comment" id="comment"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                    
                    <button class="btn btn-success mt-4 float-right">Send Interest</button>

                </form>
            </div>
        </div>
    </div>
</section> 
    </div>
  )
}

export default Interest_msg
