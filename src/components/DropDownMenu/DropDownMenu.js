import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { CgHome } from "react-icons/cg";

const DropDownMenu = (props) => {
  const navigate = useNavigate();
  return (
    <>
      {props.isMenuShown ? (
        <div className="bg-white w-auto h-auto pb-4 fixed right-7 top-16 border-2 border-gray-100 shadow-xl rounded-lg pt-0.5">
          {props?.name === "app" ? (
            <>
              <div
                className="flex flex-row items-center m-5 cursor-pointer"
                onClick={() => navigate("/app")}
              >
                <CgHome size={20} color="rgb(26, 145, 240)" />
                <div className="ml-4">
                  <p className="text-base text-black text-style">Dashboard</p>
                  <p className="text-xs text-gray-400">
                    Your resumes and cover letters
                  </p>
                </div>
              </div>
              <div className="w-full h-0.5 bg-gray-100" />
            </>
          ) : null}
          <div className={`${props?.name === "app" && `ml-9`} mr-4`}>
            <p
              className="text-base pl-5 pt-3 text-style"
              onClick={() => navigate("/app/account")}
            >
              Account Settings
            </p>
            <p
              className="text-base pl-5 pt-3 text-style"
              onClick={() => {
                window.parent.open("https://updates.resume.io/");
                props.setIsMenuShown(false);
              }}
            >
              Updates
            </p>
            <p
              className="text-base pl-5 pt-3 text-style"
              onClick={() => {
                window.parent.open("https://help.resume.io/");
                props.setIsMenuShown(false);
              }}
            >
              FAQ
            </p>
            <p className="text-base pl-5 pt-3 text-style">Log Out</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DropDownMenu;
