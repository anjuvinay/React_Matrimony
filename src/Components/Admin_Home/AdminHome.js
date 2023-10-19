import React,{useState,useEffect,useContext} from 'react';
import './AdminHome.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function AdminHome() {
    const navigate=useNavigate()
  const[product,setProduct]=useState([])


useEffect(()=>{
    const token = localStorage.getItem('token');

    if (!token) {
      console.log('Token missing');
      navigate('/login')
    
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };
   

      axios.get('http://localhost:3001/admin/list', {headers}).then((response)=>{
        setProduct(response.data.items)
       
      })
      .catch((error) => {
        console.error('An error occurred while fetching data:', error);
        navigate('/login')
      });
 
     },)

     const handleVerify = async (id) => {
        const token = localStorage.getItem('token');
  
        if (!token) {
          console.log('Token missing');
          navigate('/adminLogin')
        }
  
        const headers = {
          Authorization: `Bearer ${token}`,
        };
  
        axios.get(`http://localhost:3001/admin/verify-status/${id}`, {headers}).then((response)=>{
          if(response.data.status===true){
           console.log("verified")
            
          }else{
            console.log("error in Interest accept")
            
          }
        }).catch(error => {
          console.error('Error:', error);
        });
       
      }

  return (
    <div>
      <section>
    <div class="container">
      <div class="row mt-4"></div>
     
        <table class="table mt-5" id="profilesTable">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Photo</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Religion</th>
      <th scope="col">Profession</th>
      <th scope="col">Place</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
  {
        product.map((obj, index)=>{
          return(
    <tr>     
      <th scope="row">{index + 1}</th> 
      <td><img src={`http://localhost:3001/profile-images/${obj._id}1.jpg`} className='imgg' alt=""/></td>
      <td>{obj.Name}</td>
      <td>{obj.age}</td>
      <td>{obj.religion}</td>
      <td>{obj.job}</td>
      <td>{obj.location}</td>
      <td>
      { obj.status === 'Verified' ?
         (<a class="btn btn-success" >Verified</a>):
         (<a onClick={() => handleVerify(obj._id)} class="btn btn-info" >Verify</a>)
      }
       </td> 
       
    </tr>
   )
})
}
    
  </tbody>
</table>

    </div>
</section>

{/* <script>
  $(function(){
    $('#profilesTable').DataTable()
  })
</script> */}
    </div>
  )
}

export default AdminHome
