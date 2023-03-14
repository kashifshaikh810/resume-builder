import React from "react";
import { TfiInkPen } from "react-icons/tfi";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { MdOutlineDoneOutline } from "react-icons/md";
import { RiLoader4Fill } from "react-icons/ri";

import Header from "../../Header/Header";
import DropDownMenu from "../../DropDownMenu/DropDownMenu";
import MyButton from "../../MyButton/MyButton";
import "./styles.css";

const AccountSettingsMarkup = (props) => {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    onSaveHandler,
    loading,
    isUpdateLoading,
    isDone,
    deleteAccountOnClickHandler,
  } = props;

  return (
    <div>
      <Header {...props} name="app" />

      <DropDownMenu {...props} name="app" />

      <div className="m-auto bg-blue-50 flex-col main">
        <div className="main-child">
          <div className="pt-14 pl-6 max-[767px]:pl-7 max-[767px]:pt-5">
            <p className="text-2xl text-black font-bold">Account Settings</p>
          </div>
          <div className="mt-4 pl-6 max-[767px]:pl-1">
            <p className="text-xs tracking-widest text-gray-400 max-[767px]:pl-6">
              YOUR PLAN
            </p>
          </div>

          <div className="mt-4 max-[767px]:w-full">
            <div className="bg-white flex flex-row justify-center items-center w-full h-auto pt-5 pb-5 rounded-md pl-7 pr-6 mb-2 max-[767px]:w-full">
              <div className="bg-black w-10 h-10 pl-2 pr-2 rounded-full flex justify-center items-center mr-5 max-[767px]:ml-0">
                <TfiInkPen size={20} color="#fff" />
              </div>
              <div className="flex flex-row items-center max-[767px]:block">
                <div>
                  <p>Free Account</p>
                  <p className="text-sm text-gray-400 w-9/12">
                    You are on the free plan. You can save your data and search
                    for jobs. Upgrade for PDF downloads & premium features.
                  </p>
                </div>
                <MyButton
                  {...props}
                  title="Upgrade"
                  className="bg-white mr-2 max-[767px]:mt-2"
                  textStyle="text-blue-400 button-text"
                  onPress={(e) => {}}
                  loading={false}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 ml-7 max-[767px]:ml-3 max-[767px]:pl-3">
            <p className="text-xs tracking-widest text-gray-400">ACCOUNT</p>
          </div>

          <div className="mt-2 max-[767px]:w-full">
            <div className="bg-white w-full h-auto pt-5 pb-5 rounded-md pr-2 mb-7 max-[767px]:w-full max-[767px]:pl-4">
              <div className="flex flex-row ml-7 max-[767px]:block max-[767px]:ml-2">
                <div className="w-full max-[767px]:block">
                  <p className="text-sm text-gray-400 pb-2">First Name</p>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={`${
                      loading ? `animate-pulse` : ``
                    } bg-gray-200 caret-blue-400 w-11/12 h-9 pl-4 pr-4 text-gray-800 border-none overflow-hidden outline-none max-[767px]:w-full`}
                  />
                </div>

                <div className="ml-8 w-full max-[767px]:ml-0 max-[767px]:mt-4">
                  <p className="text-sm text-gray-400 pb-2">Last Name</p>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={`${
                      loading ? `animate-pulse` : ``
                    } bg-gray-200 caret-blue-400 w-11/12 h-9 pl-4 pr-4 text-gray-800 border-none overflow-hidden outline-none max-[767px]:w-full`}
                  />
                </div>
              </div>

              <div className="flex flex-row mr-10 ml-7 mt-5 max-[767px]:block max-[767px]:ml-2 max-[767px]:mr-0">
                <div className="w-full max-[767px]:block">
                  <p className="text-sm text-gray-400 pb-2">Email</p>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={` ${
                      loading ? `animate-pulse` : ``
                    }bg-gray-200 caret-blue-400 w-11/12 h-9 pl-4 pr-4 text-gray-800 border-none overflow-hidden outline-none max-[767px]:w-full`}
                  />
                </div>

                <div className="ml-10 w-10/12 max-[767px]:ml-0">
                  <p className="text-sm text-gray-500 mt-6">
                    Use this email to log in to your Resume.io account and
                    receive notifications.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-end mt-4 mb-2 max-[767px]:block max-[767px]:ml-2 mr-2">
                {isUpdateLoading ? (
                  <RiLoader4Fill
                    name="RiLoader4Fill"
                    size={20}
                    className="text-sky-400 animate-spin"
                  />
                ) : (
                  ""
                )}
                {isDone ? (
                  <div className="bg-green-400 flex justify-center items-center rounded-full w-5 h-5">
                    <MdOutlineDoneOutline
                      name="MdOutlineDoneOutline"
                      size={12}
                      color="#fff"
                    />
                  </div>
                ) : (
                  ""
                )}
                <MyButton
                  {...props}
                  title={isUpdateLoading ? "Saving..." : "Save"}
                  className="bg-white ml-2 mr-5"
                  textStyle="text-blue-400 button-text"
                  onPress={(e) => (isUpdateLoading ? `` : onSaveHandler())}
                  loading={false}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 pl-6">
            <p className="text-xs tracking-widest text-gray-400">
              SOCIAL PROFILE
            </p>
          </div>

          <div className="mt-2 max-[767px]:block max-[767px]:w-full">
            <div className="bg-white w-full h-auto pt-5 pb-5 mb-2  rounded-md pr-4 max-[767px]:w-full max-[767px]:pr-2 max-[767px]:pl-0">
              <div className="flex flex-row">
                <div className="flex flex-row items-center pl-5">
                  <GrFacebookOption color="rgb(59, 89, 152)" />
                  <p className="pl-2 text-base">Facebook</p>
                </div>

                <div className="flex flex-1 justify-end">
                  <MyButton
                    {...props}
                    title="Connect"
                    className="bg-white mr-6"
                    textStyle="text-blue-400 button-text"
                    onPress={(e) => {}}
                    loading={false}
                  />
                </div>
              </div>
              <div className="flex flex-1 justify-center pt-5">
                <div className="w-11/12 h-0.5 bg-gray-100" />
              </div>

              <div className="flex flex-row mt-5">
                <div className="flex flex-row items-center pl-5">
                  <FaLinkedinIn color="rgb(0, 119, 181)" />
                  <p className="pl-2 text-base">LinkedIn</p>
                </div>

                <div className="flex flex-1 justify-end">
                  <MyButton
                    {...props}
                    title="Connect"
                    className="bg-white mr-6"
                    textStyle="text-blue-400 button-text"
                    onPress={(e) => {}}
                    loading={false}
                  />
                </div>
              </div>
              <div className="flex flex-1 justify-center pt-6">
                <div className="w-11/12 h-0.5 bg-gray-100" />
              </div>

              <div className="flex flex-row mt-5">
                <div className="flex flex-row items-center pl-5">
                  <FcGoogle />
                  <p className="pl-2 text-base">Google</p>
                </div>

                <div className="flex flex-1 justify-end">
                  <MyButton
                    {...props}
                    title="Connect"
                    className="bg-white mr-6"
                    textStyle="text-blue-400 button-text"
                    onPress={(e) => {}}
                    loading={false}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 pl-6 max-[767px]:ml-3 max-[767px]:pl-4">
            <p className="text-xs tracking-widest text-gray-400">
              EMAIL NOTIFICATIONS
            </p>
          </div>

          <div className="mt-2 max-[767px]:w-full">
            <div className="bg-white w-full h-auto pt-5 pb-5 mb-3 rounded-md pl-6 pr-5 max-[767px]:w-full max-[767px]:pr-2 max-[767px]:pl-6">
              <div
                className="flex flex-row cursor-pointer"
                onClick={() => props?.setIsUpdate(!props?.isUpdate)}
              >
                <div className="items-center text-black">
                  <p>Updates and Offers</p>
                  <p className="text-xs text-gray-500">
                    Discounts, special offers, new features and more
                  </p>
                </div>

                <div className="flex flex-1 justify-end items-center">
                  {props?.isUpdate ? (
                    <BsToggleOn size={30} className="mr-6 text-blue-400" />
                  ) : (
                    <BsToggleOff size={30} className="mr-6 text-gray-400" />
                  )}
                </div>
              </div>
              <div className="flex flex-1 justify-center pt-6">
                <div className="w-11/12 h-0.5 bg-gray-100" />
              </div>

              <div
                className="flex flex-row mt-5 cursor-pointer"
                onClick={() => props?.setIsViews(!props?.isViews)}
              >
                <div className="items-center text-black">
                  <p>Resume Analytics</p>
                  <p className="text-xs text-gray-500">
                    Views, downloads and monthly statistics for each resume
                  </p>
                </div>

                <div className="flex flex-1 justify-end items-center">
                  {props?.isViews ? (
                    <BsToggleOn size={30} className="mr-6 text-blue-400" />
                  ) : (
                    <BsToggleOff size={30} className="mr-6 text-gray-400" />
                  )}
                </div>
              </div>
              <div className="flex flex-1 justify-center pt-6">
                <div className="w-11/12 h-0.5 bg-gray-100" />
              </div>

              <div
                className="flex flex-row mt-5 cursor-pointer"
                onClick={() => props?.setIsUseful(!props?.isUseful)}
              >
                <div className="items-center text-black">
                  <p>Resume and Job Tips Newsletter</p>
                  <p className="text-xs text-gray-500">
                    Useful resume and job tips! Straight to your inbox every 2
                    weeks
                  </p>
                </div>

                <div className="flex flex-1 justify-end items-center">
                  {props?.isUseful ? (
                    <BsToggleOn size={30} className="mr-6 text-blue-400" />
                  ) : (
                    <BsToggleOff size={30} className="mr-6 text-gray-400" />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 pl-6 max-[767px]:pl-6">
            <p className="text-xs tracking-widest text-gray-400">DANGER ZONE</p>
          </div>

          <div className="flex flex-col w-full justify-center items-center mt-4 max-[767px]:block max-[767px]:w-full">
            <div className="bg-white flex flex-row justify-center items-center w-full h-auto pt-8 pb-8 mb-4 rounded-md pr-5 max-[767px]:flex-col max-[767px]:items-start max-[767px]:w-full max-[767px]:pr-0">
              <p className="text-xs text-gray-400 pl-5 ml-1 max-[767px]:pl-5">
                Once you delete your account, it cannot be undone. This is
                permanent.
              </p>

              <div className="flex flex-1 justify-end max-[767px]:ml-3 max-[767px]:pl-3 max-[767px]:mt-2">
                <MyButton
                  {...props}
                  title="Delete Account"
                  className="bg-white mr-5"
                  textStyle="text-red-400 delete-button"
                  onPress={(e) => deleteAccountOnClickHandler()}
                  loading={false}
                />
              </div>
            </div>
          </div>
          <p className="mb-10 pl-6 w-7/12 text-gray-400 text-sm max-[767px]:w-7/12 max-[767px]:pb-4 max-[767px]:pl-4 max-[767px]:ml-2">
            Need help? Have questions or feedback? Our team would love to hear
            from you —{" "}
            <b className="text-blue-500 cursor-pointer">contact our support</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsMarkup;
