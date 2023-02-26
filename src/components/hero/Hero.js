import React from "react";
import BrandList from "./BrandList";
import NewArrivals from "./NewArrivals";
import SaleNow from "./SaleNow";
import Yungsfavourate from "./Yungsfavourate";
import MobileApp from "./MobileApp";
import JoinCommunity from "./JoinCommunity";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <>
      <div className=" px-[20px] xl:px-[100px] lg:px-[75px] md:px-[50px] pt-10">
      
        <div className=" rounded-4xl bg-[#F4F6F5] items-center   px-[20px] pt-[70px]    md:pl-[96px] md:pt-[100px]    justify-between      flex flex-col lg:flex-row">
        
        
          <div className="w-fit text-clip">


          <h1 
            className="bg-no-repeat  w-[80%]  md:w-[90%] lg:w-[95%] xl:w-[100%]  bg-white  text-[36px]	 md:text-[68px]  lg:text-[78px] xl:text-[88px] 2xl:text-[96px]	 font-[900]  leading-[80px] md:leading-[90px] lg:leading-[120px]  pl-[30px] md:pl-[37px] "
            >
              LETS'
            </h1>
          

   
             <h1 className=" font-[900]  leading-[80px] md:leading-[90px] lg:leading-[120px] pl-[37px]  text-[36px]	 md:text-[60px]  lg:text-[70px] xl:text-[80px] 2xl:text-[96px]	 	">
              EXPLORE
            </h1> 

        <h1 
            className="bg-no-repeat  w-[80%]  md:w-[90%] lg:w-[95%] xl:w-[100%]  bg-yellow  text-[36px]	 md:text-[68px]  lg:text-[78px] xl:text-[88px] 2xl:text-[96px]	 font-[900]  leading-[80px] md:leading-[90px] lg:leading-[120px]  pl-[30px] md:pl-[37px] "
            >
              UNIQUE
            </h1>

    <h1 
            className=" text-[36px]	 md:text-[60px]  lg:text-[70px] xl:text-[80px] 2xl:text-[96px]	pl-[37px]	 font-[900]  leading-[80px] md:leading-[90px] lg:leading-[120px] "
            >
              CLOTHES.
            </h1>



<div className=" h-[90px]  md:h-[120px] lg:h-[192px] " >

<TypeAnimation
     sequence={["Live for influential and innovative fashion!", 5000, '']}
                   //  Continuing previous Text
                   className="font-semibold pl-[37px]   text-[20px] md:text-[32px]  py-6 md:py-10  "
    wrapper="p"
    repeat={Infinity} 
    cursor={false}
  />
  
</div>



            {/* <p className="font-semibold pl-[37px]  text-[20px] md:text-[32px]  py-6 md:py-10  ">
              Live for influential and innovative fashion!
            </p> */}

            <div className="flex flex-col   gap-[10px] md:gap-[30px] md:flex-row">
              <div className="items-center hidden mb-6 md:mb-10 md:flex">
                <img
                  className="pt-1 md:pt-5"
                  src="/assets/images/poster-inside-img.png"
                />
              </div>
              <div className="mb-6 pl-[37px] md:mb-10">
                <button className="px-[16.75px] md:px-[26.75px]  py-[12px]  md:py-[20px] text-white bg-black rounded-lg whitespace-nowrap  text-[15px]  md:text-[24px]">
                  {" "}
                  Shope Now{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="relative items-center mx-[20px]  md:mx-[50px]">
            <img
              className="absolute right-0 hidden md:flex"
              src="/assets/images/Star-9.png"
            />
            <img
              className="absolute left-0 hidden md:flex"
              src="/assets/images/Star-9.png"
            />
            <img className="align-bottom" src="/assets/images/pinkgirl.png" />
            <img
              className="absolute right-0 hidden bottom-20 md:flex"
              src="/assets/images/Star-9.png"
            />
            <img
              className="absolute left-0 hidden bottom-6 md:flex"
              src="/assets/images/Star-9.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
