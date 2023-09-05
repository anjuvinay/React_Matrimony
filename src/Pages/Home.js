import React from 'react';
import Profiles from '../Components/Profiles/Profiles'
import Header from '../Components/Header/Header';


function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Profiles/>
     
      
     
    </div>
  );
}

export default Home;