import React from "react";
import Image from "next/image";

const SofaSection = () => {
  return (
    <div className="p-3 md:flex md:gap-5">
      <div className="h-72 w-full overflow-hidden rounded-md flex justify-center items-center md:w-1/2">
        <Image
          src="/images/sofa.webp"
          width={500}
          height={500}
          alt="sofa image"
          className=" rounded-md hover:scale-110 duration-500"
        />
      </div>

      <div className="h-72 bg-[#FFF3F9] rounded-md p-4 mt-4 md:w-1/2 md:mt-0">
        <h1 className="font-cabinet text-[#393939] text-xl md:text-2xl">
          S'inscrire & économiser <span className="text-[#5CD2DD]">10%</span>
        </h1>
        <p className="font-geist mt-2 text-sm md:text-base text-[#BDA2B0]">
          Office ipsum you must be muted. Synergize helicopter prioritize anyway
          job due harvest most opportunity didn't. Yet busy any meeting shark
          light marginalised 4-blocker message. Productize corporate nail caught
          synergy highlights lunch. Company another pushback items dear or any.
        </p>

        <div className="flex gap-4">
          <div className="p-2 text-[#A68A98] mt-2 w-48 border-2 h-14 border-[#F5E1EB] rounded-md md:w-96 placeholder:text-[#A68A98]">
            john@doe.com
          </div>

          <button className="text-[#FFFFFF] pl-2 pr-2 pt-1 pb-1 bg-[#5CD2DD] mt-2 w-32 border-0 rounded-md">
            <p>
              S'inscrire <i className="ri-arrow-right-line"></i>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SofaSection;
