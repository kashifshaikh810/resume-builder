import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const DropDownMenu = (props) => {
  const navigate = useNavigate();
  return (
    <>
      {props.isMenuShown ? (
        <div className="bg-white w-2/12 h-40 absolute right-7 top-16 border-2 border-gray-100 shadow-xl rounded-lg pt-0.5">
          <p
            className="text-base pl-5 pt-3 text-style"
            onClick={() => navigate("/app/account")}
          >
            Account Settings
          </p>
          <p className="text-base pl-5 pt-3 text-style">Updates</p>
          <p className="text-base pl-5 pt-3 text-style">FAQ</p>
          <p className="text-base pl-5 pt-3 text-style">Log Out</p>
        </div>
      ) : null}
    </>
  );
};

export default DropDownMenu;
