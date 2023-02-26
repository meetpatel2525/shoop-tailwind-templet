import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const Yungsfavourate = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  
  return (
    <div className=" px-[50px]    md:px-[100px] pt-5">
    
    <div data-aos="flip-down" className="relative w-fit">
      <img
        className="absolute right-0 bottom-1 -z-10 "
        src="/assets/images/Vector-8.png"
      />

      <h1 className="    font-[900]  leading-[40px] md:leading-[50px]  pl-[17px]   md:pl-[27px]  lg:pl-[37px]  text-[28px]	 lg:text-[38px] xl:text-[48px] 2xl:text-[56px]	">
        {" "}
        Young's Favourite
      </h1>
    </div>

    <div className="grid gap-x-[17px]   place-items-center grid-cols-1  mt-[101px] md:grid-cols-2">
      <div  data-aos="flip-left" className="">
        <img className="my-6" src="/assets/images/oragng-bg.png" />
        <h1 className="  text-[16px]  lg:text-[26px] xl:text-[32px] font-[500]  ">
          Trending on instagram 
        </h1>

        <div className="flex justify-between">
          <a className=" text-[14px]  lg:text-[20px] xl:text-[28px] font-[500] text-[#7F7F7F] ">
            Explore Now!
          </a>

          <img
            className=" w-[18px] md:w-[25px] lg:w-[32px]"
            src="/assets/images/Arrow-1.svg"
          />
        </div>
      </div>

      <div  data-aos="flip-right" className="">
        <img className="my-6" src="/assets/images/pink-bg.png" />
        <h1 className=" text-[16px]  lg:text-[26px] xl:text-[32px] font-[500]  ">
          All Under $40 
        </h1>

        <div className="flex justify-between">
          <a className=" text-[14px]  lg:text-[20px] xl:text-[28px] font-[500] text-[#7F7F7F]  ">
            Explore Now!
          </a>
          <img
            className=" w-[18px] md:w-[25px] lg:w-[32px]"
            src="/assets/images/Arrow-1.svg"
          />
        </div>
      </div>

  
    </div>
    
  </div>
  )
}

export default Yungsfavourate
