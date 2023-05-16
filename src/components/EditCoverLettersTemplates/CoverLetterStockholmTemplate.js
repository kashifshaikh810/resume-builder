import React from "react";

const CoverLetterStockholmTemplate = (props) => {
  const { coverLetterData } = props;

  return (
    <div className="m-6">
      <div>
        <p className="text-[12px] font-bold">{coverLetterData?.fullName}</p>
        <p className="text-[6px] relative -top-1">
          {coverLetterData?.jobTitle}
        </p>
      </div>

      <div className="grid gap-x-14 grid-cols-[200px_minmax(900px,_1fr)_100px] mt-4">
        <div>
          <p className="text-[6px] leading-3">
            {coverLetterData?.letterDetails}
          </p>
        </div>
        <div>
          <p className="text-[6px] font-bold">
            {coverLetterData?.companyName || coverLetterData?.hiringManagerName
              ? `To`
              : ``}
          </p>
          <p className="text-[6px]">{coverLetterData?.companyName}</p>
          <p className="text-[6px]">{coverLetterData?.hiringManagerName}</p>

          <div className="mt-2">
            <p className="text-[6px] font-bold">
              {coverLetterData?.fullName ||
              coverLetterData?.jobTitle ||
              coverLetterData?.address ||
              coverLetterData?.phone ||
              coverLetterData?.email
                ? `From`
                : ``}
            </p>
            <p className="text-[6px]">{coverLetterData?.fullName}</p>
            <p className="text-[6px]">{coverLetterData?.jobTitle}</p>
            <p className="text-[6px]">{coverLetterData?.address}</p>
            <p className="text-[6px]">{coverLetterData?.phone}</p>
            <p className="text-[6px] text-blue-500">{coverLetterData?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverLetterStockholmTemplate;
