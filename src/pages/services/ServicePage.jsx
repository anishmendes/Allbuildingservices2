import React from 'react'
import Servicehero from '../../components/Services/Servicehero'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Compare from '../../components/Services/Compare';
import Acc from '../../components/Services/Acc';

const ServicePage = () => {
  return (
    <div>
   <Navbar/>
      <Servicehero/>
      <Compare/>
      <Acc/>
      <Footer/>
    </div>
  )
}

export default ServicePage
