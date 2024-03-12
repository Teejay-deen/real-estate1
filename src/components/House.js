import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({ house }) => {
  const { image, type, address, country, bedrooms, bathrooms, surface, price } =
    house;
  return (
    <div className="bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
      <img className="mb-8 " src={image} alt="" />
      <div className="mb-4 gap-x-2 flex text-sm">

        <div className="bg-green-700 rounded-full text-white px-4">{type}</div>

        <div className="bg-violet-500 rounded-full text-white px-4">
          {country}
        </div>
      </div>
      <div className="text-lg max-w-[260px] font-semibold ">{address}</div>
      <div className="flex gap-x-4 my-4">
        <div className="flex gap-1 text-gray-600 items-center">
          <div className="text-[20px]">
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>

        <div className="flex gap-1 text-gray-600 items-center">
          <div className="text-[20px]">
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>

        <div className="flex gap-1 text-gray-600 items-center">
          <div className="text-[20px]">
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className="text-violet-600 font-semibold mb-4 ">{price}</div>
    </div>
  );
};

export default House;
