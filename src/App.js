
import React from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeContent from './components/Homepage';
import Login from './components/Login';
import Signup from './components/signup';
import InnerHome from './components/Innerhome';
import DonationForm from './components/DonationForm';
import DistributionRequestForm from './components/DistributionRequestForm';

function App() {
  return (
    <>    
    <Router>
      <Routes>
        <Route path="/" element={<HomeContent/>}/>
        <Route path='/home' element={<HomeContent/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/innerhome' element={<InnerHome/>}/>
        <Route path='/donation' element={<DonationForm/>}/>
        <Route path='distribution' element={<DistributionRequestForm/>}/>
      </Routes>
    </Router>
    </>

  );
}

export default App;
