"use client";

"eslint-disable padded-blocks"

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faCartShopping,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const navLinks = ["Home", "About", "Services", "Contact", "Products"];

  return (
    <>
      <header className="flex justify-center items-center bg-[whitesmoke]">
        <nav className="flex justify-between items-center w-full px-1 sm:px-5 md:px-10 py-1">
          <div className="flex w-14 h-14 rounded-full overflow-hidden">
            <Image
              src="/images/pnglogo.png"
              alt="profile logo"
              className="object-cover w-full h-full"
              width={100}
              height={100}
            />
          </div>
          <div className="flex sm:hidden fixed bottom-2 px-2 py-1 justify-around w-full ">
            <FontAwesomeIcon icon={faHouse} className="" />
          </div>
          <ul className="sm:flex justify-around w-full max-w-[50rem] hidden">
            <>
              {navLinks.map((items) => (
                <li className="font-semibold text-black tracking-wider cursor-pointer">
                  {items}
                </li>
              ))}
            </>
          </ul>
          <div className="flex justify-between w-20">
            <div className="relative flex justify-center items-center">
              <FontAwesomeIcon icon={faBell} className="relative" />
              <div className="w-3 h-3 absolute right-[-.2rem] top-[-.2rem] rounded-full bg-blue-600">
                <span className="absolute left-[.23rem] top-[.01rem] text-[.5rem] font-bold text-white">
                  1
                </span>
              </div>
            </div>
            <FontAwesomeIcon icon={faCartShopping} className="" />
            <FontAwesomeIcon icon={faUser} className="" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
