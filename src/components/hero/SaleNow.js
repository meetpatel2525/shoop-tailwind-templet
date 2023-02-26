import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";
import { TypeAnimation } from 'react-type-animation';

const SaleNow = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    
    <div   className="  my-[50px]  md:my-[80px]  lg:my-[120px] xl:my-[190px] grid grid-cols-1 xl:grid-cols-2 bg-yellow pt-[98px] px-[20px] md:px-[50px]  ">
      
      <div data-aos="zoom-in"  className="" >

      <div className="relative hidden md:flex" >
<img className="absolute   top-[200px] left-[150px] " src="/assets/images/Star-9.png" />
      <img className="absolute top-[100px] right-[150px]" src="/assets/images/Star-9.png" />
</div>
   


        <img className="w-full " src="/assets/images/yellow-girl.png" />


        <div className="relative hidden md:flex" >
<img className="absolute bottom-[300px] left-[50px]" src="/assets/images/Star-9.png" />
      <img className="absolute bottom-[70px] right-[150px]" src="/assets/images/Star-9.png" />
</div>

      </div>

      <div  className="py-[50px] px-[30px] md:px-[0px] ">
        <div>

        {/* <TypeAnimation
     sequence={["PAYDAY", 5000, '']}
                   //  Continuing previous Text
                   className="bg-no-repeat w-fit pr-3 bg-white text-[46px]  md:text-[56px]  lg:text-[76px] xl:text-[96px]	 font-[900]  pl-[30px] md:pl-[37px]"
    wrapper="h1"
    repeat={Infinity} 
    cursor={false}
  /> */}


        
          <h1 data-aos="flip-left" className="bg-no-repeat w-fit pr-3 bg-white text-[46px]  md:text-[56px]  lg:text-[76px] xl:text-[96px]	 font-[900]  pl-[30px] md:pl-[37px]">
            PAYDAY
          </h1>
        </div>


<div data-aos="flip-right" className="   h-[60px]  md:h-[100px] lg:h-[140px] " >

<TypeAnimation
     sequence={["SALE NOW", 5000, '']}
                   //  Continuing previous Text
                   className="	text-[46px]  md:text-[56px]  lg:text-[76px] xl:text-[96px]	 font-[900]  pl-[30px] md:pl-[37px] "
    wrapper="h1"
    repeat={Infinity} 
    cursor={false}
  />
  
</div>


        {/* <h1 className="	text-[46px]  md:text-[56px]  lg:text-[76px] xl:text-[96px]	 font-[900]  pl-[30px] md:pl-[37px] ">
          SALE NOW
        </h1> */}

        <p className="lg:text-[36px]	py-[20px] font-[500]  pl-[30px] md:pl-[37px]">
          {" "}
          spend minimal $100 get 30% off voucher code your next purchase{" "}
        </p>

        <h1 className="lg:text-[36px]	py-[20px] font-[700]  pl-[30px] md:pl-[37px]">
          1 june - 10 june 2021
        </h1>
        <p className="lg:text-[36px]	py-[20px] font-[400]  pl-[30px] md:pl-[37px]">
          * Terms & Conditions apply
        </p>

        <div className=" pl-[30px]">
          <button className="px-[26.75px]  py-[13px] text-white bg-black rounded-lg whitespace-nowrap text-[24px]">
            {" "}
            Shope Now{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaleNow;
