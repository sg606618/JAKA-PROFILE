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
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 justify-around sm:justify-start gap-3">
              {BagInfo.map((items) => (
                <>
                  <div className="lg:w-60 md:w-48 w-32 rounded-lg">
                    <a className="block relative lg:h-60 md:h-48 h-32 rounded overflow-hidden">
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
