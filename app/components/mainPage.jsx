"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Articles from "./articles";
import Soccupe from "./soccupe";
import SofaSection from "./sofaSection";
import Footer from "./footer";
import "remixicon/fonts/remixicon.css";
import CesProduits from "./cesProduits.";

const MainPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      {/* Articles Section */}
      <div className="bg-[#FBF9F899] mt-5 p-4">
        <h1 className="font-cabinet text-[#393939] md:text-3xl">
          Articles similaires
        </h1>
        <div className="article-container flex gap-8 overflow-x-auto">
          {products.map((product) => (
            <Articles
              key={product.id}
              tableImg={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>

      {/* Ces Produits Section */}
      <div className="bg-[#FBF9F899] mt-5 p-4">
        <h1 className="font-cabinet text-[#393939] md:text-3xl">
          Ces produits pourraient vous intéresser
        </h1>
        <div className=" flex gap-8 overflow-x-auto">
          {products.map((product) => {
            return (
              <CesProduits
                key={product.id}
                tableImg={product.image}
                title={product.title}
                price={product.price}
              />
            );
          })}
        </div>
      </div>

      <Soccupe />
      <SofaSection />
      <Footer />
    </>
  );
};

export default MainPage;
