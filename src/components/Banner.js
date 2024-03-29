import React from "react";
import Image from "../assets/img/house-banner.png";
import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[48px] font-semibold leading-none mb-6">
            <span className="text-violet-900">Rent </span>Your Dream House With Us.
          </h1>
          <p className="max-w-[480px] mb-8 ">
          House is a place where we can shelter and it gives us a protection from rain, heat , storm etc. Everyone has their own choice on what type of house they feel comfortable to live, so do I. I enjoy to live in calm and open environment, so house built on small land won't be my choice. I want a large open space surrounded by compound where I can stroll especially when I feel bored on my job.
          </p>
        </div>

        {/* image */}
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
