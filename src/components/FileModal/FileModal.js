import React from "react";
import { IoMdClose } from "react-icons/io";
import AppButton from "../AppButton/AppButton";

const FileModal = (props) => {
  return (
    <>
      {props.showModal ? (
        <>
          <div className="justify-center bg-transparent items-center flex overflow-scroll fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-11/12 my-6 mx-auto max-w-3xl flex flex-col justify-center items-center">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-11/12 h-screen mt-10 bg-black opacity-96 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-end justify-end p-4 pb-0">
                  <IoMdClose
                    className="text-3xl text-gray-600 hover:cursor-pointer hover:text-gray-500"
                    onClick={() => props.setShowModal(false)}
                  />
                </div>
                {/*body*/}
                <div
                  className="divide-dashed border-white flex flex-col w-11/12 m-7 mt-0 h-screen justify-center items-center hover:cursor-pointer"
                  onClick={(e) => props.hiddenFileInput.current.click()}
                >
                  <input
                    type="file"
                    ref={props.hiddenFileInput}
                    accept="image/jpeg/png"
                    onChange={props.handleChange}
                    className="opacity-0"
                  />
                  <img
                    src="https://resume.io/assets/media/dropzone-icon44bc6cb8ad6ac19b4400.svg"
                    className="w-12 h-10 mb-2"
                    alt="img"
                  />
                  <p className="my-4 text-slate-500 text-lg leading-relaxed mt-2">
                    Select a photo from your computer
                  </p>
                  <AppButton
                    {...props}
                    title="Choose Image"
                    className="bg-blue-500 w-3/12 h-9 flex justify-center items-center rounded-md hover:cursor-pointer mt-2"
                    textStyle="text-white text-sm font-bold text-center"
                    onPress={() => {}}
                    loading={false}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default FileModal;
