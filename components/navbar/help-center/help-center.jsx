import React from 'react';
import Link from 'next/link';
//INTERNAL IMPORTS
import Style from './help-center.module.css';
const HelpCenter = () => {

  const helpCenter =[
    {
      name:"About",
      link:"about",
    },
    {
      name:"Contact Us",
      link:"Contact-us",
    },
    {
      name:"Sign Up",
      link:"sign-up",
    },
    {
      name:"Sign In",
      link:"sign-in",
    },
    {
      name:"Subscriptio",
      link:"subscription",
    },
  ]


  return (
    <div className={Style.box}>
      {discover.map((el,i)=>(
        <div key={i+1} className={Style.helpCenter}>
        <Link href={{pathname:`${el.link}`}}>{el.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default HelpCenter