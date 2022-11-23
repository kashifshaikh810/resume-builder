import React from "react";
import "./styles.css";
import Header from "../../Header/Header";
import { TfiInkPen } from "react-icons/tfi";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import MyButton from "../../MyButton/MyButton";
import DropDownMenu from "../../DropDownMenu/DropDownMenu";

const AccountSettingsMarkup = (props) => {
  return (
    <div>
      <Header {...props} name="app" />

      <DropDownMenu {...props} name="app" />

      <div className="pt-12 pl-5 bg-blue-50">
        <div className="flex flex-col w-6/12 items-center self-center ml-8 account-settings">
          <p className="text-2xl text-black font-bold account-settings-text">
            Account Settings
          </p>
        </div>
        <div className="flex flex-col w-5/12 items-center self-center mt-4 ml-4 your-plan">
          <p className="text-xs tracking-widest text-gray-400 your-plan-text">
            YOUR PLAN
          </p>
        </div>

        <div className="flex w-11/12 justify-center mt-4 free-account-container">
          <div className="bg-white flex flex-row justify-center items-center w-9/12 h-auto pt-5 pb-5 rounded-md pl-7 pr-5 mb-2 free-account-main">
            <div className="bg-black w-10 h-10 pl-2 pr-2 rounded-full flex justify-center items-center ml-10 mr-5">
              <TfiInkPen size={20} color="#fff" />
            </div>
            <div className="flex flex-row items-center free-account-heading-container">
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
                className="bg-white mr-5"
                textStyle="text-blue-400 button-text"
                onPress={(e) => {}}
                loading={false}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-5/12 items-center self-center mt-5 ml-2 account-heading">
          <p className="text-xs tracking-widest text-gray-400">ACCOUNT</p>
        </div>

        <div className="flex w-11/12 justify-center mt-2 input-container">
          <div className="bg-white w-9/12 h-auto pt-5 pb-5 rounded-md pl-7 pr-8 mb-2 input-main">
            <div className="flex flex-row ml-10 firstName-lastName-inputs">
              <div className="w-full firstName-input-container">
                <p className="text-sm text-gray-400 pb-2">First Name</p>
                <input className="bg-gray-200 w-11/12 h-9 pl-4 pr-4 text-blue-400 border-none overflow-hidden outline-none firstName-input" />
              </div>

              <div className="ml-8 w-full lastName-input-container">
                <p className="text-sm text-gray-400 pb-2">Last Name</p>
                <input className="bg-gray-200 w-11/12 h-9 pl-4 pr-4 text-blue-400 border-none overflow-hidden outline-none lastName-input" />
              </div>
            </div>

            <div className="flex flex-row ml-10 mt-5 email-input-container">
              <div className="w-full">
                <p className="text-sm text-gray-400 pb-2">Email</p>
                <input className="bg-gray-200 w-11/12 h-9 pl-4 pr-4 text-blue-400 border-none overflow-hidden outline-none email-input" />
              </div>

              <div className="ml-8 w-full useThis-heading">
                <p className="text-sm text-gray-500 mt-6 useThis-text">
                  Use this email to log in to your Resume.io account and receive
                  notifications.
                </p>
              </div>
            </div>
            <div className="flex flex-1 justify-end mt-4 mb-2 save-button-container">
              <MyButton
                {...props}
                title="Save"
                className="bg-white mr-5"
                textStyle="text-blue-400 button-text"
                onPress={(e) => {}}
                loading={false}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-5/12 items-center self-center mt-5 ml-6">
          <p className="text-xs tracking-widest text-gray-400">
            SOCIAL PROFILE
          </p>
        </div>

        <div className="flex w-11/12 justify-center mt-2">
          <div className="bg-white w-9/12 h-auto pt-5 pb-5 mb-2 rounded-md pl-8 pr-8">
            <div className="flex flex-row">
              <div className="flex flex-row items-center pl-7">
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
            <div className="flex flex-1 justify-center pt-6">
              <div className="w-11/12 h-0.5 bg-gray-100" />
            </div>

            <div className="flex flex-row mt-5">
              <div className="flex flex-row items-center pl-7">
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
              <div className="flex flex-row items-center pl-7">
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

        <div className="flex flex-col w-6/12 items-center self-center mt-5">
          <p className="text-xs tracking-widest text-gray-400">
            EMAIL NOTIFICATIONS
          </p>
        </div>

        <div className="flex w-11/12 justify-center mt-2">
          <div className="bg-white w-9/12 h-auto pt-5 pb-5 mb-3 rounded-md pl-8 pr-8">
            <div
              className="flex flex-row cursor-pointer"
              onClick={() => props?.setIsUpdate(!props?.isUpdate)}
            >
              <div className="items-center pl-7 text-black">
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
              <div className="items-center pl-7 text-black">
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
              <div className="items-center pl-7 text-black">
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
        <div className="flex flex-col w-5/12 items-center self-center mt-4 ml-4">
          <p className="text-xs tracking-widest text-gray-400">DANGER ZONE</p>
        </div>

        <div className="flex flex-col w-11/12 justify-center items-center mt-4">
          <div className="bg-white flex flex-row justify-center items-center w-9/12 h-auto pt-8 pb-8 mb-4 rounded-md pr-5">
            <p className="text-xs text-gray-400 pl-14 ml-1">
              Once you delete your account, it cannot be undone. This is
              permanent.
            </p>

            <div className="flex flex-1 justify-end">
              <MyButton
                {...props}
                title="Delete Account"
                className="bg-white mr-5"
                textStyle="text-red-400 delete-button"
                onPress={(e) => {}}
                loading={false}
              />
            </div>
          </div>
          <p className="mb-10 w-5/12 text-gray-400 text-sm">
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
