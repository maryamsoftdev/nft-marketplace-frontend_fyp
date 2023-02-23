import React from 'react'
import Link from 'next/link';

//INTERNAL IMPORTS
import Style from './discover.module.css';
const Discover = () => {

const discover =[
  { name: "collection",
   link: "collection"
 },
  { name: "search",
   link: "search"
 },
  
  { name: "author profile",
   link: "author_profile"
 },
  { name: "NFT Detail",
   link: "NFT-detail"
 },
  { name: "account setting",
   link: "account_setting"
 },
  { name: "Connect Wallet",
   link: "connect_wallet"
 },
  { name: "Blog",
   link: "Blog"
 },
  
]

  return (
    <div>
      {discover.map((el,i)=>(
        <div key={i+1} className={Style.discover}>
        <Link href={{pathname:`${el.link}`}}>{el.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default Discover