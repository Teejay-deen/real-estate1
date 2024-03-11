import React from "react";

import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <Header className=" py-6 border-b mb-12">
      <div className="container mx-auto flex justify-between gap-2">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div>
          <Link to="">Sign In</Link>
          <Link to="">Sign up</Link>
        </div>
      </div>
    </Header>
  );
};

export default Header;
