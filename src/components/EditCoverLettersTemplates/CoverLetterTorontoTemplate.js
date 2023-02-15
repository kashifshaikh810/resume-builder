import React from "react";

const CoverLetterTorontoTemplate = (props) => {
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
    <div className="m-2 overflow-hidden">
      <div className="grid grid-cols-[100px_minmax(200px,_1fr)_100px]">
        <div>
          <p className="text-[7px] font-bold">{jobTitle}</p>
          <p className="text-[7px]">{email}</p>
          <p className="text-[7px]">{phone}</p>
          <p className="text-[7px] mt-1.5">{address}</p>
        </div>
        <div>
          <p className="text-3xl font-bold relative -top-2">{fullName}</p>
        </div>
      </div>

      {/* line */}
      <div className="w-[89%] h-[1px] bg-gray-100 mt-2 mb-2" />

      <div className="grid grid-cols-[100px_minmax(200px,_1fr)_100px]">
        {/* for creating column */}
        <div></div>

        <div>
          <div className="bg-black max-w-max min-w-max pl-[2px] pr-[2px]">
            <p className="text-white text-[8px]">
              {hiringManagerName || companyName ? `To:` : ``}{" "}
              {hiringManagerName}
              {hiringManagerName && companyName ? `,` : ``} {companyName}
            </p>
          </div>

          <div className="mt-3">
            <p className="text-[8px]">{letterDetails}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterTorontoTemplate;
