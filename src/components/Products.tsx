import React from "react";
import Image from "next/image";

const Products = () => {
  const BagInfo = [
    {
      image: "/images/JeepBrown.png",
      category: "Bagpacks",
      title: "PU Leather Backpack",
      price: 1299,
    },
    {
      image: "/images/JeepBlack.png",
      category: "Bagpacks",
      title: "PU Leather Backpack",
      price: 1299,
    },
  ];

  return (
    <>
      <div className="container mx-auto">
        <h2 className="productText font-bold md:text-4xl sm:text-3xl text-2xl lg:text-5xl text-center uppercase mt-20 w-fit mx-auto font-signika">
          Products
        </h2>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 justify-around sm:justify-start gap-5">
              {BagInfo.map((items) => (
                <>
                  <div className="lg:w-52 md:w-40 w-24 rounded-lg">
                    <a className="block relative lg:h-52 md:h-40 h-24 rounded overflow-hidden">
                      <Image
                        width={100}
                        height={100}
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={items.image}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {items.category}
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {items.title}
                      </h2>
                      <p className="mt-1">Rs. {items.price}</p>
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
