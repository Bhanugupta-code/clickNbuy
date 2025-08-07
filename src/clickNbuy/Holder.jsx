import React from 'react'
import { Display2 } from './display'
import { Header1, Header2 } from './Header'
import Footer from './footer'
import ControlledCarousel from './crousel'
import './project.css'

const Holder = ({ setproductDetailData}) => {
  return (
    <div>
      <Header1 login="Login_Logout.jsx" />
      <ControlledCarousel />
      <Display2 />
      <Header2  setproductDetailData={setproductDetailData}  />
      <Footer />
    </div>
  )
}

export default Holder;
