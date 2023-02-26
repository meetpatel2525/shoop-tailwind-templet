import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const NewArrivals = () => {


  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div  className=" px-[50px]    md:px-[100px] pt-10">
      <div data-aos="flip-down" className="relative ">
        <img
          className=" pl-[50px]  md:pl-[70px]  lg:pl-[190px] xl:pl-[240px]"
          src="/assets/images/Vector-8.png"
        />

        <h1 className=" absolute bottom-0   font-[900]   leading-[50px] pl-[18px]  md:pl-[27px] lg:pl-[37px] text-[28px]  md:text-[48px]	 lg:text-[56px]	">
          {" "}
          New Arrivals
        </h1>
      </div>

      <div className="grid gap-x-[17px]   place-items-center grid-cols-1  mt-[101px] md:grid-cols-3">
        <div data-aos="fade-up-right" className="">
          <img className="my-6" src="/assets/images/model-1.png" />
          <h1 className="  text-[16px]  lg:text-[26px] xl:text-[32px] font-[500]  ">
            Hoodies & Sweetshirt
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

        <div data-aos="fade-up" className="">
          <img className="my-6" src="/assets/images/model-2.png" />
          <h1 className=" text-[16px]  lg:text-[26px] xl:text-[32px] font-[500]  ">
            Coats & Parkas
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

        <div data-aos="fade-up-left" className="">
          <img className="my-6" src="/assets/images/model-3.png" />
          <h1 className=" text-[16px]  lg:text-[26px] xl:text-[32px] font-[500]   ">
            Tees & T-shirt
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
      </div>
    </div>
  );
};

export default NewArrivals;
