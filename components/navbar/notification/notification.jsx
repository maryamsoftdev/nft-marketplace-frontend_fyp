import React from 'react'
import Image from 'next/image'


//INTERNAL IMPORTS
import Style from "./notification.module.css";
import images from "../../../images";
const Notification = () => {
  return (
    <div className={Style.notification}>
      {/* <p>Notification</p> */}
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image src={images.user1} alt="profile image" width={50} height={50} className={Style.notification_box_img}/>
        </div>
      <div className={Style.notification_box_info}>
     <h2>Nabeelah Maryam</h2>
     {/* <p>this is the notification msg</p> */}
     {/* <small>4 minutes ago</small> */}
      </div>
      <span className={Style.notification_box_new}></span>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Notification
