import React, { useEffect } from "react";

import "./styles.css";

const TorontoTemplate = (props) => {
  useEffect(() => {
    props.setTotalPage(2);
  }, [props]);

  const oneSectionTemplate = () => {
    if (true) {
      return (
        <div className="p-2">
          <div className="flex flex-row">
            {props.profileImage && (
              <>
                <img
                  src={props.profileImage}
                  alt="prof"
                  className="w-[3rem] h-[4rem]"
                />
                <div>
                  <p className="text-2xl font-bold ml-10 pl-10">hamza</p>
                  <p className="text-2xl font-bold ml-10 pl-10">khan</p>
                </div>
              </>
            )}
          </div>

          <div
            className={
              props.profileImage
                ? `grid grid-cols-[120px_minmax(200px,_1fr)_100px]`
                : `flex flex-row`
            }
          >
            <div>
              <div className={props.profileImage && `pt-1 mt-1`}>
                <p className="font-bold text-[6px]">Web Developer</p>
                <p className="text-[6px]">kashifshaikh910ss@gmail.com</p>
                <p className="text-[6px]">0313454533534</p>
                <p className="text-[6px]">grergrg, gregregreg, 2133, ffewfw</p>
              </div>

              <div className="pt-1 mt-1">
                <div>
                  <p className="text-[6px] font-bold">Date / Place of birth</p>
                  <p className="text-[6px]">24 / 342</p>
                </div>

                <div className="pt-1 mt-1">
                  <p className="text-[6px] font-bold">Driving License</p>
                  <p className="text-[6px]">232</p>
                </div>

                <div className="pt-1 mt-1">
                  <p className="text-[6px] font-bold">Nationality</p>
                  <p className="text-[6px]">342</p>
                </div>
              </div>
            </div>

            <div className={!props.profileImage && `w-7/12`}>
              {!props.profileImage && (
                <div>
                  <div>
                    <p className="text-2xl font-bold ml-4">hamza</p>
                    <p className="text-2xl font-bold ml-4">khan</p>
                  </div>
                </div>
              )}

              <div className="pt-2 mt-2 ml-1 w-11/12 h-full">
                <div className="bg-[#eeeeee] w-11/12 h-auto pl-3 pt-2 pb-2 rounded-2xl">
                  <p className="text-[10px] font-bold">Profile</p>
                  <p className="text-[5px] mt-1">profile content</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 h-[1.5px] w-10/12 mt-2 mb-2" />

          <div className="grid grid-cols-[200px_minmax(200px,_1fr)_100px]">
            <div>
              <div>
                <p className="text-[14px] font-bold">Employment History</p>
                <div className="">
                  <p className="bg-black max-w-max min-w-max text-[8px] text-white font-bold pl-1 pr-1">
                    fwefewe, at fwfef, wrfwrffewf
                  </p>
                </div>
                <p className="text-black tracking-widest text-[6px]">
                  12/2022-2022
                </p>
                <p className="text-gray-800 text-[6px] mt-0.5">fffwfwefwfe</p>
              </div>

              <div className="mt-5">
                <p className="text-[14px] font-bold">Education</p>
                <p className="bg-black max-w-max min-w-max text-[8px] text-white font-bold pl-1 pr-1">
                  fwefewe, at fwfef, wrfwrffewf
                </p>
                <p className="text-black tracking-widest text-[6px]">
                  12/2022-4/2022
                </p>
                <p className="text-gray-800 text-[6px] mt-0.5">fffwfwefwfe</p>
              </div>

              <div className="mt-5">
                <p className="text-[14px] font-bold">
                  Extra-curricular activities
                </p>
                <p className="bg-black max-w-max min-w-max text-[8px] text-white font-bold pl-1 pr-1">
                  fwefewe, at fwfef, wrfwrffewf
                </p>
                <p className="text-black tracking-widest text-[6px]">
                  6/2022-8/2022
                </p>
                <p className="text-gray-800 text-[6px] mt-0.5">fffwfwefwfe</p>
              </div>
            </div>

            <div className="flex flex-col flex-1 items-end mr-10">
              <div className="bg-[#eeeeee] w-11/12 h-auto pl-3 pt-2 pb-2 rounded-2xl">
                <p className="text-[14px] font-bold">Links</p>
                <p className="text-[6px] mt-0.5 underline">links content</p>
                <p className="text-[6px] mt-0.5 underline">links content</p>
                <p className="text-[6px] mt-0.5 underline">links content</p>
                <p className="text-[6px] mt-0.5 underline">links content</p>
              </div>

              <div className="bg-[#eeeeee] w-11/12 h-auto pl-3 pt-2 pb-2 mt-2 rounded-2xl">
                <p className="text-[14px] font-bold">Skills</p>
                <p className="text-[6px] mt-0.5">skill content</p>
              </div>

              <div className="bg-[#eeeeee] w-11/12 h-auto pl-3 pt-2 pb-2 mt-2 rounded-2xl">
                <p className="text-[14px] font-bold">Hobbies</p>
                <p className="text-[6px] mt-0.5">hobbies content</p>
              </div>

              <div className="bg-[#eeeeee] w-11/12 h-auto pl-3 pt-2 pb-2 mt-2 rounded-2xl">
                <p className="text-[14px] font-bold">Languages</p>
                <p className="text-[6px] mt-0.5">language content</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const twoSectionTemplate = () => {
    if (false) {
      return (
        <div
          className="grid grid-cols-[400px_minmax(333px,_1fr)_100px]
          p-2 pl-3"
        >
          <div>
            <div>
              <p className="bg-black max-w-max min-w-max text-[8px] text-white font-bold pl-1 pr-1">
                fwefewe, fwfef
              </p>
              <p className="text-black tracking-widest text-[6px]">
                7/2022-8/2022
              </p>
              <p className="text-gray-800 text-[6px] mt-0.5">fffwfwefwfe</p>
            </div>

            <div className="mt-5">
              <p className="text-[14px] font-bold">Internships</p>
              <p className="bg-black max-w-max min-w-max text-[8px] text-white font-bold pl-1 pr-1">
                regrg, at ewrggr, prfergg
              </p>
              <p className="text-black tracking-widest text-[6px]">
                6/2022-12/2022
              </p>
              <p className="text-gray-800 text-[6px] mt-0.5">eettttt</p>
            </div>
          </div>

          <div className="flex flex-col flex-1 items-end">
            <div className="bg-[#eeeeee] w-11/12 h-auto pl-3 pt-2 pb-2 mt-2 rounded-2xl">
              <p className="text-[14px] font-bold">Courses</p>
              <p className="text-[6px] font-bold mt-2">fewfwf at fewfeqw</p>
              <p className="text-[6px]">2/2022-4/2022</p>
            </div>

            <div className="bg-[#eeeeee] w-11/12 h-auto pl-3 pt-2 pb-2 mt-2 rounded-2xl">
              <p className="text-[14px] font-bold">Preferences</p>
              <p className="text-[6px] mt-0.5">fewfwfewfeqw</p>
              <p className="text-[6px]">fewfwfewfeqw</p>
              <p className="text-[6px]">fewfwfewfeqw</p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <div>
        {/* number 1 template  */}
        {oneSectionTemplate()}
      </div>
      <div>
        {/* number 2 template  */}
        {twoSectionTemplate()}
      </div>
    </div>
  );
};

export default TorontoTemplate;
