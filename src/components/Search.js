import React, { useContext } from "react";
import CountryDropDown from "../components/CountryDropdown";
import PropertyDropDown from "../components/PropertyDropdown";
import PriceRangeDropDown from "../components/PriceRangeDropdown";

// import icons
import { RiSearch2Line } from "react-icons/ri";
import { HouseContext } from "./HouseContext";

const Search = () => {
  
  return (
    <div className="px-[20px] max-w-[1170px] py-6 mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-4 relative lg:top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-full">
      <CountryDropDown />
      <PropertyDropDown />
      <PriceRangeDropDown />
      <button className="bg-violet-700 hover:bg-violet-800 text-white transition w-full lg:max-w-[162px] h-16 rounded-full flex justify-center items-center text-lg">
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
