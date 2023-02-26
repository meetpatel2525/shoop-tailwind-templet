import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";


const BrandList = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className="bg-[#EBD96B] my-[63px] py-[30px]  md:px-[121px] ">
      <div className="grid items-center grid-cols-1 gap-y-10 py-[20px] md:grid-cols-6">
     

<div  data-aos="fade-right"  className="mx-auto cursor-pointer " >
<img className="w-[95%]  hover:w-[110%]" src="/assets/images/hm.png" />
</div>

    
<div data-aos="fade-right"   className="mx-auto cursor-pointer " >
<img className="w-[95%] hover:w-[110%]"  src="/assets/images/obey.png" />
</div>

<div  data-aos="fade-right"  className="mx-auto cursor-pointer " >
<img className="w-[95%] hover:w-[110%]"  src="/assets/images/shopify.png" />

</div>

<div data-aos="fade-left" className="mx-auto cursor-pointer " >
<img className="w-[95%] hover:w-[110%]"  src="/assets/images/lacoste.png" />

</div>

<div data-aos="fade-left" className="mx-auto cursor-pointer " >
<img className="w-[95%] hover:w-[110%]"  src="/assets/images/levis.png" />

</div>

<div data-aos="fade-left"  className="mx-auto cursor-pointer " >
<img className="w-[95%] hover:w-[110%]"  src="/assets/images/amazon.png" />
</div>

    
   



      </div>
    </div>
  );
};

export default BrandList;
