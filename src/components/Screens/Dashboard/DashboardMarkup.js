import React from "react";

import Header from "../../Header/Header";
import AppButton from "../../AppButton/AppButton";
import SideDrawer from "../../SideDrawer/SideDrawer";
import "./styles.css";

const DashboardMarkup = (props) => {
  return (
    <>
      <div className="flex flex-1 flex-col bg-blue-50 pb-8">
        <Header {...props} shown={props?.user} />

        {props?.toggleDrawer ? <SideDrawer {...props} /> : <></>}
        <div className="flex flex-1 flex-col items-center justify-center">
          <p className="text-sm font-bold pt-[4rem] tracking-widest">
            ONLINE RESUME BUILDER
          </p>
          <p className="text-5xl font-bold pt-2 w-7/12 text-center">
            Only 2% of resumes make it past the first round. Be in the top 2%
          </p>
          <p className="text-xl pt-4 w-5/12 text-center">
            Use professional field-tested resume templates that follow the exact
            ‘resume rules’ employers look for. Easy to use and done within
            minutes - try now for free!
          </p>

          <AppButton
            {...props}
            title="Create My Resume"
            className="bg-blue-500 hover:bg-blue-600 mt-4 p-3 pl-5 pr-5 rounded-md cursor-pointer"
            textStyle="text-white font-bold"
            onPress={() =>
              props?.user
                ? props.navigate("/resumes-templates")
                : props.navigate("/app/auth/sign-in")
            }
            loading={false}
          />

          <div className="flex flex-1 flex-row justify-center items-center">
            <div className="bg-green-600 w-1.5 h-1.5 rounded-full animation-pulse mt-4 mr-2" />
            <p className="text-sm pt-4">
              {props?.allResumes && props?.allResumes} resumes created today
            </p>
          </div>
        </div>
        <div className="flex flex-1 justify-center pt-4">
          <img
            className="w-6/12 h-auto rounded-md"
            src="https://s3.resume.io/cdn-cgi/image/width=770,height=350,dpr=1.5,fit=crop,gravity=top,quality=75,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg"
            alt="cv"
          />
        </div>
      </div>
      <div className="w-full h-80">
        <div className="mt-10 flex flex-1 justify-center items-center flex-col">
          <p className="text-6xl max-w-[680px] text-center font-bold text-[#1a91f0] leading-tight m-auto">
            Join over{" "}
            <mark
              style={{ background: 0, color: "inherit" }}
              className="border-b-[6px] border-[#f9ba44]"
            >
              {props?.users}
            </mark>{" "}
            users worldwide
          </p>
          <p className="mt-5">Start for free — try our resume builder now</p>

          <AppButton
            {...props}
            title="Create My Resume"
            className="bg-blue-500 hover:bg-blue-600 mt-4 p-3 pl-5 pr-5 rounded-md cursor-pointer"
            textStyle="text-white font-bold"
            onPress={() =>
              props?.user
                ? props.navigate("/resumes-templates")
                : props.navigate("/app/auth/sign-in")
            }
            loading={false}
          />
        </div>
      </div>
    </>
  );
};

export default DashboardMarkup;
