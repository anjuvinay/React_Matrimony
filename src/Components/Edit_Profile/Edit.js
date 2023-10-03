import React,{useState,useEffect} from 'react';
import './Edit.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Edit() {
  const navigate=useNavigate()
  const[profile,setProfile]=useState([])
  const [formData, setFormData] = useState({
   
    name: '',
    age: '',
    gender: '',
    DOB:'',
    height:'',
    weight:'',
    complexion:'',
    physical:'',
    language:'',
    location:'',
    marital:'',
    diet:'',
    religion:'',
    caste:'',
    education:'',
    job:'',
    mobile:'',
    email:'',

    ffage1:'',
    ffage2:'',
    ffheight1:'',
    ffheight2:'',
    ffreligion:'',
    ffcaste:'',
    ffcomplexion:'',
    fflanguage:'',
    ffdiet:'',
    ffEducation:'',
    ffjob:'',
    fflocation:'',
    ffmarital:'',
    ffphysical:'',
 
    image1: null,
    image2: null,
    image3: null,
    isImage1Updated: false,
    isImage2Updated: false,
    isImage3Updated: false
  });


  useEffect(()=>{
    const token = localStorage.getItem('token');

    if (!token) {
      console.log('Token missing');
      navigate('/login')
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };
   

      axios.get('http://localhost:3001/edit-profile', {headers}).then((response)=>{
        setProfile(response.data.items)
        const savedData = response.data.items;
        setFormData({
          name: savedData.Name || '',
          age: savedData.age || '',
          gender: savedData.gender || '',
          DOB: savedData.DOB || '',
          height:savedData.height || '',
          weight:savedData.weight || '',
          complexion:savedData.complexion || '',
          physical:savedData.physical || '',
          language:savedData.language || '',
          location:savedData.location || '',
          marital:savedData.marital || '',
          diet:savedData.diet || '',
          religion:savedData.religion || '',
          caste:savedData.caste || '',
          Education:savedData.Education || '',
          job:savedData.job || '',
          mobile:savedData.mobile || '',
          email: savedData.email || '',

          ffage1:savedData.ffage1 || '',
          ffage2:savedData.ffage2 || '',
          ffheight1:savedData.ffheight1 || '',
          ffheight2:savedData.ffheight2 || '',
          ffreligion:savedData.ffreligion || '',
          ffcaste:savedData.ffcaste || '',
          ffcomplexion:savedData.ffcomplexion || '',
          fflanguage:savedData.fflanguage || '',
          ffdiet:savedData.ffdiet || '',
          ffEducation:savedData.ffEducation || '',
          ffjob:savedData.ffjob || '',
          fflocation:savedData.fflocation || '',
          ffmarital:savedData.ffmarital || '',
          ffphysical:savedData.ffphysical || '',
         
          image1: savedData.image1 || '',
          image2: savedData.image2 || '',
          image3: savedData.image3 || '',
        });
    
      })
      .catch((error) => {
        console.error('An error occurred while fetching data:', error);
        navigate('/login')
      });
 
     },[])

     const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleFileChange = (e) => {
      const { name, files } = e.target;
      setFormData({ ...formData, [name]: files[0] });
    };

    // const handleFileChange = (e) => {
    //   const { name, files } = e.target;
    //   // Assuming that the input name matches the image number (e.g., "image1", "image2", "image3")
    //   const image1 = name.replace("image", "");
    
    //   // Create a URL for the selected file
    //   const imageUrl = URL.createObjectURL(files[0]);
    
    //   setFormData((prevFormData) => ({
    //     ...prevFormData,
    //     [name]: files[0],
    //     // Update the corresponding <img> src
    //     [`image${image1}`]: imageUrl,
    //   }));
    // };
    

  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const token = localStorage.getItem('token');
  
      if (!token) {
        console.log('Token missing');
        navigate('/login');
      }
  
      const headers = {
        Authorization: `Bearer ${token}`,
      };
  
      const profileData = new FormData();
      profileData.append('Name', formData.name);
      profileData.append('age', formData.age);
      profileData.append('gender', formData.gender);
      profileData.append('DOB', formData.DOB);
      profileData.append('height', formData.height);
      profileData.append('weight', formData.weight);
      profileData.append('complexion', formData.complexion);
      profileData.append('physical', formData.physical);
      profileData.append('language', formData.language);
      profileData.append('location', formData.location);
      profileData.append('marital', formData.marital);
      profileData.append('diet', formData.diet);
      profileData.append('religion', formData.religion);
      profileData.append('caste', formData.caste);
      profileData.append('Education', formData.Education);
      profileData.append('job', formData.job);
      profileData.append('mobile', formData.mobile);
      profileData.append('email', formData.email);
      profileData.append('ffage1', formData.ffage1);
      profileData.append('ffage2', formData.ffage2);
      profileData.append('ffheight1', formData.ffheight1);
      profileData.append('ffheight2', formData.ffheight2);
      profileData.append('ffreligion', formData.ffreligion);
      profileData.append('ffcaste', formData.ffcaste);
      profileData.append('ffcomplexion', formData.ffcomplexion);
      profileData.append('fflanguage', formData.fflanguage);
      profileData.append('ffdiet', formData.ffdiet);
      profileData.append('ffEducation', formData.ffEducation);
      profileData.append('ffjob', formData.ffjob);
      profileData.append('fflocation', formData.fflocation);
      profileData.append('ffmarital', formData.ffmarital);
      profileData.append('ffphysical', formData.ffphysical);
            
      profileData.append('image1', formData.image1);
      profileData.append('image2', formData.image2);
      profileData.append('image3', formData.image3);
  
      axios
        .post('http://localhost:3001/edit-profile', profileData, { headers })
        .then((response) => {
          console.log("Profile updated successfully");
          navigate('/myProfile');
         
        })
        .catch((error) => {
          console.error('Error updating profile:', error);
        });
    };

  return (
    <div>
      <section>
    <div class="container mt-4">
        <div class="row">
            <div class="col-md-6">
                <h2 class="text-center">Edit Profile</h2>
                    <form onSubmit={handleSubmit}>

                    {/* <label>Image 1</label>&emsp;
                    <img width="150px" height="150px" src={formData.image1} alt="..." />
                    <input type="file" class="form-control" name="image1"
                     onChange={handleFileChange} />
                      */}


                    <div>
                    <label>Image 1</label>&emsp;
                    <img width="150px" height="150px" src={`http://localhost:3001/profile-images/${profile._id}1.jpg?${Date.now()}`} alt="..."/>
                    <input type="file" class="form-control" name="image1"
                    onChange={handleFileChange} />
                    </div>
                    <br/>

                    <label htmlFor="">Image 2 </label>&emsp;
                    <img width="150px" height="150px" src={`http://localhost:3001/profile-images/${profile._id}2.jpg?${Date.now()}`} alt="..."/>
                    <input type="file" class="form-control" name="image2" 
                    onChange={handleFileChange} />
                    <br/> 

                    <label htmlFor="">Image 3 </label>&emsp;
                    <img width="150px" height="150px" src={`http://localhost:3001/profile-images/${profile._id}3.jpg?${Date.now()}`} alt="..."/>
                    <input type="file" class="form-control" name="image3" 
                    onChange={handleFileChange} />
                  
                    
                    <label>Name</label>
                    <input type="text" name="name" class="form-control" value={formData.name}
                    onChange={handleInputChange} />
                    
                    
                    <label>Age</label>
                    <input type="number" name="age" class="form-control" value={formData.age}
                    onChange={handleInputChange} />
                    

                    <label>Gender</label>
                    <select name="gender" class="form-control" value={formData.gender}
                    onChange={handleInputChange}>
                    <option className='empty' value=""> </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    </select>
                    

                    <label for="">Date Of Birth</label>
                    <input type="date" name="DOB" class="form-control" value={formData.DOB}
                    onChange={handleInputChange}/>


                    <label for="">Height</label>
                    <input type="number" step="any" name="height" class="form-control" value={formData.height}
                    onChange={handleInputChange}/>
                   

                    <label for="">Weight</label>
                    <input type="number" name="weight" class="form-control" value={formData.weight}
                    onChange={handleInputChange}/>

 
                    <label for="">Complexion</label>
                    <select type="text" name="complexion" class="form-control" value={formData.complexion}
                    onChange={handleInputChange}>
                        <option className='empty' value=""> </option>
                        <option value="Very Fair">Very Fair</option>
                        <option value="Fair">Fair</option>
                        <option value="Medium">Medium</option>
                        <option value="Wheatish">Wheatish</option>
                        <option value="Dark">Dark</option>
                    </select>

 
                    <label for="">Physical Status</label>
                    <select type="text" name="physical" class="form-control" value={formData.physical}
                    onChange={handleInputChange}>
                        <option className='empty' value=""> </option>
                        <option value="Normal">Normal</option>
                        <option value="Disabled">Disabled</option>
                    </select>


                    <label for="">Mother Tongue</label>
                    <select type="text" name="language" class="form-control" value={formData.language}
                    onChange={handleInputChange}>
                        <option className='empty' value=""> </option>
                        <option value="Malayalam">Malayalam</option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Tamil">Tamil</option>
                        <option value="Kannada">Kannada</option>
                        <option value="Telugu">Telugu</option>
                    </select>


                    <label for="">Location</label>
                    <select type="text" name="location" class="form-control" value={formData.location}
                    onChange={handleInputChange}>
                        <option className='empty' value=""> </option>
                        <option value="Calicut">Calicut</option>
                        <option value="Thrissur">Thrissur</option>
                        <option value="Cochin">Cochin</option>
                        <option value="Trivandrum">Trivandrum</option>
                        <option value="Kottayam">Kottayam</option>
                        <option value="Wayanad">Wayanad</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Culcutta">Culcutta</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Dubai">Dubai</option>
                        <option value="UK">UK</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="Austaralia">Austaralia</option>   
                    </select>


                    <label for="">Marital Status</label>
                    <select type="text" name="marital" class="form-control" value={formData.marital}
                    onChange={handleInputChange}>
                    <option className='empty' value=""> </option>
                        <option value="Unmarried">Unmarried</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Seperated">Seperated</option>
                        <option value="Widow">Widow</option>  
                    </select>


                    <label for="">Diet</label>
                    <select type="text" name="diet" class="form-control" value={formData.diet}
                    onChange={handleInputChange}>
                        <option className='empty' value=""> </option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Non-Vegetarian">Non-Vegetarian</option>
                        <option value="Eggetarian">Eggetarian</option>
                        <option value="Vegan">Vegan</option>
                    </select>


                    <label for="">Religion</label>
                    <select type="text" name="religion" class="form-control" value={formData.religion}
                    onChange={handleInputChange}>
                    <option className='empty' value=""> </option>
                        <option value="Christian">Christian</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Muslim">Muslim</option>
                        <option value="Atheist">Atheist</option>
                        <option value="Other">Other</option>
                    </select>


                    <label for="">Caste</label>
                    <select type="text" name="caste" class="form-control" value={formData.caste}
                    onChange={handleInputChange}>
                        <option className='empty' value=""> </option>
                        <option value="Jacobite">Jacobite</option>
                        <option value="Orthodox">Orthodox</option>
                        <option value="CSI">CSI</option>
                        <option value="Catholic">Catholic</option>
                        <option value="Nair">Nair</option>
                        <option value="Menon">Menon</option>
                        <option value="Ezhava">Ezhava</option>
                        <option value="Brahmin">Brahmin</option>      
                    </select>


                    <label for="">Education</label>
                    <select type="text" name="Education" class="form-control" value={formData.Education}
                    onChange={handleInputChange}>
                        <option className='empty' value=""> </option>
                        <option value="B.Tech">B.Tech</option>
                        <option value="M.Tech">M.Tech</option>
                        <option value="LLB">LLB</option>
                        <option value="LLM">LLM</option>
                        <option value="MBBS">MBBS</option>
                        <option value="MD">MD</option>
                        <option value="BDS">BDS</option>
                        <option value="MDS">MDS</option>
                        <option value="MCA">MCA</option>
                        <option value="B.Arch">B.Arch</option>
                        <option value="Phd">Phd</option>
                        <option value="B.pharm">B.pharm</option>
                        <option value="MSW">MSW</option>
                        <option value="B.com">B.com</option>
                        <option value="BA">BA</option>
                        <option value="BHMS">BHMS</option>   
                    </select>


                     <label for="">Job</label>
                     <select type="text" name="job" class="form-control" value={formData.job}
                     onChange={handleInputChange}>
                        <option className='empty' value=""> </option>
                        <option value="Chartered Accountant">Chartered Accountant</option>
                        <option value="Banking Professional">Banking Professional</option>
                        <option value="Business">Business</option>
                        <option value="Professor">Professor</option>
                        <option value="Scientist">Scientist</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Pilot">Pilot</option>
                        <option value="Engineer">Engineer</option>
                        <option value="Lawyer">Lawyer</option>
                        <option value="Police">Police</option>
                        <option value="Dentist">Dentist</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Journalist">Journalist</option>
                        <option value="Fashion Designer">Fashion Designer</option>
                        <option value="Data Analyst">Data Analyst</option>
                        <option value="Not Working">Not Working</option>   
                    </select>


                    <label for="">Mobile Number</label>
                    <input type="number" name="mobile" class="form-control" value={formData.mobile}
                    onChange={handleInputChange} />

                    
                    <div>
                    <label>Email</label>
                    <input type="email" name="email"  class="form-control" value={formData.email}
                    onChange={handleInputChange} />
                    </div>
                    <br/><br/>


                    <h2 class="text-center col-md-12">Partner Preference</h2>

                    
                    <label for="">Age</label>
                     <div class="row">
                     <div class="col">
                    <input type="number" class="form-control"  name="ffage1" value={formData.ffage1} placeholder="Minimum Age"
                    onChange={handleInputChange} />
                    </div>
                    <div class="col">
                    <input type="number" class="form-control"  name="ffage2" value={formData.ffage2} placeholder="Maximum Age"
                    onChange={handleInputChange} />
                    </div>
                    </div>
                    <br/>
                    

                    <label for="">Height</label>
                    <div class="row">
                    <div class="col">
                    <input type="number" class="form-control" step="any" value={formData.ffheight1} name="ffheight1" placeholder="Minimum Height"
                    onChange={handleInputChange} />
                    </div>
                    <div class="col">
                    <input type="number" class="form-control" step="any" value={formData.ffheight2} name="ffheight2" placeholder="Maximum Height"
                    onChange={handleInputChange} />
                    </div>
                    </div>
                    <br/>

 
                    <label for="">Religion</label>
                    <select type="text" name="ffreligion" class="form-control" value={formData.ffreligion}
                    onChange={handleInputChange}>
                    <option className='empty' value=""> </option>
                        <option value="Christian" >Christian</option>
                        <option value="Hindu" >Hindu</option>
                        <option value="Muslim" >Muslim</option>
                        <option value="Atheist" >Atheist</option>
                        <option value="Other" >Other</option>
                         <option value="Any">Any</option>
                    </select>

                    <label for="">Caste</label>
                    <select type="text" name="ffcaste" class="form-control" value={formData.ffcaste}
                    onChange={handleInputChange}>
                        <option className='empty' value=""> </option>
                        <option value="Jacobite">Jacobite</option>
                        <option value="Orthodox">Orthodox</option>
                        <option value="CSI">CSI</option>
                        <option value="Catholic">Catholic</option>
                        <option value="Nair">Nair</option>
                        <option value="Menon">Menon</option>
                        <option value="Ezhava">Ezhava</option>
                        <option value="Brahmin">Brahmin</option>
                        <option value="Nil">Nil</option> 
                        <option value="Any">Any</option>     
                    </select>

                    <label for="">Complexion</label>
                    <select type="text" name="ffcomplexion" class="form-control" value={formData.ffcomplexion}
                    onChange={handleInputChange}>
                        <option className='empty' value=""> </option>
                        <option value="Very Fair">Very Fair</option>
                        <option value="Fair">Fair</option>
                        <option value="Medium">Medium</option>
                        <option value="Wheatish">Wheatish</option>
                        <option value="Dark">Dark</option>
                        <option value="Any">Any</option>
                    </select>

                    <label for="">Mother Tongue</label>
                    <select type="text" name="fflanguage" class="form-control" value={formData.fflanguage}
                    onChange={handleInputChange}>
                        <option className='empty' value=""> </option>
                        <option value="Malayalam">Malayalam</option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Tamil">Tamil</option>
                        <option value="Kannada">Kannada</option>
                        <option value="Telugu">Telugu</option>
                        <option value="Any">Any</option>
                    </select>

                    <label for="">Diet</label>
                    <select type="text" name="ffdiet" class="form-control" value={formData.ffdiet}
                    onChange={handleInputChange}>
                        <option className='empty' value=""> </option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Non-Vegetarian">Non-Vegetarian</option>
                        <option value="Eggetarian">Eggetarian</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Any">Any</option>
                    </select>

                    <label for="">Education</label>
                    <select type="text" name="ffEducation" class="form-control" value={formData.ffEducation}
                    onChange={handleInputChange}>
                        <option className='empty' value=""> </option>
                        <option value="B.Tech">B.Tech</option>
                        <option value="M.Tech">M.Tech</option>
                        <option value="LLB">LLB</option>
                        <option value="LLM">LLM</option>
                        <option value="MBBS">MBBS</option>
                        <option value="MD">MD</option>
                        <option value="BDS">BDS</option>
                        <option value="MDS">MDS</option>
                        <option value="MCA">MCA</option>
                        <option value="B.Arch">B.Arch</option>
                        <option value="Phd">Phd</option>
                        <option value="B.pharm">B.pharm</option>
                        <option value="MSW">MSW</option>
                        <option value="B.com">B.com</option>
                        <option value="BA">BA</option>
                        <option value="BHMS">BHMS</option> 
                        <option value="Any">Any</option>  
                    </select>

                    <label for="">Job</label>
                    <select type="text" name="ffjob" class="form-control" value={formData.ffjob}
                    onChange={handleInputChange}>
                        <option className='empty' value=""> </option>
                        <option value="Chartered Accountant">Chartered Accountant</option>
                        <option value="Banking Professional">Banking Professional</option>
                        <option value="Business">Business</option>
                        <option value="Professor">Professor</option>
                        <option value="Scientist">Scientist</option>
                        <option value="Teacher">Teacher</option>
                        <option value="Pilot">Pilot</option>
                        <option value="Engineer">Engineer</option>
                        <option value="Lawyer">Lawyer</option>
                        <option value="Police">Police</option>
                        <option value="Dentist">Dentist</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Journalist">Journalist</option>
                        <option value="Fashion Designer">Fashion Designer</option>
                        <option value="Data Analyst">Data Analyst</option>
                        <option value="Not Working">Not Working</option>
                        <option value="Any">Any</option>   
                    </select>

                     <label for="">Location</label>
                    <select type="text" name="fflocation" class="form-control" value={formData.fflocation}
                    onChange={handleInputChange}>
                        <option className='empty' value=""> </option>
                        <option value="Calicut">Calicut</option>
                        <option value="Thrissur">Thrissur</option>
                        <option value="Cochin">Cochin</option>
                        <option value="Trivandrum">Trivandrum</option>
                        <option value="Kottayam">Kottayam</option>
                        <option value="Wayanad">Wayanad</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Culcutta">Culcutta</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Dubai">Dubai</option>
                        <option value="UK">UK</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="Austaralia">Austaralia</option> 
                        <option value="Any">Any</option>  
                    </select>

                    <label for="">Marital Status</label>
                    <select type="text" name="ffmarital" class="form-control" value={formData.ffmarital}
                    onChange={handleInputChange}>
                        <option className='empty' value=""> </option>
                        <option value="Unmarried">Unmarried</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Seperated">Seperated</option>
                        <option value="Widow">Widow</option> 
                        <option value="Any">Any</option> 
                    </select>

                    <label for="">Physical Status</label>
                    <select type="text" name="ffphysical" class="form-control" value={formData.ffphysical}
                    onChange={handleInputChange}>
                        <option className='empty' value=""> </option>
                        <option value="Normal">Normal</option>
                        <option value="Disabled">Disabled</option> 
                        <option value="Any">Any</option> 
                    </select> 

                    <button type="submit" class="btn btn-success mt-4">Submit</button>
                    <br/><br/><br/><br/>

                    </form>

            </div>
        </div>
    </div>
</section>

    </div>
  )
}

export default Edit
