import React from 'react'
// import {Navbar} from '../components/component-index';
import{Navbar} from '../components/component-index';
//INTERNAL IMPORTS
import Style from "../styles/index.module.css"
import {HeroSection, Service ,BigNFTSlider,Subscribe,Title,Category,Filter,NFTCard} from "../components/component-index"
// import Service from '../components/service/service';
const Home = () => {
  return (
    <div className={Style.homePage}>
    <HeroSection />
    <Service/>
    <BigNFTSlider/>
    <Filter/>
    <NFTCard/>
    <Title heading="Browse By Categories"
    paragraph="Explore The NFTs in Most Featured Categories"
    />
    <Category/>
    <Subscribe/>
    </div>
  
  )
}

export default Home;