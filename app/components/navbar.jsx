"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <div
        className={`navTop flex justify-between items-center w-full p-2 md:p-2`}
      >
        <div className="w-24">
          <Image
            src="/images/weFrameTechLogo.webp"
            width={500}
            height={500}
            alt="logo"
          />
        </div>
        <input
          type="search"
          placeholder="Rechercher un produit"
          className="font-geist bg-[#F9FAFB] ml-3 mr-3 h-12 w-full md:w-44 lg:w-[calc(100%-50rem)] p-2 rounded-md placeholder:text-[#667482] text-sm"
        ></input>

        <nav>
          <ul className="text-poppins hidden ml-2 text-sm text-[#3B4347] md:visible md:list-none md:flex md:items-center md:gap-3 md:font-light">
            <li><i className="ri-lightbulb-line"></i> Inspirations</li>
            <li>
              <i className="ri-heart-line"></i> Mes favoris
            </li>
            <li className="bg-[#CAD2D566] pl-3 pr-3 pt-1 pb-1 rounded-2xl">
              24
            </li>
            <li className="pt-1 pb-1 pl-2 pr-2 rounded-md bg-[#0093D0] text-white">
            <i className="ri-shopping-cart-2-line"></i> Panier
            </li>
            <li className="bg-[#EAEDEE] h-10 w-10 rounded-full"></li>
            <li>
              <label id="language"></label>
              <select id="language">
                <option value="french">French</option>
                <option value="english">English</option>
                <option value="हिन्दी">हिन्दी</option>
                <option value="spanish">Spanish</option>
              </select>
            </li>
          </ul>
        </nav>

        <div className="font-inter md:hidden text-[#3B4347]">
          <DropdownMenu>
            <DropdownMenuTrigger><i className="ri-menu-line"></i></DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Profile</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Inspirations</DropdownMenuItem>
              <DropdownMenuItem>Mes favoris</DropdownMenuItem>
              <DropdownMenuItem>24</DropdownMenuItem>
              <DropdownMenuItem>Panier</DropdownMenuItem>
              <DropdownMenuItem>
                <select id="language">
                  <option value="volvo">French</option>
                  <option value="saab">English</option>
                  <option value="opel">Indian</option>
                  <option value="audi">Spanish</option>
                </select>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="navBottom p-4 md:p-5">
        <nav>
          <ul className="flex gap-5 whitespace-nowrap overflow-x-auto list-none text-[#6B7280] text-sm md:justify-evenly">
            <li className="hover:text-[#0093D0] hover:underline ease-in duration-300">
              ART DE LA TABLE
            </li>
            <li className="hover:text-[#0093D0] hover:underline ease-in duration-300">
              MOBILIER
            </li>
            <li className="hover:text-[#0093D0] hover:underline ease-in duration-300">
              NAPPAGE
            </li>
            <li className="hover:text-[#0093D0] hover:underline ease-in duration-300">
              MATERIEL DE SALLE
            </li>
            <li className="hover:text-[#0093D0] hover:underline ease-in duration-300">
              CUISINE
            </li>
            <li className="hover:text-[#0093D0] hover:underline ease-in duration-300">
              BARBECUE
            </li>
            <li className="hover:text-[#0093D0] hover:underline ease-in duration-300">
              TENTE
            </li>
            <li className="hover:text-[#0093D0] hover:underline ease-in duration-300">
              CHAUFFAGE
            </li>
            <li className="hover:text-[#0093D0] hover:underline ease-in duration-300">
              PODIUM-PISTE DE DANSE
            </li>
            <li className="hover:text-[#0093D0] hover:underline ease-in duration-500">
              SON ET LUMIERE
            </li>
            <li className="hover:text-[#0093D0] hover:underline ease-in duration-300">
              PACKS
            </li>
            <li className="hover:text-[#0093D0] hover:underline  ease-in duration-300:">
              CONSOMABLES
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
