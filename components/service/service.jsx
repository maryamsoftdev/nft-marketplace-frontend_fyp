import React from 'react'
// import Image from 'next/image';
import Image from 'next/image';

// INTERNAL IMPORT 
import Style from "./service.module.css";
import images from "../../img";


const Service = () =>{
    return(
        <div className={Style.service}>
            <div className={Style.service_box}>
                <div className={Style.service_box_item}>
                    {/* <image src={images.hero} alt="Filter & Discover" width={100} height={100}/> */}
                    <Image src={images.service1} alt="Filter & Discover" width={100} height={100}/>
                    <p className={Style.service_box_item_step}>
                        <span>Step 1</span>
                    </p>
                    <h3>Filter & Discover</h3>
                    <p>connect with wallet,discover,buy NFTs,sell your NFT and earn money</p>
                </div>
                <div className={Style.service_box_item}>
                    {/* <image src={images.hero} alt="Filter & Discover" width={100} height={100}/> */}
                    <Image
            src={images.service2} alt="Filter & Discover" width={100} height={100}/>
                    <p className={Style.service_box_item_step}>
                        <span>Step 1</span>
                    </p>
                    <h3>Filter & Discover</h3>
                    <p>connect with wallet,discover,buy NFTs,sell your NFT and earn money</p>
                </div>
                <div className={Style.service_box_item}>
                    {/* <image src={images.hero} alt="Filter & Discover" width={100} height={100}/> */}
                    <Image
            src={images.service3}alt="Connect Wallet" width={100} height={100}/>
                    <p className={Style.service_box_item_step}>
                        <span>Step 1</span>
                    </p>
                    <h3>Coneect Wallet</h3>
                    <p>connect with wallet,discover,buy NFTs,sell your NFT and earn money</p>
                </div>
                <div className={Style.service_box_item}>
                    {/* <image src={images.hero} alt="Filter & Discover" width={100} height={100}/> */}
                    <Image src={images.service1} alt="Filter & Discover" width={100} height={100}/>
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

export default Service;