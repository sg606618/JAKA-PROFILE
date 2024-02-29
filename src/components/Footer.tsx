"use client";

import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className=" w-full">
        <div className="mx-auto container text-white bg-gray-100 rounded-se-2xl rounded-ss-2xl -mt-3">
          <div className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
              <div className="w-40 sm:w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 gap-2">
                  <div className="flex w-14 h-14 rounded-full overflow-hidden">
                    <Image
                      src="/assets/jakaassets/pnglogo.png"
                      alt="profile logo"
                      className="object-cover w-full h-full"
                      width={100}
                      height={100}
                    />
                  </div>
                  <h1 className="JakaTextFooter text-[20] sm:text-[25px] font-bold font-signika tracking-wide bg-gradient-to-r from-[#ff0000] via-white to-black">
                    JAKA NEPAL
                  </h1>
                </a>
                <p className="mt-2 text-sm text-gray-500">
                  The only trusted online shop.
                </p>
              </div>
              <div className="flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 justify-start w-full">
                <div className="w-fit px-4">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">
                    services
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
                        ✨Let's strive for a more fashionable look✨
                      </span>
                    </li>
                    <li>
                      <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
                        🛒 Bag Collection
                      </span>
                    </li>
                    <li>
                      <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
                        🚚 Delivery all over Nepal
                      </span>
                    </li>
                    <li>
                      <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
                        ❌ No Return, Exchange within 24Hr incase of Damage
                      </span>
                    </li>
                  </nav>
                </div>
                <div className="w-fit px-4 flex-1">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">
                    Quick Links
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                        LinkedIn
                      </a>
                    </li>
                  </nav>
                </div>
                <div className="w-fit px-4 flex-1">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">
                    Contact
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <span className="text-gray-600 hover:text-gray-800">
                        Pipalbot, Dillibazar, Kathmandu, Nepal
                      </span>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 cursor-pointer"></a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                        Third Contact
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-600 hover:text-gray-800 cursor-pointer">
                        Fourth Contact
                      </a>
                    </li>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2024 JAKANEPAL —
              <a
                href="https://www.instagram.com/jakanepal/"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @jakanepal
              </a>
            </p>
            <span className="flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start flex-wrap">
              <a className="text-gray-500 w-10 h-10 overflow-hidden bg-transparent grid place-items-center">
                <Image
                  className="object-fit cursor-pointer hover:scale-125 transition-all"
                  width={100}
                  height={100}
                  src="/assets/socialmedia/facebook.png"
                  alt="facebook logo"
                />
              </a>
              <a className="text-gray-500 w-10 h-10 overflow-hidden bg-transparent grid place-items-center">
                <Image
                  className="object-fit cursor-pointer hover:scale-125 transition-all"
                  width={100}
                  height={100}
                  src="/assets/socialmedia/facebook.png"
                  alt="instagram logo"
                />
              </a>
              <a className="text-gray-500 w-10 h-10 overflow-hidden bg-transparent grid place-items-center">
                <Image
                  className="object-fit cursor-pointer hover:scale-125 transition-all"
                  width={100}
                  height={100}
                  src="/assets/socialmedia/twitter.png"
                  alt="twitter logo"
                />
              </a>
              <a className="text-gray-500 w-10 h-10 overflow-hidden bg-transparent grid place-items-center">
                <Image
                  className="object-fit cursor-pointer hover:scale-125 transition-all"
                  width={100}
                  height={100}
                  src="/assets/socialmedia/facebook.png"
                  alt="linkedin logo"
                />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
