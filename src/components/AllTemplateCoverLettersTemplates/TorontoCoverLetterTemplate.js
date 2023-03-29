import React from "react";

const TorontoCoverLetterTemplate = (props) => {
  const {
    fullName,
    jobTitle,
    address,
    email,
    phone,
    companyName,
    hiringManagerName,
    letterDetails,
  } = props?.coverLetterData || {};

  return (
    <div
      className="flex flex-col w-full h-[930px] 
      border-l border-gray-600 ml-5
      max-[1029px]:pl-1 pl-10 pb-10 
      unselectable
      max-[768px]:border-none
      max-[768px]:ml-0
      max-[768px]:p-5
      max-[1020px]:p-5
      "
    >
      <div className="flex bg-white w-full overflow-hidden h-[900px] rounded-md hover:default">
        <div className="m-4 overflow-hidden">
          <div className="grid grid-cols-[200px_minmax(200px,_1fr)_100px]">
            <div>
              <p className="text-xs font-bold">{jobTitle}</p>
              <p className="text-xs">{email}</p>
              <p className="text-xs">{phone}</p>
              <p className="text-xs mt-1.5">{address}</p>
            </div>
            <div>
              <p className="text-6xl font-bold relative -top-2">{fullName}</p>
            </div>
          </div>

          {/* line */}
          <div className="w-[50rem] h-[1px] bg-gray-100 mt-5 mb-5" />

          <div className="grid grid-cols-[200px_minmax(200px,_1fr)_100px]">
            {/* for creating column */}
            <div></div>

            <div>
              <div className="bg-black max-w-max min-w-max pl-[2px] pr-[2px]">
                <p className="text-white text-sm font-bold">
                  {hiringManagerName || companyName ? `To:` : ``}{" "}
                  {hiringManagerName}
                  {hiringManagerName && companyName ? `,` : ``} {companyName}
                </p>
              </div>

              <div className="mt-3">
                <p className="text-xs">{letterDetails}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TorontoCoverLetterTemplate;
