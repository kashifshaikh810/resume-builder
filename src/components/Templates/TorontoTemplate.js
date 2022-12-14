import React, { useEffect } from "react";

import "./styles.css";
import ProfileImage from "../images/profile.png";

const TorontoTemplate = (props) => {
  useEffect(() => {
    props.setTotalPage(2);
  }, [props]);

  const oneSectionTemplate = () => {
    if (props.page === 1) {
      return (
        <div className="p-5 pt-7">
          <div className="flex flex-row">
            <img
              src={ProfileImage}
              alt="prof"
              className="w-[6rem] h-[8.5rem]"
            />
            <div>
              <p className="text-7xl max-lg:text-6xl max-md:text-4xl max-sm:text-3xl font-bold ml-16 pl-16">
                hamza
              </p>
              <p className="text-7xl max-lg:text-6xl max-md:text-4xl max-sm:text-3xl font-bold ml-16 pl-16">
                khan
              </p>
            </div>
          </div>

          <div className="grid grid-cols-[225px_minmax(540px,_1fr)_100px]">
            <div>
              <div className="pt-1 mt-1">
                <p className="font-bold text-lg">Web Developer</p>
                <p className="text-sm">kashifshaikh910ss@gmail.com</p>
                <p className="text-sm">0313454533534</p>
                <p className="text-sm">grergrg, gregregreg, 2133, ffewfw</p>
              </div>

              <div className="pt-2 mt-2">
                <div>
                  <p className="text-sm font-bold">Date / Place of birth</p>
                  <p className="text-sm">24 / 342</p>
                </div>

                <div className="pt-2 mt-2">
                  <p className="text-sm font-bold">Driving License</p>
                  <p className="text-sm">232</p>
                </div>

                <div className="pt-2 mt-2">
                  <p className="text-sm font-bold">Nationality</p>
                  <p className="text-sm">342</p>
                </div>
              </div>
            </div>

            <div className="pt-2 mt-2 ml-1 w-full h-full">
              <div className="bg-[#eeeeee] w-11/12 max-[1008px]:w-9/12 max-[879px]:w-6/12 max-[831px]:w-5/12 max-[916px]:w-7/12 max-[880px]:w-/12 max-[768px]:w-9/12  h-auto pl-3 pt-3 pb-3 rounded-2xl">
                <p className="text-4xl max-[768px]:text-2xl max-[880px]:text-xl font-bold">
                  Profile
                </p>
                <p className="text-sm mt-2">profile content</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 h-[1.5px] w-10/12 mt-5" />

          <div
            className="grid grid-cols-[400px_minmax(300px,_1fr)_100px]
           max-[1008px]:grid-cols-[100px_minmax(200px,_0.9fr)_100px] 
           max-[982px]:grid-cols-[100px_minmax(200px,_0.8fr)_100px]
            max-[917px]:grid-cols-[100px_minmax(200px,_0.7fr)_100px]
             max-[768px]:grid-cols-[300px_minmax(200px,_0.8fr)_100px] 
             max-[830px]:grid-cols-[200px_minmax(300px,_0.5fr)_100px]
             mt-5
             "
          >
            <div>
              <div>
                <p className="text-2xl max-[880px]:text-xl max-[768px]:text-xl font-bold">
                  Employment History
                </p>
                <div className="">
                  <p className="bg-black max-w-max min-w-max max-[880px]:text-[12px] text-white font-bold max-[768px]:text-[14px] mt-2 pl-1 pr-1">
                    fwefewe, at fwfef, wrfwrffewf
                  </p>
                </div>
                <p className="text-black tracking-widest max-[880px]:text-[14px] max-[768px]:text-[13px]">
                  12/2022-2022
                </p>
                <p className="text-gray-800 text-sm mt-1 max-[768px]:text-[12px] max-[880px]:text-[13px]">
                  fffwfwefwfe
                </p>
              </div>

              <div className="mt-5">
                <p className="text-2xl max-[880px]:text-xl max-[768px]:text-xl font-bold">
                  Education
                </p>
                <p className="bg-black max-w-max min-w-max max-[880px]:text-[12px] text-white font-bold max-[768px]:text-[14px] mt-2 pl-1 pr-1">
                  fwefewe, at fwfef, wrfwrffewf
                </p>
                <p className="text-black tracking-widest max-[880px]:text-[14px] max-[768px]:text-[13px]">
                  12/2022-4/2022
                </p>
                <p className="text-gray-800 text-sm mt-1 max-[768px]:text-[12px] max-[880px]:text-[13px]">
                  fffwfwefwfe
                </p>
              </div>

              <div className="mt-5">
                <p className="text-2xl max-[880px]:text-xl max-[768px]:text-xl font-bold">
                  Extra-curricular activities
                </p>
                <p className="bg-black max-w-max min-w-max max-[880px]:text-[12px] text-white font-bold max-[768px]:text-[14px] mt-2 pl-1 pr-1">
                  fwefewe, at fwfef, wrfwrffewf
                </p>
                <p className="text-black tracking-widest max-[880px]:text-[14px] max-[768px]:text-[13px]">
                  6/2022-8/2022
                </p>
                <p className="text-gray-800 text-sm mt-1 max-[768px]:text-[12px] max-[880px]:text-[13px]">
                  fffwfwefwfe
                </p>
              </div>
            </div>

            <div className="flex flex-col flex-1 items-end mr-10">
              <div className="bg-[#eeeeee] w-11/12 h-auto  max-[830px]:w-10/12 max-[1008px]:w-7/12 max-[916px]:w-7/12 max-[880px]:w-7/12 max-[768px]:w-11/12 pl-3 pt-3 pb-3 rounded-2xl">
                <p className="text-3xl font-bold max-[768px]:text-xl max-[880px]:text-2xl">
                  Links
                </p>
                <p className="text-sm mt-2 underline">links content</p>
                <p className="text-sm mt-2 underline">links content</p>
                <p className="text-sm mt-2 underline">links content</p>
                <p className="text-sm mt-2 underline">links content</p>
              </div>

              <div className="bg-[#eeeeee] w-11/12 h-auto  max-[830px]:w-10/12 max-[1008px]:w-7/12 max-[916px]:w-7/12 max-[880px]:w-7/12 max-[768px]:w-11/12 pl-3 pt-3 pb-3 mt-2 rounded-2xl">
                <p className="text-3xl font-bold max-[768px]:text-xl max-[880px]:text-2xl">
                  Skills
                </p>
                <p className="text-sm mt-2">skill content</p>
              </div>

              <div className="bg-[#eeeeee] w-11/12 h-auto  max-[830px]:w-10/12 max-[1008px]:w-7/12 max-[916px]:w-7/12 max-[880px]:w-7/12 max-[768px]:w-11/12 pl-3 pt-3 pb-3 mt-2 rounded-2xl">
                <p className="text-3xl font-bold max-[768px]:text-xl max-[880px]:text-2xl">
                  Hobbies
                </p>
                <p className="text-sm mt-2">hobbies content</p>
              </div>

              <div className="bg-[#eeeeee] w-11/12 h-auto  max-[830px]:w-10/12 max-[1008px]:w-7/12 max-[916px]:w-7/12 max-[880px]:w-7/12 max-[768px]:w-11/12 pl-3 pt-3 pb-3 mt-2 rounded-2xl">
                <p className="text-3xl font-bold max-[768px]:text-xl max-[880px]:text-2xl">
                  Languages
                </p>
                <p className="text-sm mt-2">language content</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const twoSectionTemplate = () => {
    if (props.page === 2) {
      return (
        <div
          className="grid grid-cols-[400px_minmax(333px,_1fr)_100px]
          max-[1008px]:grid-cols-[400px_minmax(300px,_1fr)_100px] 
          max-[982px]:grid-cols-[300px_minmax(300px,_1fr)_100px]
          max-[915px]:grid-cols-[270px_minmax(270px,_1fr)_100px]
          max-[835px]:grid-cols-[260px_minmax(260px,_1fr)_100px] 
          max-[830px]:grid-cols-[240px_minmax(240px,_1fr)_100px] 
          max-[768px]:grid-cols-[300px_minmax(370px,_1fr)_100px] 
          max-[736px]:grid-cols-[280px_minmax(340px,_1fr)_100px] 
          max-[688px]:grid-cols-[260px_minmax(300px,_1fr)_100px] 
          max-[625px]:grid-cols-[220px_minmax(260px,_1fr)_100px] 
          p-2 pl-3"
        >
          <div>
            <div>
              <p className="bg-black max-w-max min-w-max max-[880px]:text-[12px] text-white font-bold max-[768px]:text-[14px] mt-2 pl-1 pr-1">
                fwefewe, fwfef
              </p>
              <p className="text-black tracking-widest max-[880px]:text-[14px] max-[768px]:text-[13px]">
                7/2022-8/2022
              </p>
              <p className="text-gray-800 text-sm mt-1 max-[768px]:text-[12px] max-[880px]:text-[13px]">
                fffwfwefwfe
              </p>
            </div>

            <div className="mt-5">
              <p className="text-2xl max-[880px]:text-xl max-[768px]:text-xl font-bold">
                Internships
              </p>
              <p className="bg-black max-w-max min-w-max max-[880px]:text-[12px] text-white font-bold max-[768px]:text-[14px] mt-2 pl-1 pr-1">
                regrg, at ewrggr, prfergg
              </p>
              <p className="text-black tracking-widest max-[880px]:text-[14px] max-[768px]:text-[13px]">
                6/2022-12/2022
              </p>
              <p className="text-gray-800 text-sm mt-1 max-[768px]:text-[12px] max-[880px]:text-[13px]">
                eettttt
              </p>
            </div>
          </div>

          <div className="flex flex-col flex-1 items-end">
            <div className="bg-[#eeeeee] max-[768px]:w-11/12 w-11/12 h-auto  max-[830px]:w-10/12 pl-3 pt-3 pb-3 mt-2 rounded-2xl">
              <p className="text-3xl font-bold max-[768px]:text-xl max-[880px]:text-2xl">
                Courses
              </p>
              <p className="text-sm font-bold mt-2">fewfwf at fewfeqw</p>
              <p className="text-sm">2/2022-4/2022</p>
            </div>

            <div className="bg-[#eeeeee] max-[768px]:w-11/12 w-11/12 h-auto  max-[830px]:w-10/12 pl-3 pt-3 pb-3 mt-2 rounded-2xl">
              <p className="text-3xl font-bold max-[768px]:text-xl max-[880px]:text-2xl">
                Preferences
              </p>
              <p className="text-sm mt-2">fewfwfewfeqw</p>
              <p className="text-sm">fewfwfewfeqw</p>
              <p className="text-sm">fewfwfewfeqw</p>
            </div>
          </div>
        </div>
      );
    }
  };

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
        <div>
          {/* number 1 template  */}
          {oneSectionTemplate()}
        </div>
        <div>
          {/* number 2 template  */}
          {twoSectionTemplate()}
        </div>
      </div>
    </div>
  );
};

export default TorontoTemplate;
