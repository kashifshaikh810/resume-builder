import React from "react";

const NewYorkCoverLetterTemplate = (props) => {
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
      pl-10 pb-10 
      unselectable
      max-[768px]:border-none
      max-[768px]:ml-0
      max-[1029px]:pr-5 max-[1029px]:pl-5 
      "
    >
      <div className="flex bg-white flex-col w-full overflow-hidden h-[900px] rounded-md hover:default">
        <div className="m-6 p-6 w-full">
          <div className="grid grid-cols-[250px_minmax(500px,_1fr)_100px] -space-x-[3.5rem]">
            <div className="w-8/12 flex flex-col items-end">
              <div className="flex w-9/12 h-auto flex-col items-end">
                <p className="text-2xl font-semibold text-end uppercase">
                  {fullName}
                </p>
                <p className="text-xs uppercase mt-2.5">{jobTitle}</p>
              </div>

              <div className="flex flex-col items-end mt-14">
                <p className="text-xs text-black font-bold">
                  {hiringManagerName || companyName ? `To` : ``}
                </p>
                <p className="text-xs">{hiringManagerName}</p>
                <p className="text-xs">{companyName}</p>
              </div>

              <div className="flex flex-col items-end mt-14">
                <p className="text-xs text-black font-bold">
                  {fullName || jobTitle || address || email || phone
                    ? `From`
                    : ``}
                </p>
                <p className="text-xs">{fullName}</p>
                <p className="text-xs">{jobTitle}</p>
                <p className="text-xs">{address}</p>
                <p className="text-xs">{phone}</p>
                <p className="text-xs underline">{email}</p>
              </div>
            </div>
            <div className="w-full h-[50rem] border-l border-black pl-6 pt-[4.6rem]">
              <p className="text-xs leading-4">{letterDetails}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewYorkCoverLetterTemplate;
