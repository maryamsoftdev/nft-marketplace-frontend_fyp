import React,  {useState,useEffect,useCallback, useId} from "react";
import Image from 'next/image';
import {AiFillFire ,AiFillHeart , AiOutlineHeight} from 'react-icons/ai';
import {MdVerified , MdTimer} from 'react-icons/md';
import {TbArrowBigLeftLines , TbArrowBigRightLine, TbArrowBigRightLines} from 'react-icons/tb'
// INTERNAL IMPORT
import Style from "./BigNFTSlider.module.css"; 
import Images from '../../img';
import Button from "../../Button/Button";
const BigNFTSlider = () =>{
    const [first ,setfirst] = useState(1);
    const SliderData = [
        {
            title: "Hello NFT",
            id: 1,
            name: "Alishba Abbas",
            collection:"GYM",
            price: "00006463",
            likes: 213,
            Image: Images.user1,
            nftImage: Images.nft_image_1,
            time:{
                days: 17,
                hours: 9,
                minutes:15,
                seconds:20,
            },
        },

            {
                title: "heye NFT",
                id: 2,
                name: "Nabeelah Maryam",
                collection:"Home",
                price: "000034456",
                likes: 243,
                Image: Images.user2,
                nftImage: Images.nft_image_2,
                time:{
                    days: 12,
                    hours: 21,
                    minutes:34,
                    seconds:56,
                },
        },
        
        {
            title: "Hey NFT",
            id: 3,
            name: "Sundas Niazi",
            collection:"Play Ground",
            price: "0000123",
            likes: 243,
            Image: Images.user3,
            nftImage: Images.nft_image_3,
            time:{
                days: 20,
                hours: 18,
                minutes:25,
                seconds:24,
            },
        },  
        
        {
            title: "Hello NFT",
            id: 4,
            name: "Hira ",
            collection:"Paris",
            price: "00054653",
            likes: 144,
            Image: Images.user4,
            nftImage: Images.nft_image_1,
            time:{
                days: 30,
                hours: 13,
                minutes:45,
                seconds:44,
            },
        } 
    ];

    //-------INC
    const inc = useCallback(()=>{
        if(idNumber+1 < SliderData.length){
            // setIdNumber(setIdNumber+1);
            setIdNumber(idNumber + 1);
        }
    } ,[idNumber,SliderData.length]);

     //-------DEC
     const dec = useCallback(()=>{
        if(idNumber >0){
            // setIdNumber(setIdNumber - 1);
            setIdNumber(idNumber - 1);
        }
    } ,[idNumber]);

    // useEffect(()=>{
    //     inc()
    // },[]);
    
    return(
        <div className={Style.BigNFTSlider}>
            <div className={Style.BigNFTSlider_box}>
                <div className={Style.BigNFTSlider_box_left}>
                    <h2>{SliderData[idNumber].title}</h2>
                    <div className={BigNFTSlider_box_left_creator}>
                        <div className={BigNFTSlider_box_left_creator_profile}>
                            <image
                            className={BigNFTSlider_box_left_creator_profile_img} src={SliderData[idNumber].Image} 
                            alt="profile image" width={50} height={50}/>
                            <div className={Style.BigNFTSlider_box_left_creator_profile_img}>
                            <p>Creator</p>
                            <h4>{SliderData[idNumber].name}<span><MdVerified/></span></h4>
                          </div>
                        </div>
                        <div className={Style.BigNFTSlider_box_left_creator_collection}>
                            <AiFillFire className={Style.BigNFTSlider_box_left_creator_collection_icon}/>
                            <div className={Style.BigNFTSlider_box_left_creator_collection_icon_info}>
                                <p>Collection</p>
                                <h4>{SliderData[idNumber].collection}</h4>
                            </div>
                        </div> 
                    </div>

                    <div className={Style.BigNFTSlider_box_left_bidding}>
                        <div className={Style.BigNFTSlider_box_left_bidding_box}>
                            <small>Current Bid</small>
                            <p>{SliderData[idNumber].price}<span>$,223,45</span></p>
                        </div>
                        <p className={Style.BigNFTSlider_box_left_bidding_box_auction}>
                            <MdTimer className={Style.BigNFTSlider_box_left_bidding_box_auction}/>
                            <span>Auction Ending In</span>
                        </p>
                        <div className={BigNFTSlider_box_left_bidding_box_timer}>
                            <div className={BigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>{SliderData[idNumber].time.days}</p>
                                <span>Days</span>
                            </div>

                            <div className={BigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>{SliderData[idNumber].time.hours}</p>
                                <span>Hours</span>
                            </div>

                            <div className={BigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>{SliderData[idNumber].time.minutes}</p>
                                <span>Minutes</span>
                            </div>

                            <div className={BigNFTSlider_box_left_bidding_box_timer_item}>
                                <p>{SliderData[idNumber].time.seconds}</p>
                                <span>Seconds</span>
                            </div>

                        </div>
                        <div className={Style.BigNFTSlider_box_left_button}>
                            <button btnName="Place" handleClick={()=>{}}/>
                            <button btnName="View" handleClick={()=>{}}/>
                        </div>

                    </div>

                    <div className={Style.BigNFTSlider_box_left_sliderbtn}>
                        <TbArrowBigLeftLines
                         className={Style.BigNFTSlider_box_left_sliderbtn_icon}
                        onClick={()=>dec()}/>

                        <TbArrowBigRightLine className={Style.BigNFTSlider_box_left_sliderbtn_icon}
                        onClick={()=>Inc()}/>
                        
                    </div>
                </div>

                <div className={Style.BigNFTSlider_box_right}>
                    <div className={Style.BigNFTSlider_box_right_box}>
                        <image src={SliderData[idNumber].nftImage} alt="NFT IMAGE"
                        className={Style.BigNFTSlider_box_right_boc_img}/>
                        <div className={Style.BigNFTSlider_box_right_box_like}>
                            <AiFillHeart/>
                            <span>{SliderData[idNumber].like}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default BigNFTSlider;
