import React from "react";
import Image from "next/image";
const CseProduits = ({ tableImg }) => {
  return (
    <div>
      <div className="mt-5 w-56 md:w-96">
        <div className="flex items-center mb-5 justify-between">
        <div className="text-3xl hover:text-red-600">♡</div>
          <h3 className="text-sm">ART DE LA TABLE</h3>
        </div>

        <div className="bg-[#F9F7F5] flex justify-center items-center rounded-sm p-5">
          <Image src={`${tableImg}`} alt="table img" width={500}
            height={500}className="hover:scale-110 duration-300 w-96"/>
        </div>

        <div className="font-playFair text-xl flex justify-between text-[#393939]">
          <p>Title</p>
          <p className="font-geist">
            0 <sup>€</sup>
          </p>
        </div>

        <div className="text-xs mt-1 md:flex md:justify-between md:items-center">
          <p className="text-[#9C9C9C] mb-4 md:mb-0">
            0,35€/Pièce · RÉF : VABGN5
          </p>
          <span className=" text-[#546A7D] bg-[#F1F4F6] p-2 rounded-lg">
            20 pièces
          </span>
        </div>
      </div>
    </div>
  );
};

export default CseProduits;
