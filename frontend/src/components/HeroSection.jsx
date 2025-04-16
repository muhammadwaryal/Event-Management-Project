import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        {/* <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
          The Ultimate Hub for Event Organization
        </span> */}
         <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#800080] font-medium">
          The Ultimate Hub for Event Organization
        </span> 
        
        
        {/* <h1 className='text-5xl font-bold'>Search, Apply & <br/> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1> */}
        <h1 className="text-5xl font-bold">
          Plan, Manage & <br /> Host{" "}
          <span className="text-[#6A38C2]">Successful Events</span>
        </h1>
        {/* 
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          consequatur facere dolores amet aut.
        </p> */}
        {/* <p>
          EvOrganize is a comprehensive event management platform designed for MUET to streamline the planning, registration, and execution of both physical and virtual events. With features like seamle ticketing,live streaming, and interactive networking, it enhances engagement andensures a hassle-free experience for organizers and attendees.
        </p> */}
        {/* <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
  <span className="font-semibold text-[#6A38C2]">EvOrganize</span> is a comprehensive event management platform designed for 
  <span className="font-semibold text-[#F83002]"> MUET</span> to streamline the planning, registration, and execution of both 
  <span className="font-medium text-gray-900"> physical and virtual events</span>. With features like 
  <span className="text-[#6A38C2] font-medium"> seamless ticketing</span>, 
  <span className="text-[#F83002] font-medium"> live streaming</span>, and 
  <span className="text-gray-900 font-medium"> interactive networking</span>, it enhances engagement and ensures a hassle-free experience for organizers and attendees.
</p> */}
<p>
<p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
  <span className="font-semibold text-[#6A38C2]">EvOrganize</span> is a comprehensive event management platform designed for 
  <span className="font-semibold text-gray-900"> MUET</span> to streamline the planning, registration, and execution of both 
  <span className="font-medium text-gray-900"> physical and virtual events</span>. With features like 
  <span className="text-[#6A38C2] font-medium"> seamless ticketing</span>, 
  <span className="text-[#6A38C2] font-medium"> live streaming</span>, and 
  <span className="text-gray-900 font-medium"> interactive networking</span>, it enhances engagement and ensures a hassle-free experience for organizers and attendees.
</p>

</p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          {/* <input 
                        type="text"
                        placeholder='Find Your Dream Job!'
                        className='outline-none border-none w-full'
                    /> */}
          <input
            type="text"
            placeholder="Find & Manage Your Event!"
            className="outline-none border-none w-full"
          />

          <Button className="rounded-r-full bg-[#6A38C2]">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
