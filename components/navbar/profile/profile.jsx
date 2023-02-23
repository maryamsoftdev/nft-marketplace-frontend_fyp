import React from 'react'

// import Image from 'next/image';
// import {FaUserAlt, FaRegImage, FaUserEdit} from 'react-icons/fa';
// import {mdHelpCenter} from 'react-icon/md';
// import {TbDownloadOff, TbDownload} from 'react-icons/tb';
// import Link from 'next/link';


//INTERNAL IMPORTS
import Style from './profile.module.css';
import images from '../../../images';

const Profile = () => {
  return (
    <div className={Style.profile}>
      <div className={Style.profile_account}>
        <Image src={images.user1} alt="User Profile" width={50} height={50} className={Style.profile_account_img}/>

      </div>
    </div>
  )
}

export default Profile