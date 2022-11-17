import React from "react";
import "./styles.css";
import Header from "../Header/Header";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const resumeData = [
  { title: "Resume Templates" },
  { title: "Resume Examples" },
  { title: "Resume Builder" },
  { title: "Resume Writing" },
];

const coverLetterData = [
  { title: "Cover Letter Templates" },
  { title: "Cover Letter Examples" },
  { title: "Cover Letter Builder" },
  { title: "Cover Letter Writing" },
];

const otherData = [
  { title: "About Us" },
  { title: "FAQ" },
  { title: "Blog" },
  { title: "Affiliates" },
  { title: "Contact Us" },
];

const SideDrawer = (props) => {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <Header {...props} />

      <div className="pl-4 pt-4">
        <p className="text-sm text-gray-400 tracking-wider">RESUME</p>

        <div className="pt-2">
          {resumeData.map((item, i) => (
            <div key={i} className="pt-1.5">
              <p className="font-bold">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="pt-5">
          <p className="text-sm text-gray-400 tracking-wider">COVER LETTER</p>

          <div className="pt-2">
            {coverLetterData.map((item, i) => (
              <div key={i} className="pt-1.5">
                <p className="font-bold">{item.title}</p>
              </div>
            ))}
          </div>

          <div className="pt-5 flex flex-row items-center">
            <p
              className="text-base text-blue-500 font-bold cursor-pointer"
              onClick={() => navigate("/app/auth/sign-in")}
            >
              My Account
            </p>
            <BiChevronRight size={23} className="text-blue-500" />
          </div>
        </div>
      </div>
      <div className="pt-4 pl-4 pb-10 mt-4 bg-gray-300 flex flex-1 flex-col">
        {otherData.map((item, i) => (
          <div className="pt-1">
            <p className="text-base">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideDrawer;
