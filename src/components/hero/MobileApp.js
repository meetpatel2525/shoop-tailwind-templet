import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const MobileApp = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className="  my-[50px]  md:my-[100px]  px-[50px] items-center  md:px-[100px] grid grid-cols-1 xl:grid-cols-2  pt-[98px]   ">
   
   
      <div data-aos="fade-up" className="mb-16 text-center">
        <div className="mb-[41px] ">
     
          <h1 className="  pr-3 text-[28px]  md:text-[38px]  lg:text-[48px] 	 font-[900] ">
            DOWNLOAD APP &
          </h1>

          <h1 className="	text-[28px]  md:text-[38px]  lg:text-[48px]	 font-[900]  ">
            GET THE VOICHER!
          </h1>
        </div>

        <div className="my-[65px]">
          <p
            className="text-[#7C7C7C]

font-[500px]
text-[24px]
"
          >
            {" "}
            Get 30% off for first transaction using
          </p>
          <p
            className="text-[#7C7C7C] font-[500px]
text-[24px]"
          >
            {" "}
            Rondovision mobile app for now.
          </p>
        </div>

        <div className=" flex flex-col md:flex-row   justify-center gap-5 mx-[30px] md:gap-15" >
          <img data-aos="fade-right"  src="/assets/images/applestore.png" />
          <img  data-aos="fade-left" src="/assets/images/playstore.png" />
        </div>
      </div>

      <div  >
        <img data-aos="zoom-in-up" className="mx-auto" src="/assets/images/mobil-app.png" />
      </div>
    </div>
  );
};

export default MobileApp;
