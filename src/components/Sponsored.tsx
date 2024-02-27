"use client";

import React from "react";
import Image from "next/image";

const Sponsored = () => {
  const images = [
    "/assets/images/slides/bagpackjordan.png",
    "/assets/images/slides/bape.png",
    "/assets/images/slides/boxblacknew.png",
    "/assets/images/slides/boxblue.png",
    "/assets/images/slides/boxHdesign.png",
    "/assets/images/slides/boxwhite.png",
    "/assets/images/slides/erkebag.png",
    "/assets/images/slides/gucci2.png",
    "/assets/images/slides/gucci.png",
    "/assets/images/slides/hempganesh.png",
    "/assets/images/slides/hemptree.png",
    "/assets/images/slides/jordan.png",
    "/assets/images/slides/ladiesdoll.png",
    "/assets/images/slides/ladiesdoll.png",
    "/assets/images/slides/LVwhite.png",
    "/assets/images/slides/lvyellowborder.png",
    "/assets/images/slides/lvyellowborder2.png",
    "/assets/images/slides/nike.png",
    "/assets/images/slides/nikeblack.png",
    "/assets/images/slides/nikeblue.png",
    "/assets/images/slides/nikegolden.png",
    "/assets/images/slides/nikegray.png",
    "/assets/images/slides/nikered.png",
    "/assets/images/slides/thrasher.png",
    "/assets/images/slides/zeroladies.png",
  ];

  return (
    <>
      <h2 className="productText font-bold md:text-4xl sm:text-3xl text-2xl lg:text-5xl text-center uppercase mb-5 w-fit mx-auto font-signika">
        Trend
      </h2>
      <div className="sponsoredContainer">
        <div className="sponsoredContent">
          {images.map((items) => (
            <>
              <Image
                height={100}
                width={100}
                src={items}
                className="mx-2 cursor-pointer hover:scale-150 transition-all rounded-lg"
                alt="Nothing just happy."
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sponsored;
