import React from "react";

const CoverLetterStockholmTemplate = (props) => {
  const { coverLetterData } = props;

  return (
    <div className="m-3 mr-0 overflow-hidden">
      <div>
        <p className="text-[8px] font-bold">{coverLetterData?.fullName}</p>
        <p className="text-[3px] relative -top-[2px]">
          {coverLetterData?.jobTitle}
        </p>
      </div>

      <div className="grid gap-x-4 grid-cols-[120px_minmax(900px,_1fr)_100px] mt-4">
        <div>
          <p className="text-[3px] leading-[7px]">
            {coverLetterData?.letterDetails}
          </p>
        </div>
        <div>
          <p className="text-[3px] font-bold">
            {coverLetterData?.companyName || coverLetterData?.hiringManagerName
              ? `To`
              : ``}
          </p>
          <p className="text-[3px]">{coverLetterData?.companyName}</p>
          <p className="text-[3px]">{coverLetterData?.hiringManagerName}</p>

          <div className="mt-2">
            <p className="text-[3px] font-bold">
              {coverLetterData?.fullName ||
              coverLetterData?.jobTitle ||
              coverLetterData?.address ||
              coverLetterData?.phone ||
              coverLetterData?.email
                ? `From`
                : ``}
            </p>
            <p className="text-[3px]">{coverLetterData?.fullName}</p>
            <p className="text-[3px]">{coverLetterData?.jobTitle}</p>
            <p className="text-[3px]">{coverLetterData?.address}</p>
            <p className="text-[3px]">{coverLetterData?.phone}</p>
            <p className="text-[3px] text-blue-500">{coverLetterData?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterStockholmTemplate;
