import React from "react";
import Image from "next/image";

const Products = () => {
  const BagInfo = [
    {
      image: "/assets/images/slides/bagpackjordan.png",
      category: "Bagpacks",
      title: "PU Leather Backpack",
      price: "****",
    },
    {
      image: "/assets/images/slides/bape.png",
      category: "Bagpacks",
      title: "PU Leather Backpack",
      price: "****",
    },
    {
      image: "/assets/images/slides/boxblacknew.png",
      category: "Bagpacks",
      title: "PU Leather Backpack",
      price: "****",
    },
    {
      image: "/assets/images/slides/boxblue.png",
      category: "Bagpacks",
      title: "PU Leather Backpack",
      price: "****",
    },
    {
      image: "/assets/images/slides/boxHdesign.png",
      category: "Bagpacks",
      title: "PU Leather Backpack",
      price: "****",
    },
    {
      image: "/assets/images/slides/boxwhite.png",
      category: "Bagpacks",
      title: "PU Leather Backpack",
      price: "****",
    },
    {
      image: "/assets/images/slides/erkebag.png",
      category: "Bagpacks",
      title: "PU Leather Backpack",
      price: "****",
    },
    {
      image: "/assets/images/slides/gucci2.png",
      category: "Bagpacks",
      title: "PU Leather Backpack",
      price: "****",
    },

    // /assets/images/slides/gucci.png
    // /assets/images/slides/hempganesh.png
    // /assets/images/slides/hemptree.png
    // /assets/images/slides/jordan.png
    // /assets/images/slides/ladiesdoll.png
    // /assets/images/slides/ladiesdoll.png
    // /assets/images/slides/LVwhite.png
    // /assets/images/slides/lvyellowborder.png
    // /assets/images/slides/lvyellowborder2.png
    // /assets/images/slides/nike.png
    // /assets/images/slides/nikeblack.png
    // /assets/images/slides/nikeblue.png
    // /assets/images/slides/nikegolden.png
    // /assets/images/slides/nikegray.png
    // /assets/images/slides/nikered.png
    // /assets/images/slides/thrasher.png
    // /assets/images/slides/zeroladies.png
  ];

  return (
    <>
      <div className="container mx-auto">
        <h2 className="productText font-bold md:text-4xl sm:text-3xl text-2xl lg:text-5xl text-center uppercase mt-20 w-fit mx-auto font-signika">
          Products
        </h2>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 justify-around sm:justify-evenly gap-5">
              {BagInfo.map((items) => (
                <>
                  <div className="lg:w-52 md:w-40 w-24 rounded-se-none my-5 hover:shadow-md">
                    <a className="block relative lg:h-52 md:h-40 h-24 rounded-se-lg rounded-ss-lg overflow-hidden cursor-pointer">
                      <Image
                        width={100}
                        height={100}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block hover:scale-150 transition-all"
                        src={items.image}
                      />
                    </a>
                    <div className="mt-4 px-2 pb-3">
                      <h3 className="text-gray-500 text-[6px] sm:text-xs tracking-widest title-font mb-1">
                        {items.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-[10px] tracking-tight sm:text-[18px] font-medium">
                        {items.title}
                      </h2>
                      <p className="mt-1 text-[8px] sm:text-[12px] tracking-tighter sm:tracking-[.2em]">
                        Rs. {items.price}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;
