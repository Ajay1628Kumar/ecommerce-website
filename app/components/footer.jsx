import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <>
      <hr className="mt-4 h-px bg-[#9C9C9C]" />

      <div className="p-6 pb-20 lg:flex lg:justify-between">
        <div className="footer-left flex flex-col lg:flex-row gap-7 text-[#393939]">
          <Image
            src="/images/ecomm-logo.png"
            alt="logo"
            width={500}
            height={500}
            className="w-28 md:w-40 "
          />
          <ul className="font-geist">
            <li>
              <h1 className="text-lg font-bold">INFOS PRATIQUES</h1>
            </li>
            <li>À propos</li>
            <li>Livraisons & Reprises</li>
            <li>Mode d’emploi</li>
            <li>F.A.Q</li>
          </ul>
          <ul>
            <li>
              <h1 className="text-lg font-bold">LÉGAL</h1>
            </li>
            <li>Mentions légales</li>
            <li>CGU</li>
            <li>CGV</li>
            <li>Politique de confidentialité</li>
          </ul>
          <ul>
            <li className="text-lg font-bold">MON COMPTE</li>
            <li>Accéder à mon compte</li>
            <li>Ma liste d’envie</li>
            <li>Créer un compte</li>
            <li>Mot de passe oublié</li>
          </ul>
        </div>

        <div className="footer-right mt-6">
          <p className="font-bold text-lg">NOUS SUIVRE</p>
          <ul className="flex gap-3 text-2xl text-[#393939]">
            <li className="border-2 p-1 rounded-xl">
              <i className="ri-twitter-fill"></i>
            </li>
            <li className="border-2 p-1 rounded-xl">
              <i className="ri-instagram-line"></i>
            </li>
            <li className="border-2 p-1 rounded-xl">
              <i className="ri-linkedin-fill"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
