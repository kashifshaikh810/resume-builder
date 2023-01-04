import React, { useEffect } from "react";

import "./styles.css";

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
              src="https://picsum.photos/seed/picsum/200/300"
              alt="prof"
              className="w-[6rem] h-[8.5rem]"
            />
            <div>
              <p className="text-7xl font-bold ml-16 pl-16">hamza</p>
              <p className="text-7xl font-bold ml-16 pl-16">khan</p>
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
              <div className="bg-[#eeeeee] w-11/12 h-auto pl-3 pt-3 pb-3 rounded-2xl">
                <p className="text-4xl font-bold">Profile</p>
                <p className="text-sm mt-2">profile content</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 h-[1.5px] w-10/12 mt-5" />

          <div className="grid grid-cols-[400px_minmax(300px,_1fr)_100px] mt-5">
            <div>
              <div>
                <p className="text-2xl font-bold">Employment History</p>
                <p className="bg-black text-white font-bold mt-2">
                  fwefewe, at fwfef, wrfwrffewf
                </p>
                <p className="text-black tracking-widest">12/2022-2022</p>
                <p className="text-gray-400 text-sm mt-1">fffwfwefwfe</p>
              </div>

              <div className="mt-5">
                <p className="text-2xl font-bold">Education</p>
                <p className="bg-black text-white font-bold mt-2">
                  fwefewe, at fwfef, wrfwrffewf
                </p>
                <p className="text-black tracking-widest">12/2022-4/2022</p>
                <p className="text-gray-400 text-sm mt-1">fffwfwefwfe</p>
              </div>

              <div className="mt-5">
                <p className="text-2xl font-bold">
                  Extra-curricular activities
                </p>
                <p className="bg-black text-white font-bold mt-2">
                  fwefewe, at fwfef, wrfwrffewf
                </p>
                <p className="text-black tracking-widest">6/2022-8/2022</p>
                <p className="text-gray-400 text-sm mt-1">fffwfwefwfe</p>
              </div>
            </div>

            <div className="flex flex-col flex-1 items-end mr-10">
              <div className="bg-[#eeeeee] w-11/12 h-auto pl-3 pt-3 pb-3 rounded-2xl">
                <p className="text-3xl font-bold">Links</p>
                <p className="text-sm mt-2 underline">links content</p>
              </div>

              <div className="bg-[#eeeeee] w-11/12 h-auto pl-3 pt-3 pb-3 mt-2 rounded-2xl">
                <p className="text-3xl font-bold">Skills</p>
                <p className="text-sm mt-2">skill content</p>
              </div>

              <div className="bg-[#eeeeee] w-11/12 h-auto pl-3 pt-3 pb-3 mt-2 rounded-2xl">
                <p className="text-3xl font-bold">Hobbies</p>
                <p className="text-sm mt-2">hobbies content</p>
              </div>

              <div className="bg-[#eeeeee] w-11/12 h-auto pl-3 pt-3 pb-3 mt-2 rounded-2xl">
                <p className="text-3xl font-bold">Languages</p>
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
        <div className="grid grid-cols-[400px_minmax(333px,_1fr)_100px] p-2 pl-3">
          <div>
            <div>
              <p className="bg-black text-white font-bold mt-2">
                fwefewe, fwfef
              </p>
              <p className="text-black tracking-widest">7/2022-8/2022</p>
              <p className="text-gray-400 text-sm mt-1">fffwfwefwfe</p>
            </div>

            <div className="mt-5">
              <p className="text-2xl font-bold">Internships</p>
              <p className="bg-black text-white font-bold mt-2">
                regrg, at ewrggr, prfergg
              </p>
              <p className="text-black tracking-widest">6/2022-12/2022</p>
              <p className="text-gray-400 text-sm mt-1">eettttt</p>
            </div>
          </div>

          <div className="flex flex-col flex-1 items-end">
            <div className="bg-[#eeeeee] w-11/12 h-auto pl-3 pt-3 pb-3 mt-2 rounded-2xl">
              <p className="text-3xl font-bold">Courses</p>
              <p className="text-sm font-bold mt-2">fewfwf at fewfeqw</p>
              <p className="text-sm">2/2022-4/2022</p>
            </div>

            <div className="bg-[#eeeeee] w-11/12 h-auto pl-3 pt-3 pb-3 mt-2 rounded-2xl">
              <p className="text-3xl font-bold">Preferences</p>
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
      max-[620px]:h-[900px]
      max-[703px]:h-[880px]
      max-[610px]:h-[830px]
      max-[570px]:h-[780px]
      max-[535px]:h-[730px]
      max-[500px]:h-[680px]
      "
    >
      <div className="flex bg-white w-full max-[1029px]:w-11/12 overflow-hidden h-[900px] self-center rounded-md hover:default">
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
