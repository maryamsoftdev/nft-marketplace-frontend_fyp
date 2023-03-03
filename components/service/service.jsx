import React from 'react'
<<<<<<< HEAD
=======
// import Image from 'next/image';
>>>>>>> 8017401bee1b3de7d52667e207323ff75cf8d112
import Image from 'next/image';

// INTERNAL IMPORT 
import Style from "./service.module.css";
<<<<<<< HEAD
import Images from "../../img";
import img from '../../img';

const service = () =>{
=======
import images from "../../img";


const Service = () =>{
>>>>>>> 8017401bee1b3de7d52667e207323ff75cf8d112
    return(
        <div className={Style.service}>
            <div className={Style.service_box}>
                <div className={Style.service_box_item}>
<<<<<<< HEAD
                    <image src={images.service-1} alt="Filter & Discover" width={100} height={100}/>
=======
                    {/* <image src={images.hero} alt="Filter & Discover" width={100} height={100}/> */}
                    <Image src={images.service1} alt="Filter & Discover" width={100} height={100}/>
>>>>>>> 8017401bee1b3de7d52667e207323ff75cf8d112
                    <p className={Style.service_box_item_step}>
                        <span>Step 1</span>
                    </p>
                    <h3>Filter & Discover</h3>
                    <p>connect with wallet,discover,buy NFTs,sell your NFT and earn money</p>
                </div>
                <div className={Style.service_box_item}>
<<<<<<< HEAD
                    <image src={images.service-2} alt="Filter & Discover" width={100} height={100}/>
=======
                    {/* <image src={images.hero} alt="Filter & Discover" width={100} height={100}/> */}
                    <Image
            src={images.service2} alt="Filter & Discover" width={100} height={100}/>
>>>>>>> 8017401bee1b3de7d52667e207323ff75cf8d112
                    <p className={Style.service_box_item_step}>
                        <span>Step 1</span>
                    </p>
                    <h3>Filter & Discover</h3>
                    <p>connect with wallet,discover,buy NFTs,sell your NFT and earn money</p>
                </div>
                <div className={Style.service_box_item}>
<<<<<<< HEAD
                    <image src={images.service-3} alt="Filter & Discover" width={100} height={100}/>
=======
                    {/* <image src={images.hero} alt="Filter & Discover" width={100} height={100}/> */}
                    <Image
            src={images.service3}alt="Connect Wallet" width={100} height={100}/>
>>>>>>> 8017401bee1b3de7d52667e207323ff75cf8d112
                    <p className={Style.service_box_item_step}>
                        <span>Step 1</span>
                    </p>
                    <h3>Coneect Wallet</h3>
                    <p>connect with wallet,discover,buy NFTs,sell your NFT and earn money</p>
                </div>
                <div className={Style.service_box_item}>
<<<<<<< HEAD
                    <image src={images.service-4} alt="Filter & Discover" width={100} height={100}/>
=======
                    {/* <image src={images.hero} alt="Filter & Discover" width={100} height={100}/> */}
                    <Image src={images.service1} alt="Filter & Discover" width={100} height={100}/>
>>>>>>> 8017401bee1b3de7d52667e207323ff75cf8d112
                    <p className={Style.service_box_item_step}>
                        <span>Step 1</span>
                    </p>
                    <h3>Start Traiding</h3>
                    <p>connect with wallet,discover,buy NFTs,sell your NFT and earn money</p>
                </div>
            </div>
        </div>

    )
}

<<<<<<< HEAD
export default service
=======
export default Service;
>>>>>>> 8017401bee1b3de7d52667e207323ff75cf8d112
