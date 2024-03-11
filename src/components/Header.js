import React from "react";

import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b ">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className="flex gap-5 ">
          <Link className="bg-violet-700 hover:text-violet-800 text-white px-4 py-3 rounded-lg transition" to="">
            Sign in
          </Link>
          <Link
            className="bg-violet-700 hover:text-violet-800 text-white px-4 py-3 rounded-lg transition"
            to=""
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
