import React from 'react'
import { Display2 } from './display'
import { Header1, Header2 } from './Header'
import Footer from './footer'
import ControlledCarousel from './crousel'
import './project.css'

const Holder = () => {
  return (
    <div>
      <Header1 />
      <ControlledCarousel />
      <Display2 />
      <Header2 />
      <Footer />
    </div>
  )
}

export default Holder;
