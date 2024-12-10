"use client";
import React, { useState } from "react";
import Image from "next/image";

const Hero = () => {
  const [count, setCount] = useState(0);

  // function for add to cart 
  function handleSub() {
    if (count !== 0) {
      setCount(count - 1);
    }
  }
  function handleAdd() {
    setCount(count + 1);
  }
  
  return (
    <div className="p-5 w-full">
      <div className="mb-4 font-geist">
        <h3 className="text-[#393939] text-sm">
          HOME<span className="text-[#9C9C9C] ml-5"><i className="ri-circle-fill mr-2"></i> ART DE LA TABLE</span>
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row ">
        <div className="left flex flex-col items-center justify-center lg:w-1/2 ">
          <div className="img w-full flex items-center justify-center rounded-2xl overflow-hidden bg-[#F8F6F4]">
            <Image
              src="/images/machine.webp"
              alt="machine img"
              width={500}
            height={500}
              className="mt-6 w-96 h-full hover:scale-110 duration-300"
            />
          </div>
          <div className="description">
            <h2 className="font-cabinet text-[#111928] text-xl md:text-2xl mt-3">
              Description produit
            </h2>
            <p className="font-geist text-sm md:text-base text-[#9C9C9C] mt-3">
              Festi vous propose à la location un/une "Jewel – grand
              couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce
              (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou
              du personnel, ce produit a fait l'objet d'une sélection rigoureuse
              par notre équipe. Il est en location chez nous sous la référence
              "VAJGC". Nous sommes à votre disposition pour que les événements
              de nos clients, même en last-minute, soient toujours une réussite.
              Vous pourrez trouver tout une série d'autre produit à louer de ce
              type dans la catégorie "Art de la Table".
            </p>
          </div>
        </div>

        <div className="right w-full lg:w-1/2">
          <div className="mt-6 flex items-center justify-between">
            <h1 className="font-playFair text-xl md:text-3xl text-[#111928]">
              Cheese – appareil à raclette 1/2 roue
            </h1>
            <div className="text-4xl hover:text-red-600">♡</div>
          </div>

          <h2 className="font-geist
           text-lg md:text-2xl mt-3 text-[#111928]">
            39,50€<span className="text-[#9C9C9C]">/pièce</span>
          </h2>

          <hr className="mt-3 h-px bg-[#9C9C9C]" />

          <div className="mt-2 mb-2 md:text-2xl flex items-center justify-between">
            <pre className="font-geist flex items-center justify-center">
              <i className="ri-ruler-line"></i> 20<sup>cm</sup>
              <span className="text-3xl text-[#9C9C9C]"> ⌀ </span> 50
              <sup>cm</sup>
            </pre>

            <p className="font-geist text-[#9C9C9C] text-sm ">RÉF : VABGN5</p>
          </div>

          <hr className="mt-3 h-px bg-[#9C9C9C]" />

          <ul className="font-geist mt-3 text-[#5D5D5D]">
            <li>
              Location appareil à raclette - Raclette traditionnelle 1/2 roue
            </li>
            <li>Réglable en hauteur</li>
            <li>Appareil à raclette professionnel</li>
            <li>Boîtier de chauffe horizontal réglable en hauteur</li>
            <li className="mt-6">220V</li>
            <li>900W</li>
          </ul>

          <hr className="mt-4 h-px bg-[#9C9C9C]" />

          <div className="flex gap-2 mt-4">
            <div
              className="counter w-36
             border-2 rounded-md border-black flex items-center justify-evenly text-xl font-geist"
            >
              <button onClick={handleSub} name="minus-btn" id="minus-btn"className="text-[#393939]">
              <i className="ri-subtract-line"></i>
              </button>
              {count}
              <button onClick={handleAdd} id="plus-btn" name="plus-btn" className="text-[#393939]">
              <i className="ri-add-line"></i>
              </button>
            </div>
            <button className="bg-[#5CD2DD] w-2/3 rounded-sm text-white text-base h-12 font-cabinet">
              <p>AJOUTER AU PANIER</p>
            </button>
          </div>
          <div className="mt-5 font-cabinet">
            <div className="flex justify-between bg-[#FBF9F899] rounded-md text-[#393939] p-5">
              <p>Livraisons</p>
              <i className="ri-add-line"></i>
            </div>
            <div className="mt-1  flex justify-between bg-[#FBF9F899] rounded-md text-[#393939] p-5">
              <p>Questions</p>
              <i className="ri-add-line"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
