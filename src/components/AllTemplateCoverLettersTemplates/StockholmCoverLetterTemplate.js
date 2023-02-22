import React from "react";
import { BsArrowsAngleContract } from "react-icons/bs";

import "./styles.css";

const StockholmCoverLetterTemplate = (props) => {
  const {
    fullName,
    jobTitle,
    address,
    email,
    phone,
    companyName,
    hiringManagerName,
    letterDetails,
  } = props?.coverLetterData;

  return (
    <div
      className="flex flex-col w-full h-[930px] 
        border-l border-gray-600 ml-5
        max-[1029px]:pl-1 pl-10 pb-10 
        unselectable
        max-[768px]:border-none
        max-[768px]:ml-0
        max-[620px]:h-[900px]
        max-[703px]:h-[880px]
        max-[610px]:h-[830px]
        max-[570px]:h-[780px]
        max-[535px]:h-[730px]
        max-[500px]:h-[680px]
        "
    >
      <div className="flex bg-white w-full max-[1029px]:w-11/12 overflow-hidden h-[900px] self-center rounded-md hover:default">
        <div className="m-8 p-8">
          <div>
            <p className="text-3xl font-bold">{fullName}</p>
            <p className="text-xs relative -top-1">{jobTitle}</p>
          </div>

          <div className="grid gap-x-20 grid-cols-[400px_minmax(900px,_1fr)_100px] mt-4 pt-4">
            <div>
              <p className="text-xs leading-4">{letterDetails}</p>
            </div>
            <div>
              <p className="text-xs font-bold">
                {companyName || hiringManagerName ? `To` : ``}
              </p>
              <p className="text-xs mt-1.5">{companyName}</p>
              <p className="text-xs mt-0.5">{hiringManagerName}</p>

              <div className="mt-2">
                <p className="text-xs font-bold">
                  {fullName || jobTitle || address || phone || email
                    ? `From`
                    : ``}
                </p>
                <p className="text-xs mt-1.5">{fullName}</p>
                <p className="text-xs mt-0.5">{jobTitle}</p>
                <p className="text-xs mt-0.5">{address}</p>
                <p className="text-xs mt-0.5">{phone}</p>
                <p className="text-xs mt-0.5 text-blue-500">{email}</p>
              </div>
            </div>
          </div>
        </div>

        {props?.isHovered ? (
          <div className="flex flex-1 justify-center items-center absolute top-64 left-72">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center">
              <BsArrowsAngleContract size={20} color="#fff" />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default StockholmCoverLetterTemplate;
