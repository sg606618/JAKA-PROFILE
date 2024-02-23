"use client";

import { Roboto } from "next/font/google";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const roboto = Roboto({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
});

const BackgroundCover = () => {
  return (
    <>
      <div className="w-full h-[500px] flex justify-between container mx-auto relative">
        <div className="absolute w-full h-full bg-black z-10 flex sm:hidden bg-opacity-80"></div>
        {/* <div className="absolute w-full h-full bg-black -z-10 sm:flex hidden bg-opacity-10"></div> */}
        <div className="relative h-full w-full flex justify-end items-start flex-col pb-40 z-50 px-4">
          <section className="flex flex-col mb-5">
            <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] font-semibold font-signika -mb-5 md:-mb-8 tracking-wide text-white sm:text-black">
              JAKA NEPAL
            </h1>
            <p className="text-[1rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.9rem] text-[#F6050B] font-caveat tracking-normal md:tracking-widest font-semibold">
              Carry Style, Unleash Convenience
            </p>
          </section>
          <div className="flex w-fit h-fit justify-center items-center px-4 pr-8 py-2 bg-[#F6050B] rounded-lg font-bold relative text-white">
            <button className="mx-2 font-semibold">Shop Now</button>
            <FontAwesomeIcon
              icon={faArrowRight}
              className="mx-2 absolute right-2"
            />
          </div>
        </div>
        <div className="absolute sm:relative w-full h-full">
          <div className="sm:flex text-3xl md:text-3xl lg:text-6xl font-bold absolute hidden sm:right-14 md:right-40 lg:right-20 top-10 font-protestRevolution">
            New Arrival
          </div>
          <div className="absolute right-0 md:right-20 top-24 w-40">
            <Image
              src="/images/BlueNike.png"
              alt="Blue Nike Backpack"
              className="bagsCollection object-cover w-full h-full"
              width={100}
              height={100}
            />
          </div>
          <div className="absolute right-28 md:right-60 top-20 w-40">
            <Image
              src="/images/BrownJeep.png"
              alt="BrownJeep Backpack"
              className="bagsCollection object-cover w-full h-full"
              width={100}
              height={100}
            />
          </div>
          <div className="absolute right-14 md:right-40 top-24 w-40">
            <Image
              src="/images/HempYggdrasil.png"
              alt="HempYggdrasil Hemp Backpack"
              className="bagsCollection object-cover w-full h-full"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundCover;
