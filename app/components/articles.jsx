import React from "react";
import Image from "next/image";

const Articles = ({ tableImg, title, price }) => {
  return (
    <div>
      <div className="mt-5 md:w-72">
        {/* Title and Favorite Icon */}
        <div className="font-geist flex items-center mb-5 justify-between">
          <div className="text-3xl hover:text-red-600">♡</div>
          <h3 className="text-sm">ART DE LA TABLE</h3>
        </div>

        {/* Image Container */}
        <div className="bg-[#F9F7F5] flex justify-center items-center rounded-sm p-5 w-60">
          <Image
            src={tableImg}
            width={500}
            height={500}
            alt="table img"
            className="hover:scale-110 duration-300 w-60 object-cover aspect-square"
            priority
          />
        </div>

        {/* Title and Price */}
        <div className="text-lg font-playFair flex justify-between text-[#393939]">
          <p>{title.slice(0, 5)}</p>
          <p className="font-geist">
            {price} <sup>€</sup>
          </p>
        </div>

        {/* Additional Info */}
        <div className="text-sm font-geist mt-1 md:flex md:justify-between md:items-center">
          <p className="text-[#9C9C9C] mb-4 md:mb-0">
            {price}€/Pièce · RÉF : VABGN5
          </p>
          <span className="text-[#546A7D] bg-[#F1F4F6] p-2 rounded-lg">
            20 pièces
          </span>
        </div>
      </div>
    </div>
  );
};

export default Articles;
