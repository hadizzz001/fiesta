"use client";
import About1 from "@/components/About1";
import About from "@/components/About"; 

export default function AboutUsBanner() {
  return (
    <div className="mb-[18em]">
      <div className="relative w-full h-[400px] overflow-hidden  ">
        {/* Background Image */}
        <img
          src="https://res.cloudinary.com/dx6kwjzog/image/upload/v1755350689/449690394_17960880167782078_2480636519899191385_n_coz64g.jpg"
          alt="About Us Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <p className="  mytitle2a">Introduction of us</p>
        </div>
      </div>


<About />
      <About1 /> 





      </div >







      );
}
