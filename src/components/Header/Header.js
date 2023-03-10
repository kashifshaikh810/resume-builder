import React, { useEffect } from "react";
import { FaRegAddressCard } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { TfiUser } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

import MyButton from "../MyButton/MyButton";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, logOutAction } from "../../redux/actions/authAction";
import { LOGOUT_RESET } from "../../redux/constants/authConstants";

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useSelector((state) => state.currentUser);
  const { success, error } = useSelector((state) => state.logOut);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    if (success) {
      props.setIsMenuShown(!props?.isMenuShown);
      navigate("/");
      alert("Log Out Successfully");
      dispatch({ type: LOGOUT_RESET });
    }
  }, [dispatch, error, success, navigate, props]);

  const renderButton = () => {
    if (user && isAuthenticated) {
      return (
        <MyButton
          {...props}
          title="My Account"
          className="border-2 border-blue-200 p-3 pl-5 pr-5 rounded-md cursor-pointer button"
          textStyle="text-blue-400 font-bold"
          onPress={() => navigate("/app")}
          loading={false}
        />
      );
    } else {
      return (
        <div className="flex flex-row">
          <MyButton
            {...props}
            title="Log In"
            className="p-3.5 pl-6 pr-6 rounded-md cursor-pointer"
            textStyle="text-blue-400 hover:text-blue-600"
            onPress={() => navigate("/app/auth/log-in")}
            loading={false}
          />
          <MyButton
            {...props}
            title="Sign Up"
            className="bg-blue-500 hover:bg-blue-600 p-3.5 pl-6 pr-6 rounded-md cursor-pointer"
            textStyle="text-white font-bold"
            onPress={() => navigate("/create-resume/introduction")}
            loading={false}
          />
        </div>
      );
    }
  };

  return (
    <div
      className={`flex flex-1 p-6 ${
        props?.allowed === false ? `` : `pb-6`
      } max-h-20 items-center bg-white sticky top-0 overflow-hidden  ${
        props.isMenuShown ? `` : `z-50`
      } ${
        props.name === "app"
          ? props?.allowed === false
            ? `border-b-2 border-gray-50`
            : ``
          : `border-0`
      }`}
    >
      {props.name === "app" ? (
        <div className="flex flex-1">
          {props?.allowed === false || props?.name === "app" ? (
            <div
              className="flex flex-row items-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="bg-gray-400 p-2 rounded-full">
                <FaRegAddressCard size={25} color="#f3f3f3" />
              </div>
              <p className="pl-2 text-base font-bold">resume</p>
            </div>
          ) : null}
          <div className="flex flex-1 justify-end p-2">
            <div
              className="flex justify-center items-center w-10 h-10 bg-gray-100 rounded-full user-icon"
              onClick={() => props.setIsMenuShown(!props?.isMenuShown)}
            >
              <TfiUser size={20} className="text-gray-400" />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            className="flex flex-row items-center mainContainer cursor-pointer"
            onClick={() => navigate("/")}
          >
            <div className="bg-gray-400 p-2 rounded-full">
              <FaRegAddressCard size={25} color="#f3f3f3" />
            </div>
            <p className="pl-2 text-base font-bold">resume</p>
          </div>
          <div className="flex flex-1 flex-row justify-end items-center mainContainer">
            <p className="text-base">Resume</p>
            <BiChevronDown size={15} color="black" className="mr-8 ml-1" />
            <p className="text-base">Cover Letter</p>
            <BiChevronDown size={15} color="black" className="mr-8 ml-1" />
            <p className="text-base">Resume Writing</p>
            <BiChevronDown size={15} color="black" className="mr-8 ml-1" />
            <p className="text-base pr-10">Blog</p>
            <p className="text-base pr-10">FAQ</p>
            <div className="bg-gray-200 w-0.5 h-5 mr-10" />
            {renderButton()}
          </div>
          <div>
            {props?.toggleDrawer ? (
              <AiFillCloseCircle
                size={40}
                className="icon icon-style"
                onClick={props?.openDrawer}
              />
            ) : (
              <AiOutlineMenu
                size={40}
                className="icon icon-style"
                onClick={props?.openDrawer}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
