import React from "react";
import logo from "../assets/img/logo.svg";
import EyeIcon from "../assets/img/Eye.svg";

const Header = () => {
  return (
    <>
      <div className=" w-full flex justify-between h-[59px] px-[60px]">
        <img
          className="inline-flex items-center gap-5 w-[30px] flex-shrink-0 cursor-pointer"
          alt="logo"
          src={logo}
        />
        <ul className="inline-flex items-center gap-5 uppercase font-extrabold text-white tracking-wider text-xs h-full leading-10 cursor-pointer">
          <li>Sign In</li>
          <li>Legal</li>
          <li>Licenses</li>
          <li>Security</li>
          <li>Careers</li>
          <li>Press</li>
          <li>Support</li>
          <li>Status</li>
          <li>Codeblog</li>
        </ul>
        <img
          className="inline-flex items-center gap-5 w-16 flex-shrink-0 cursor-pointer"
          alt="eye-button"
          src={EyeIcon}
        />
      </div>
    </>
  );
};

export default Header;
