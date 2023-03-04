import React from 'react'
// import {Navbar} from '../components/component-index';
import{Navbar} from '../components/component-index';
//INTERNAL IMPORTS
import Style from "../styles/index.module.css"
import {HeroSection, Service ,BigNFTSlider} from "../components/component-index"
// import Service from '../components/service/service';
const Home = () => {
  return (
    <div className={Style.homePage}>
    <HeroSection />
    <Service/>
    <BigNFTSlider/>
    </div>
  
  )
}

export default Home;