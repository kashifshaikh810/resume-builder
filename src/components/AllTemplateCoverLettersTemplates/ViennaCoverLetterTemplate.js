import React from "react";

const ViennaCoverLetterTemplate = (props) => {
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
      ml-5
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
        <div className="flex flex-1 flex-col pt-[6.5rem] ml-[2.5rem] pb-[4rem]">
          <div>
            <p className="text-4xl font-semibold">{fullName}</p>
            <p className="text-lg mt-1.5">{jobTitle}</p>
          </div>

          <div className="mt-5 w-5/12">
            <p className="text-xs font-bold">
              {hiringManagerName || companyName ? `To:` : ``}{" "}
              {hiringManagerName}
              {hiringManagerName && companyName ? `,` : ``} {companyName}
            </p>
            <p className="text-xs mt-[2px]">{letterDetails}</p>
          </div>

          <div className="grid flex-1 justify-center items-end grid-cols-[200px_minmax(900px,_1fr)_100px]">
            <div className="flex flex-1 flex-row items-center flex-wrap">
              <p className="text-xs">{address}</p>
              {(address && phone) || email ? (
                <div className="w-[1.5px] h-[1.5px] bg-black mr-[5px] ml-[5px]" />
              ) : (
                <></>
              )}
              <p className="text-xs">{phone}</p>
              {phone && email ? (
                <div className="w-[1.5px] h-[1.5px] bg-black mr-[5px] ml-[5px]" />
              ) : (
                <></>
              )}

              <p className="text-xs underline">{email}</p>
            </div>
            <div className="flex flex-1 justify-end">
              <div className="w-8/12 h-3 bg-green-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViennaCoverLetterTemplate;
