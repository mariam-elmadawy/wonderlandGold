import { Link } from "@remix-run/react";
import React from "react";

export default function Promo() {
  return (
    <div className="bg-promo bg-center bg-cover h-[50vh]">
      <div className="backdrop-brightness-50 w-full h-full">
        <div className="mx-auto py-24 px-20 text-center text-white flex justify-center items-center flex-col">
          <h1 className="text-xl md:text-3xl font-bold uppercase text-yellow-600 ">
            Best Jewellery For You!
          </h1>

          <h1 className="font-bold block text-2xl md:text-4xl pb-8">
            Get 50% Offer
          </h1>
          <Link to="" className="btn">
            get started
          </Link>
        </div>
      </div>
    </div>
  );
}
