import React, { useState, useEffect, useContext } from "react";

//IMPORT ICONS
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
//import headless ui

import { Menu } from "@headlessui/react";

//import house context

import { HouseContext } from "./HouseContext";

const PriceRangeDropDown = () => {
  const { price, setPrice } = useContext(HouseContext);

  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: "100,000-130,000",
    },
    {
      value: "130,000-160,000",
    },
    {
      value: "160,000-190,000",
    },
    {
      value: "190,000-220,000",
    },
    {
      value: "10,000-30,000",
    },
    {
      value: "30,000-50,000",
    },
  ];
  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="dropdown-btn w-full text-left rounded-full"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {price.price}
          </div>
          <div className="text-[13px]">Choose price range</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {[{ value: "All" }, ...prices].map((p, index) => {
          return (
            <Menu.Item
              onClick={() => {
                const _price = p.value.replaceAll(",", "").split("-");

                const min = parseInt(_price[0]);
                const max = parseInt(_price[1]);

                setPrice({ price: p.value, min, max });
              }}
              as="li"
              key={index}
              className="cursor-pointer hover:text-violet-700 transition"
            >
              {p.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropDown;
