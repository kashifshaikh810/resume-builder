import React from "react";
import Logo from "../images/logo.jpeg";

const Header = (props) => {
  return (
    <div className="flex flex-1 p-3 max-h-20 justify-center items-center bg-white">
      <div className="flex flex-row items-center">
        <img src={Logo} className="w-8/12 h-20" alt="png" />
      </div>

      <div className="flex flex-1 flex-row items-center justify-center">
        <p className="text-base pr-10">Resume</p>
        <p className="text-base pr-10">Cover Letter</p>
        <p className="text-base pr-10">Resume Writing</p>
        <p className="text-base pr-10">Blog</p>
        <p className="text-base pr-10">FAQ</p>
      </div>
    </div>
  );
};

export default Header;
