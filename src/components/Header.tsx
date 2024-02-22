"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const navLinks = ["Home", "About", "Services", "Contact", "Products"];

  return (
    <>
      <header className="flex justify-center items-center bg-[whitesmoke]">
        <nav className="flex justify-around items-center w-full px-3 py-1">
          <div className="flex w-14 h-14 rounded-full overflow-hidden">
            <img
              src="./images/pnglogo.png"
              alt="profile logo"
              className="object-cover w-full h-full"
            />
          </div>
          <ul className="flex justify-around w-full max-w-[50rem]">
            <>
              {navLinks.map((items, index) => (
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
