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
      <div className="grid grid-cols-[60px_minmax(200px,_1fr)_100px]">
        <div>
          <p className="text-[3px] font-bold">{jobTitle}</p>
          <p className="text-[3px]">{email}</p>
          <p className="text-[3px]">{phone}</p>
          <p className="text-[3px] mt-1">{address}</p>
        </div>
        <div>
          <p className="text-base font-bold relative -top-1 w-4/12">
            {fullName}
          </p>
        </div>
      </div>

      {/* line */}
      <div className="w-[100%] h-[1px] bg-gray-100 mt-1.5 mb-1.5" />

      <div className="grid grid-cols-[60px_minmax(200px,_1fr)_100px]">
        {/* for creating column */}
        <div></div>

        <div>
          <div className="bg-black max-w-max min-w-max pl-[2px] pr-[2px]">
            <p className="text-white text-[4px]">
              {hiringManagerName || companyName ? `To:` : ``}{" "}
              {hiringManagerName}
              {hiringManagerName && companyName ? `,` : ``} {companyName}
            </p>
          </div>

          <div className="mt-1.5">
            <p className="text-[3.5px]">{letterDetails}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterTorontoTemplate;
