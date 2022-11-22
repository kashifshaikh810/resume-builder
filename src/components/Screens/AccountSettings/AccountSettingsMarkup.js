import React from "react";
import "./styles.css";
import Header from "../../Header/Header";
import { TfiInkPen } from "react-icons/tfi";
import { GrFacebookOption } from "react-icons/gr";
import MyButton from "../../MyButton/MyButton";

const AccountSettingsMarkup = (props) => {
  return (
    <div>
      <Header {...props} name="app" />
      <div className="pt-12 pl-5 bg-blue-50">
        <div className="flex flex-col w-6/12 items-center self-center">
          <p className="text-2xl text-black font-bold">Account Settings</p>
        </div>
        <div className="flex flex-col w-4/12 items-center self-center mt-4 ml-8">
          <p className="text-sm tracking-wider text-gray-400">YOUR PLAN</p>
        </div>

        <div className="flex w-11/12 justify-center mt-4">
          <div className="bg-white flex flex-row justify-center items-center w-9/12 h-auto pt-5 pb-5 rounded-md">
            <div className="bg-black w-10 h-10 pl-2 pr-2 rounded-full flex justify-center items-center ml-10 mr-5">
              <TfiInkPen size={20} color="#fff" />
            </div>
            <div className="flex flex-row items-center">
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

        <div className="flex flex-col w-4/12 items-center self-center mt-5 ml-8">
          <p className="text-sm tracking-wider text-gray-400">ACCOUNT</p>
        </div>

        <div className="flex w-11/12 justify-center mt-2">
          <div className="bg-white w-9/12 h-auto pt-5 pb-5 rounded-md">
            <div className="flex flex-row ml-10">
              <div className="w-full">
                <p className="text-sm text-gray-400 pb-2">First Name</p>
                <input className="bg-gray-200 w-11/12 h-9 pl-4 pr-4 text-blue-400 border-none overflow-hidden outline-none" />
              </div>

              <div className="ml-8 w-full">
                <p className="text-sm text-gray-400 pb-2">Last Name</p>
                <input className="bg-gray-200 w-11/12 h-9 pl-4 pr-4 text-blue-400 border-none overflow-hidden outline-none" />
              </div>
            </div>

            <div className="flex flex-row ml-10 mt-5">
              <div className="w-full">
                <p className="text-sm text-gray-400 pb-2">Email</p>
                <input className="bg-gray-200 w-11/12 h-9 pl-4 pr-4 text-blue-400 border-none overflow-hidden outline-none" />
              </div>

              <div className="ml-8 w-full">
                <p className="text-sm text-gray-500 mt-6">
                  Use this email to log in to your Resume.io account and receive
                  notifications.
                </p>
              </div>
            </div>
            <div className="flex flex-1 justify-end mt-4 mb-2">
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

        <div className="flex flex-col w-4/12 items-center self-center mt-5 ml-8">
          <p className="text-sm tracking-wider text-gray-400">SOCIAL PROFILE</p>
        </div>

        <div className="flex w-11/12 justify-center mt-2">
          <div className="bg-white w-9/12 h-auto pt-5 pb-5 mb-10 rounded-md">
            <div className="flex flex-row">
              <div className="flex flex-row items-center pl-5">
                <GrFacebookOption />
                <p className="pl-2 text-base">Facebook</p>
              </div>

              <div className="flex flex-1 justify-end">
                <MyButton
                  {...props}
                  title="Connect"
                  className="bg-white mr-5"
                  textStyle="text-blue-400 button-text"
                  onPress={(e) => {}}
                  loading={false}
                />
              </div>
            </div>
            <div className="flex flex-1 justify-center">
              <div className="w-full h-0.5 bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettingsMarkup;
