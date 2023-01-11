import React, {useState, useEffect} from 'react';
import Style from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {MdNotifications} from "react-icons/md";
import {BsSearch} from "react-icons/bs";
import {CgMenuLeft, CgMenuRight} from "react-icons/cg";

import {discover,helpCenter,notification,profile,sideBar} from "./index"
import {button} from '../component-index';
import images from '../../images';



const navbar = () => {
    const [discover, setDiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [notification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
   <div className='Style.navbar'>
    <div className='Style.navbar_container'>
        <div className='Style.navbar_container_left'>
            <div className='Style.logo'>
                <img src={images.logo} alt="NFT MARKETPLACE" width={100} height={100}/>
            </div>
            <div className='Style.navbar_container_left_box_input'>
                <div className='Style.navbar_container_left_box_input_box'>
                    <input type="text" placeholder='Search NFT'/>
                    <BsSearch onClick={()=>{}} className='Style.search_icon'/>
                </div>
            </div>
        </div>
        //END OF LEFT SECTIO OF NAVIGATION BAR
        <div className='Style.navbar_container_right'></div>
    </div>
   </div>
  )
}

export default navbar