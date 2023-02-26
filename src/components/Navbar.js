import Drawerr from "./drawer/Drawer";
import React from "react";

const Navbar = () => {



  
  return (
    <div className=" px-[50px] md:px-[70px]  lg:px-[100px] pt-10">
      <div className="flex justify-between uppercase">
        <div className="flex items-center mr-5">
          <div  >
            <img src="/assets/images/Vector.svg" />
          </div>
          <div className="ml-3">
            <img src="/assets/images/FASHION.svg" />
          </div>
        </div>
        <div className="hidden lg:items-center lg:flex">
        <div className="font-semibold mr-[65px]">home</div>
          <div className="font-semibold mr-[65px]">catalogue</div>
          <div className="mr-[65px] font-semibold">fashion</div>
          <div className="mr-[65px] font-semibold">favorite</div>
          <div className="mr-[65px] font-semibold">lifestyle</div>
          <div className="">
            <button className="px-[26.75px] py-[13px] text-white bg-black rounded-lg whitespace-nowrap text-[24px]">
              Sign up
            </button>
          </div>
        </div>
        <div
        className="block float-right lg:hidden">
                                  <Drawerr/>
                </div>
            </div>
    </div>
  );
};

export default Navbar;
