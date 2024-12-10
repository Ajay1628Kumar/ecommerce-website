import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Articles from "./articles";
import ArticleData from "../database/articleData";
import CseProduits from "./cesProduits.";
import CesData from "../database/cesData";
import Soccupe from "./soccupe";
import SofaSection from "./sofaSection";
import Footer from "./footer";
import "remixicon/fonts/remixicon.css";
const MainPage = () => {
  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* hero secrtion */}
      <Hero />

      {/* articles section */}
      <div className="bg-[#FBF9F899] p-5">
        <div className="flex justify-between items-center">
          <h1 className="font-cabinet text-[#393939] md:text-3xl">
            Articles similaries
          </h1>
          <h2 className="underline text-[#393939] text-sm md:text-lg">
            Voir toute la collection
          </h2>
        </div>
        <div className="article-container flex gap-8 flex-nowrap whitespace-nowrap overflow-x-auto overflow-y-hidden bg-[#FBF9F899]">
          {ArticleData.map((originalData) => {
            return (
              <Articles
                tableImg={originalData.tableImg}
                key={originalData.key}
              />
            );
          })}
        </div>
      </div>

      {/* ces produits section */}
      <div className="bg-[#FBF9F899] mt-5 p-4">
        <div className="flex justify-between items-center ">
          <h1 className="font-cabinet text-[#393939] md:text-3xl">
            Ces produits pourraient vous intéresser
          </h1>
          <h2 className="underline text-[#393939] text-sm md:text-lg">
            Voir toute la collection
          </h2>
        </div>
        <div className="article-container flex flex-nowrap whitespace-nowrap gap-8 overflow-x-auto overflow-y-hidden bg-[#FBF9F899]">
          {CesData.map((originalData) => {
            return (
              <CseProduits
                tableImg={originalData.tableImg}
                key={originalData.key}
              />
            );
          })}
        </div>
      </div>

      {/* soccupe section */}
      <Soccupe />

      {/* sofaSection */}
      <SofaSection />

      {/* footer section */}
      <Footer></Footer>
    </>
  );
};

export default MainPage;
