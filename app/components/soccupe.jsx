import React from "react";
import Image from "next/image";

const Soccupe = () => {
  return (
    <div className="mt-5 bg-gradient-to-b from-[#FFF3F9] to-pink-[#FFFFFF] w-full pt-10 pb-10">
      <div className="heading flex flex-col justify-center items-center">
        <h1 className="font-cabinet text-[#393939] text-xl md:text-3xl">
          On s’occupe de <span className="text-[#5CD2DD]">tout</span>
        </h1>
        <p className="font-geist text-xs text-center m-4  md:text-xl text-[#9C9C9C]">
        Office ipsum you must be muted. It meeting commitment busy pain.
        </p>
      </div>

      <div className=" flex flex-wrap m-4 justify-evenly text-xs gap-5 text-center">
        <div className="flex flex-col items-center">
          <Image src="/images/trolly.webp" width={500}
            height={500} alt="trolly-icon" className="w-16"/>
          <p className="font-cabinet mt-2 text-[#393939] md:text-xl">
            Livraison & Reprise
          </p>
          <span className="font-geist mt-1 text-[#9C9C9C] md:text-base">
            Selon vos besoins
          </span>
        </div>

        <div className="flex flex-col items-center">
          <Image src="/images/utensil.webp" width={500}
            height={500} alt="utensil-icon" className="w-16"/>
          <p className="font-cabinet mt-2 text-[#393939] md:text-xl">Nettoyage</p>
          <span className="font-geist mt-1 text-[#9C9C9C] md:text-base">
            Selon vos besoins
          </span>
          
        </div>
        
        <div className="flex flex-col items-center">
          <Image src="/images/computer.webp" width={500}
            height={500} alt="computer-icon" className="w-16"/>
          <p className="font-cabinet mt-2 text-[#393939] md:text-xl">
            Commande Illimitée
          </p>
          <span className="font-geist mt-1 text-[#9C9C9C] md:text-base">
            Tout est possible
          </span>
        </div>

        <div className="flex flex-col items-center text-center">
          <Image src="/images/van.webp" width={500}
            height={500} alt="van-icon" className="w-16"/>
          <p className="font-cabinet mt-2 text-[#393939] md:text-xl">
            Transport & Enlèvement
          </p>
          <span className="font-geist mt-1 text-[#9C9C9C] md:text-base">
            On s’occupe de tout.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Soccupe;
