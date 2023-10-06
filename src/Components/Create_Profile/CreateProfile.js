import React,{useState,useEffect} from 'react';
import './CreateProfile.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


export default function CreateProfile() {
    const navigate=useNavigate()

    const [image1,setImage1]=useState(null)
    const [image2,setImage2]=useState(null)
    const [image3,setImage3]=useState(null)
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [gender,setGender]=useState('')
    const [dob,setDob]=useState('')
    const [height,setHeight]=useState('')
    const [weight,setWeight]=useState('')
    const [complexion,setComplexion]=useState('')
    const [physical,setPhysical]=useState('')
    const [motherTongue,setMotherTongue]=useState('')
    const [location,setLocation]=useState('')
    const [marital,setMarital]=useState('')
    const [diet,setDiet]=useState('')
    const [religion,setReligion]=useState('')
    const [caste,setCaste]=useState('')
    const [education,setEducation]=useState('')
    const [job,setJob]=useState('')
    const [mobile,setMobile]=useState('')
    const [email,setEmail]=useState('')
    const [emailError, setEmailError] = useState('');

    const [p_age_min,setP_age_min]=useState('')
    const [p_age_max,setP_age_max]=useState('')
    const [p_height_min,setP_height_min]=useState('')
    const [p_height_max,setP_height_max]=useState('')
    const [p_religion,setP_religion]=useState('')
    const [p_caste,setP_caste]=useState('')
    const [p_complexion,setP_complexion]=useState('')
    const [p_motherTongue,setP_motherTongue]=useState('')
    const [p_diet,setP_diet]=useState('')
    const [p_education,setP_education]=useState('')
    const [p_job,setP_job]=useState('')
    const [p_location,setP_location]=useState('')
    const [p_marital,setP_marital]=useState('')
    const [p_physical,setP_physical]=useState('')

    const handleSubmit=(e)=>{
    e.preventDefault()

    if (!email) {
        setEmailError('Email is mandatory');
        return;
      }
  
      setEmailError('');

     const token = localStorage.getItem('token');

      if (!token) {
        console.log('Token missing');
        navigate('/login')
      }

      const header = {
        Authorization: `Bearer ${token}`,
      };

    try{
        const formData = new FormData();
        formData.append('image1', image1);
        formData.append('image2', image2);
        formData.append('image3', image3);
        formData.append('Name', name);
        formData.append('age', age);
        formData.append('gender', gender);
        formData.append('DOB', dob);
        formData.append('height', height);
        formData.append('Weight', weight);
        formData.append('complexion', complexion);
        formData.append('physical', physical);
        formData.append('language', motherTongue);
        formData.append('location', location);
        formData.append('marital', marital);
        formData.append('diet', diet);
        formData.append('religion', religion);
        formData.append('caste', caste);
        formData.append('Education', education);
        formData.append('job', job);
        formData.append('mobile', mobile);
        formData.append('email', email);
        formData.append('ffage1', p_age_min);
        formData.append('ffage2', p_age_max);
        formData.append('ffheight1', p_height_min);
        formData.append('ffheight2', p_height_max);
        formData.append('ffreligion', p_religion);
        formData.append('ffcaste', p_caste);
        formData.append('ffcomplexion', p_complexion);
        formData.append('fflanguage', p_motherTongue);
        formData.append('ffdiet', p_diet);
        formData.append('ffEducation', p_education);
        formData.append('ffjob', p_job);
        formData.append('fflocation', p_location);
        formData.append('ffmarital', p_marital);
        formData.append('ffphysical', p_physical);
        
  
          const response = axios.post('http://localhost:3001/create-profile', formData, {
           
          headers: header, 
              'Content-Type': 'multipart/form-data',
            
          });
          navigate('/');
        } catch (error) {
          console.error('Error posting data:', error);
        }
      };
  

  return (
   
     <div>
         <section>
    <div class="container mt-4">
        <div class="row">
            <div class="col-md-6">
                <h2 class="text-center">Create Your Profile</h2>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="">Image 1 </label>&emsp;
                    <img alt=" " width="150px" height="150px" src={image1 ? URL.createObjectURL(image1) : ''}></img><br/>
                    <input type="file" 
                    onChange={(e)=>{setImage1(e.target.files[0]) }}
                    class="form-control" 
                    name="image1"/><br/>

                    <label htmlFor="">Image 2 </label>&emsp;
                    <img alt=" " width="150px" height="150px" src={image2 ? URL.createObjectURL(image2) : ''}></img><br/>
                    <input type="file" 
                    onChange={(e)=>{setImage2(e.target.files[0]) }}
                    class="form-control" 
                    name="image2"/><br/>

                    <label htmlFor="">Image 3 </label>&emsp;
                    <img alt=" " width="150px" height="150px" src={image3 ? URL.createObjectURL(image3) : ''}></img><br/>
                    <input type="file" 
                    onChange={(e)=>{setImage3(e.target.files[0]) }}
                    class="form-control" 
                    name="image3"/><br/>

                    <label htmlFor="">Name</label>
                    <input type="text" 
                    name="Name" 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    class="form-control"/>

                    <label htmlFor="">Age</label>
                    <input type="number" 
                    name="age" 
                    value={age}
                    onChange={(e)=>setAge(e.target.value)}
                    class="form-control"/>

                    <label htmlFor="">Gender</label>
                    <select type="text" 
                    name="gender" 
                    value={gender}
                    onChange={(e)=>setGender(e.target.value)}
                    class="form-control">
                        <option value="" className='empty' >Choose...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                     <label htmlFor="">Date Of Birth</label>
                    <input type="date" 
                    name="DOB" 
                    value={dob}
                    onChange={(e)=>setDob(e.target.value)}
                    class="form-control"/>

                     <label htmlFor="">Height</label>
                    <input type="number" 
                    step="any" 
                    name="height" 
                    value={height}
                    onChange={(e)=>setHeight(e.target.value)}
                    class="form-control"/>

                     <label htmlFor="">Weight</label>
                    <input type="number" 
                    name="weight" 
                    value={weight}
                    onChange={(e)=>setWeight(e.target.value)}
                    class="form-control"/>

                     <label htmlFor="">Complexion</label>
                    <select type="text" 
                    name="complexion" 
                    value={complexion}
                    onChange={(e)=>setComplexion(e.target.value)}
                    class="form-control">
                        <option className='empty' value="">Choose...</option>
                        <option value="Very Fair">Very Fair</option>
                        <option value="Fair">Fair</option>
                        <option value="Medium">Medium</option>
                        <option value="Wheatish">Wheatish</option>
                        <option value="Dark">Dark</option>
                    </select>

                    <label htmlFor="">Physical Status</label>
                    <select type="text" 
                    name="physical" 
                    value={physical}
                    onChange={(e)=>setPhysical(e.target.value)}
                    class="form-control">
                        <option className='empty' value="">Choose...</option>
                        <option value="Normal">Normal</option>
                        <option value="Disabled">Disabled</option>
                    </select>

                    <label htmlFor="">Mother Tongue</label>
                    <select type="text" 
                    name="language" 
                    value={motherTongue}
                    onChange={(e)=>setMotherTongue(e.target.value)}
                    class="form-control">
                        <option className='empty' value="">Choose...</option>
                        <option value="Malayalam">Malayalam</option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Tamil">Tamil</option>
                        <option value="Kannada">Kannada</option>
                        <option value="Telugu">Telugu</option>
                    </select>

                    <label htmlFor="">Location</label>
                    <select type="text" 
                    name="location" 
                    value={location}
                    onChange={(e)=>setLocation(e.target.value)}
                    class="form-control">
                        <option className='empty' value="">choose...</option>
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

                    <label htmlFor="">Marital Status</label>
                    <select type="text" 
                    name="marital" 
                    value={marital}
                    onChange={(e)=>setMarital(e.target.value)}
                    class="form-control">
                        <option className='empty' value="">Choose...</option>
                        <option value="Unmarried">Unmarried</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widow">Widow</option>  
                    </select>


                    <label htmlFor="">Diet</label>
                    <select type="text" 
                    name="diet" 
                    value={diet}
                    onChange={(e)=>setDiet(e.target.value)}
                    class="form-control">
                        <option className='empty' value="">Choose...</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Non-Vegetarian">Non-Vegetarian</option>
                        <option value="Eggetarian">Eggetarian</option>
                        <option value="Vegan">Vegan</option>
                    </select>

                    <label htmlFor="">Religion</label>
                    <select type="text" 
                    name="religion" 
                    value={religion}
                    onChange={(e)=>setReligion(e.target.value)}
                    class="form-control">
                        <option className='empty' value="">Choose...</option>
                        <option value="Christian">Christian</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Muslim">Muslim</option>
                        <option value="Atheist">Atheist</option>
                        <option value="Other">Other</option>
                    </select>

                    <label htmlFor="">Caste</label>
                    <select type="text" 
                    name="caste" 
                    value={caste}
                    onChange={(e)=>setCaste(e.target.value)}
                    class="form-control">
                        <option className='empty' value="">Choose...</option>
                        <option value="Jacobite">Jacobite</option>
                        <option value="Orthodox">Orthodox</option>
                        <option value="CSI">CSI</option>
                        <option value="Catholic">Catholic</option>
                        <option value="Nair">Nair</option>
                        <option value="Menon">Menon</option>
                        <option value="Ezhava">Ezhava</option>
                        <option value="Brahmin">Brahmin</option> 
                        <option value="Nil">Nil</option>     
                    </select>


                    <label htmlFor="">Education</label>
                    <select type="text" 
                    name="Education" 
                    value={education}
                    onChange={(e)=>setEducation(e.target.value)}
                    class="form-control">
                        <option className='empty' value="">Choose...</option>
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

                    <label htmlFor="">Job</label>
                    <select type="text" 
                    name="job" 
                    value={job}
                    onChange={(e)=>setJob(e.target.value)}
                    class="form-control">
                        <option className='empty' value="">Choose...</option>
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

                    <label htmlFor="">Mobile Number</label>
                    <input type="number" 
                    name="mobile" 
                    value={mobile}
                    onChange={(e)=>setMobile(e.target.value)}
                    class="form-control"/>

                    <label htmlFor="">Email</label>
                    <input type="email" 
                    name="email" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    class="form-control"/>
                    {emailError && <div className="text-danger">{emailError}</div>}
                    <br/><br/>

                    <h2 class="text-center">Partner Preference</h2>
                    <br/>

                   
                    <label htmlFor="">Age</label>
                     <div class="row">
                     <div class="col">
                    <input type="number" 
                    value={p_age_min}
                    onChange={(e)=>setP_age_min(e.target.value)}
                    class="form-control" placeholder="Minimum Age" name="ffage1"/>
                    </div>
                    <div class="col">
                    <input type="number" 
                    class="form-control" 
                    value={p_age_max}
                    onChange={(e)=>setP_age_max(e.target.value)}
                    placeholder="Maximum Age" name="ffage2"/>
                    </div>
                    </div>
                    <br/>
                    

                    <label htmlFor="">Height</label>
                    <div class="row">
                    <div class="col">
                    <input type="number" 
                    class="form-control" 
                    value={p_height_min}
                    onChange={(e)=>setP_height_min(e.target.value)}
                    placeholder="Minimum Height" step="any" name="ffheight1"/>
                    </div>
                    <div class="col">
                    <input type="number" 
                    class="form-control" 
                    value={p_height_max}
                    onChange={(e)=>setP_height_max(e.target.value)}
                    placeholder="Maximum Height" step="any" name="ffheight2"/>
                    </div>
                    </div>
                    <br/>

                    <label htmlFor="">Religion</label>
                    <select type="text" 
                    name="ffreligion" 
                    value={p_religion}
                    onChange={(e)=>setP_religion(e.target.value)}
                    class="form-control">
                        <option className='empty' value="">Choose...</option>
                        <option value="Any">Any</option>
                        <option value="Christian">Christian</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Muslim">Muslim</option>
                        <option value="Atheist">Atheist</option>
                        <option value="Other">Other</option>
                    </select>

                     <label htmlFor="">Caste</label>
                    <select type="text" 
                    name="ffcaste" 
                    value={p_caste}
                    onChange={(e)=>setP_caste(e.target.value)}
                    class="form-control">
                        <option className='empty' value="">Choose...</option>
                        <option value="Any">Any</option>
                        <option value="Jacobite">Jacobite</option>
                        <option value="Orthodox">Orthodox</option>
                        <option value="CSI">CSI</option>
                        <option value="Catholic">Catholic</option>
                        <option value="Nair">Nair</option>
                        <option value="Menon">Menon</option>
                        <option value="Ezhava">Ezhava</option>
                        <option value="Brahmin">Brahmin</option>      
                    </select>

                    <label htmlFor="">Complexion</label>
                    <select type="text" 
                    name="ffcomplexion" 
                    value={p_complexion}
                    onChange={(e)=>setP_complexion(e.target.value)}
                    class="form-control">
                        <option className='empty' value="">Choose...</option>
                        <option value="Any">Any</option>
                        <option value="Very Fair">Very Fair</option>
                        <option value="Fair">Fair</option>
                        <option value="Medium">Medium</option>
                        <option value="Wheatish">Wheatish</option>
                        <option value="Dark">Dark</option>
                    </select>

                    <label htmlFor="">Mother Tongue</label>
                    <select type="text" 
                    name="fflanguage" 
                    value={p_motherTongue}
                    onChange={(e)=>setP_motherTongue(e.target.value)}
                    class="form-control">
                        <option className='empty' value="">Choose...</option>
                        <option value="Any">Any</option>
                        <option value="Malayalam">Malayalam</option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Tamil">Tamil</option>
                        <option value="Kannada">Kannada</option>
                        <option value="Telugu">Telugu</option>
                    </select>

                    <label htmlFor="">Diet</label>
                    <select type="text" 
                    name="ffdiet" 
                    value={p_diet}
                    onChange={(e)=>setP_diet(e.target.value)}
                    class="form-control">
                        <option className='empty' value="">Choose...</option>
                        <option value="Any">Any</option>
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="Non-Vegetarian">Non-Vegetarian</option>
                        <option value="Eggetarian">Eggetarian</option>
                        <option value="Vegan">Vegan</option>
                    </select>

                    <label htmlFor="">Education</label>
                    <select type="text" 
                    name="ffEducation" 
                    value={p_education}
                    onChange={(e)=>setP_education(e.target.value)}
                    class="form-control">
                        <option className='empty' value="">Choose...</option>
                        <option value="Any">Any</option>
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

                     <label htmlFor="">Job</label>
                    <select type="text" 
                    name="ffjob" 
                    value={p_job}
                    onChange={(e)=>setP_job(e.target.value)}
                    class="form-control">
                    <option className='empty' value="">Choose...</option>
                        <option value="Any">Any</option>
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

                    <label htmlFor="">Location</label>
                    <select type="text" 
                    name="fflocation" 
                    value={p_location}
                    onChange={(e)=>setP_location(e.target.value)}
                    class="form-control">
                        <option className='empty' value="">Choose...</option>
                        <option value="Any">Any</option>
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

                    <label htmlFor="">Marital Status</label>
                    <select type="text" 
                    name="ffmarital" 
                    value={p_marital}
                    onChange={(e)=>setP_marital(e.target.value)}
                    class="form-control">
                        <option className='empty' value="">Choose...</option>
                        <option value="Any">Any</option>
                        <option value="Unmarried">Unmarried</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Seperated">Seperated</option>
                        <option value="Widow">Widow</option>  
                    </select>

                    <label htmlFor="">Physical Status</label>
                    <select type="text" 
                    name="ffphysical" 
                    value={p_physical}
                    onChange={(e)=>setP_physical(e.target.value)}
                    class="form-control">
                        <option className='empty' value="">Choose...</option>
                        <option value="Any">Any</option>
                        <option value="Normal">Normal</option>
                        <option value="Disabled">Disabled</option>  
                    </select>
                    
                    <button class="btn btn-success mt-4">Submit</button>
                    <br/><br/><br/><br/>

                </form>
            </div>
        </div>
    </div>
</section>
     </div>
   
  );
}



