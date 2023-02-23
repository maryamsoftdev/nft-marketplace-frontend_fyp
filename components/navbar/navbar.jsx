import React, {useState, useEffect} from 'react';
import Style from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {MdNotifications} from "react-icons/md";
import {BsSearch} from "react-icons/bs";
import {CgMenuLeft, CgMenuRight} from "react-icons/cg";

// import {Discover,HelpCenter,Notification,Profile,SideBar} from "./index"
// import {Button} from '../component-index';
import Button from '../button/button'
import images from '../../images';
import Discover from './discover/discover';
import Profile from './profile/profile';
import SideBar from './side-bar/side-bar';
import Notification from './notification/notification';


const Navbar = () => {
    //use state components
    const [discover, setDiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [notification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    const [openSideMenu, setOpenSideMenu] = useState(false);

    const openMenu = (e)=>{
        const btnTxt = e.target.innerText;
        if (btnTxt == "Discover"){
            setDiscover(true);
            setHelp(false);
            setNotification(False);
            setProfile(false);
        }
        else if(btnTxt=="help Center"){
            setDiscover(false);
            setHelp(true);
            setNotification(false);
            setProfile(false);

        }
        else{
            setDiscover(false);
            setHelp(false);
            setNotification(false);
            setProfile(false);

        }
    };

    const openNotification =()=>{
        if(!notification){
            setNotification(true);
            setDiscover(false);
            setHelp(false);
            setProfile(false);
        }else {
            setNotification(false);
            
        }
    };
    const openProfile =()=>{
        if(!profile){
            setProfile(true)
            setNotification(false);
            setDiscover(false);
            setHelp(false);
        }else{
            setProfile(false);
        }
    };
    const openSideBar =()=>{
        if(!openSideMenu){
        setOpenSideMenu(true);
        } else{
            setOpenSideMenu(false);
        }
    };

  return (
   <div className={Style.navbar}>
    <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
            <div className={Style.logo}>
                <img src={images.logo} alt="NFT MARKETPLACE" width={100} height={100}/>
            </div>
            <div className={Style.navbar_container_left_box_input}>
                <div className={Style.navbar_container_left_box_input_box}>
                    <input type="text" placeholder='Search NFT'/>
                    <BsSearch onClick={()=>{}} className={Style.search_icon}/>
                </div>
            </div>
        </div>
        {/* //END OF LEFT SECTIO OF NAVIGATION BAR */}
        <div className={Style.navbar_container_right}>
            <div className={Style.navbar_container_right_discover}>
               {/* //DISCOVER MENU */}
                {/* <p onClick={(e)=>openMenu(e)}>Discover</p> */}
                { discover &&(
                      <div className={Style.navbar_container_right_discover_box}>
                      <Discover/>
                  </div>
                )}
              
            </div>
            {/* //HelpCenter */}
            <div className={Style.navbar_container_right_help}>
            {/* <p onClick={(e)=>openMenu(e)}>Help Center</p>  */}
            { discover &&(
                      <div className={Style.navbar_container_right_help_box}>
                      <HelpCenter/>
                  </div>
                )}
            </div>
            {/* //Notification */}
            <div className={Style.navbar_container_right_notify}>
            <MdNotifications className ={Style.notify} 
            onClick={()=> openNotification}/>
            {notification && <Notification/>}
            </div>
            {/* //create button section */}
            <div className ={Style.navbar_container_right_button}>
            <Button btnTxt="Create"/>
            </div>

            {/* //user profile */}
            <div className={Style.navbar_container_right_profile_box}>
                <div className={Style.navbar_container_right_profile}>
                    <image src={images.user1} alt = "profile" width={40} height={40} onClick={()=>openProfile()}
                    className={Style.navbar_container_right_profile}/>
                    {profile && <Profile/>}
                </div>
            </div>
            {/* menu button */}
            <div className={Style.navbar_container_right_menuBtn}>
                <CgMenuRight className={Style.menuIcon}
                onClick={()=>openSideBar()}
                />
            </div>
        </div>
    </div>
    {/* SideBar componenet */}
    {
        openSideMenu && (
            <div className={Style.SideBar}>
                <SideBar setOpenSideMenu={setOpenSideMenu}/>
            </div>
        )
    }

   </div>
  )
}

export default Navbar