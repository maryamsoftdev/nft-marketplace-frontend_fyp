import React from 'react'
import Image from 'next/image';

// INTERNAL IMPORT 
import Style from "./service.module.css";
import Images from "../../img";
import img from '../../img';

const service = () =>{
    return(
        <div className={Style.service}>
            <div className={Style.service_box}>
                <div className={Style.service_box_item}>
                    <image src={images.service-1} alt="Filter & Discover" width={100} height={100}/>
                    <p className={Style.service_box_item_step}>
                        <span>Step 1</span>
                    </p>
                    <h3>Filter & Discover</h3>
                    <p>connect with wallet,discover,buy NFTs,sell your NFT and earn money</p>
                </div>
                <div className={Style.service_box_item}>
                    <image src={images.service-2} alt="Filter & Discover" width={100} height={100}/>
                    <p className={Style.service_box_item_step}>
                        <span>Step 1</span>
                    </p>
                    <h3>Filter & Discover</h3>
                    <p>connect with wallet,discover,buy NFTs,sell your NFT and earn money</p>
                </div>
                <div className={Style.service_box_item}>
                    <image src={images.service-3} alt="Filter & Discover" width={100} height={100}/>
                    <p className={Style.service_box_item_step}>
                        <span>Step 1</span>
                    </p>
                    <h3>Coneect Wallet</h3>
                    <p>connect with wallet,discover,buy NFTs,sell your NFT and earn money</p>
                </div>
                <div className={Style.service_box_item}>
                    <image src={images.service-4} alt="Filter & Discover" width={100} height={100}/>
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

export default service