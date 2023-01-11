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
    <div>navbar</div>
  )
}

export default navbar