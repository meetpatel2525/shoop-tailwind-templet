import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";


const Footer = () => {


  useEffect(() => {
    AOS.init();
  }, [])
  
  
  return (
    <div className=" px-[40px]  md:px-[60px] lg:px-[70px]  xl:px-[100px] pb-10 py-[119px]  bg-black">
      <div class="flex  flex-col   md:flex-row gap-[15px]  px[67px] pb-[120px] text-white justify-between">
        <div data-aos="zoom-in-right" class=" ">
          <h1 className="  font-[900]  leading-none text-[48px]	 lg:text-[56px]	">FASHION</h1>
          <div className="py-[16px] pb-11">
            <p className="  font-[400]  text-[15px]	 lg:text-[24px] text-[#8E8E8E]	">
              Complete your with awesome
            </p>
            <p className="  font-[400]  text-[15px]	 lg:text-[24px] text-[#8E8E8E]	">
              clothes from us.
            </p>
          </div>

          <div className="flex justify-between gap-5 mt-8 xl:gap-14 lg:gap-10 md:gap-8 md:mt-0">
            <img src="/assets/images/fb.svg" />
            <img src="/assets/images/insta.svg" />
            <img src="/assets/images/tweeter.svg" />
            <img src="/assets/images/linkedin.svg" />
          </div>
        </div>
        <div data-aos="zoom-in-left" class=" flex justify-between  gap-5 xl:gap-14 lg:gap-10 md:gap-8  mt-8  md:mt-0">
        
          <div>
            <h2 class="mb-6   font-[400]  text-[15px]	 lg:text-[24px]     text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul class="text-[#8E8E8E]">
              <li class="mb-4   font-[400]  text-[15px]	 lg:text-[24px]">
                <a href="https://flowbite.com/" class="hover:underline">
                  About
                </a>
              </li>
              <li className=" mb-6 font-[400]  text-[15px]	 lg:text-[24px]" >
                <a href="https://tailwindcss.com/" class="hover:underline">
                  Contact us
                </a>
              </li>
              

              <li class="mb-4   font-[400]  text-[15px]	 lg:text-[24px]">
                <a href="https://flowbite.com/" class="hover:underline">
                  Support
                </a>
              </li>
              <li className="  font-[400]  text-[15px]	 lg:text-[24px]" >
                <a href="https://tailwindcss.com/" class="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6   font-[400]  text-[15px]	 lg:text-[24px] text-gray-900 uppercase dark:text-white">
              Quick Link{" "}
            </h2>
            <ul class="text-[#8E8E8E]   font-[400]  text-[15px]	 lg:text-[24px]">
              <li class="mb-4">
                <a
                  href="https://github.com/themesberg/flowbite"
                  class="hover:underline "
                >
                  Share Location
                </a>
              </li>
              <li class="mb-4">
                <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">
                  Orders Tracking
                </a>
              </li>

              <li class="mb-4">
                <a href="https://flowbite.com/" class="hover:underline">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" class="hover:underline">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6   font-[400]  text-[15px]	 lg:text-[24px] text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul class="text-[#8E8E8E]  font-[400]  text-[15px] lg:text-[24px]">
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" class="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
