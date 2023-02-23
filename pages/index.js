import React from 'react'
// import {Navbar} from '../components/component-index';
import{Navbar} from '../components/component-index';
//INTERNAL IMPORTS
import Style from "../styles/index.module.css"
import {HeroSection} from "../components/component-index"
const Home = () => {
  return (
    <div className={Style.homePage}>
    <HeroSection />
    </div>
  
  )
}

export default Home;
