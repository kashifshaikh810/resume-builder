import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { GrFacebookOption } from "react-icons/gr";
import { RiGoogleFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  clearErrors,
  signUpWithGoogle,
} from "../../../redux/actions/authAction";

import AppButton from "../../AppButton/AppButton";

const SocialSignUp = () => {
  const [isChangeFacebookTextColor, setIsChangeFacebookTextColor] =
    useState(false);
  const [isChangeGoogleTextColor, setIsChangeGoogleTextColor] = useState(false);
  const [isChangeBackBtnColor, setIsChangeBackBtnColor] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.userSignUp);

  const googleOnClickHandler = () => {
    dispatch(signUpWithGoogle());
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      alert("Successfully signup, Please login & lets begin");
      navigate("/app/auth/sign-in");
    }
  }, [dispatch, error, isAuthenticated, navigate]);

  return (
    <div className="flex-col flex flex-1 justify-center items-center">
      <div className="flex w-full h-24 justify-end pt-5 pr-5">
        <AiOutlineClose
          size={30}
          className="text-gray-300 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div>
        <p className="text-4xl font-bold text-blue-500">
          Connect your social profile
        </p>
        <p className="text-center text-base mt-4">
          Prefill your resume with data from your social profile
        </p>
      </div>
      <div className="mt-4 w-full h-full flex flex-col justify-center items-center">
        <div
          className={` pl-10 flex justify-between items-center w-[25rem] h-16 border-b border-gray-200 cursor-pointer ${
            isChangeFacebookTextColor ? `bg-blue-100` : `bg-blue-50`
          }`}
          onMouseEnter={() => setIsChangeFacebookTextColor(true)}
          onMouseLeave={() => setIsChangeFacebookTextColor(false)}
        >
          <div className="flex flex-row items-center">
            <GrFacebookOption name="GrFacebookOption" size={20} color="blue" />
            <p
              className={`ml-4 ${
                isChangeFacebookTextColor ? `text-blue-500` : `text-black`
              }`}
            >
              Facebook
            </p>
          </div>
          <div>
            <BiChevronRight size={25} className="text-blue-400 mr-4" />
          </div>
        </div>
        <div
          className={`pl-10 flex justify-between items-center w-[25rem] h-16 cursor-pointer  ${
            isChangeGoogleTextColor ? `bg-blue-100` : `bg-blue-50`
          }`}
          onMouseEnter={() => setIsChangeGoogleTextColor(true)}
          onMouseLeave={() => setIsChangeGoogleTextColor(false)}
          onClick={() => googleOnClickHandler()}
        >
          <div className="flex flex-row items-center">
            <RiGoogleFill name="RiGoogleFill" size={20} color="red" />
            <p
              className={`ml-4 ${
                isChangeGoogleTextColor ? `text-blue-500` : `text-black`
              }`}
            >
              Google
            </p>
          </div>
          <div>
            <BiChevronRight size={25} className="text-blue-400 mr-4" />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-row mt-7">
        <AppButton
          title="Back"
          className={`border mt-5 p-3 pl-10 pr-10 mr-20 rounded-md cursor-pointer ${
            isChangeBackBtnColor ? `border-blue-500` : `border-gray-200`
          }`}
          textStyle={`font-bold ${
            isChangeBackBtnColor ? `text-blue-500` : `text-black`
          }`}
          onPress={() => navigate("/app/auth/sign-in")}
          loading={false}
          onMouseEnter={() => setIsChangeBackBtnColor(true)}
          onMouseLeave={() => setIsChangeBackBtnColor(false)}
        />

        <AppButton
          title="Skip"
          className="bg-blue-500 mt-5 p-3 pl-10 ml-20 pr-10 rounded-md cursor-pointer hover:bg-blue-600"
          textStyle="text-white font-bold"
          onPress={() => navigate("/create-resume/introduction")}
          loading={false}
        />
      </div>
    </div>
  );
};

export default SocialSignUp;
