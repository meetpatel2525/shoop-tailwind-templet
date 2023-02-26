import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";


const JoinCommunity = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className="   px-[40px]  md:px-[76px] lg:px-[176px] py-[150px] bg-[#E5C643]">
      <div className="  text-[33px] text-center items-center lg:text-[44px] xl:text-[55px] font-[900] text-white ">
        <h1 data-aos="zoom-out-right" >JOIN SHOPPING  TO GET </h1>
        <h1 data-aos="zoom-out-left" className="text-center "> MONTHLY PROMO </h1>
        <p data-aos="zoom-out-right" className=" tracking-wide text-[20px] text-center  lg:text-[25px] xl:text-[32px] font-[400] text-[#FFFCF8]">
          Type your email down below and young wild generation
        </p>
        <div data-aos="zoom-out-left"  className=" relative items-center w-[100%]  md:w-[70%] lg:w-[70%] xl:w-[50%] 2xl:w-[30%] mx-auto   font-semibold  rounded-lg mt-[49px]">
          
       
          <input
          className=" text-[20px] pl-[27px] py-[20px] rounded-[10px] w-full  lg:text-[25px] xl:text-[32px] font-[400]" type="text" placeholder="add your email here" 
            
          />
          <button className="px-[36.75px] py-2 top-3 md:top-[10px] lg:top-[12px] xl:top-[19.5px]  absolute right-[10px] text-white bg-black rounded-lg text-[20px] md:text-[23px] lg:text-[26px]">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
