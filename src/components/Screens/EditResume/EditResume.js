import React, { useEffect, useState } from "react";
import EditResumeMarkup from "./EditResumeMarkup";

const EditResume = (props) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [uploadIsHovered, setUploadIsHovered] = useState(false);
  const [isShowAdditionalDetails, setIsShowAdditionalDetails] = useState(false);
  const [additionalIsHovered, setAdditionalIsHovered] = useState(false);
  const [isNotShowExpertLevel, setIsNotShowExpertLevel] = useState(false);
  const [isShowPersonalIcon, setIsShowPersonalIcon] = useState(false);
  const [isChangedInputText, setIsChangedInputText] = useState({
    name: "normal",
    num: Number,
  });
  const [experienceLevelIsHovered, setExperienceLevelIsHovered] = useState({
    shown: false,
    num: Number,
  });
  const [sectionIsHovered, setSectionIsHovered] = useState({
    shown: false,
    num: Number,
  });
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const onScroll = (e) => {
      setScrollValue(e.target.documentElement.scrollTop);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollValue]);

  const skillsData = [
    { id: 0, name: "Microsoft Office" },
    { id: 1, name: "Communication" },
    { id: 2, name: "Microsoft Excel" },
    { id: 3, name: "Communication Skills" },
    { id: 4, name: "Teamwork" },
    { id: 5, name: "Computer Skills" },
    { id: 6, name: "Ability to Work in a Team" },
    { id: 7, name: "Adaptability" },
    { id: 8, name: "Leadership" },
    { id: 9, name: "Customer Service" },
  ];

  const addSectionData = [
    {
      id: 0,
      name: "Custom Section",
      icon: "https://resume.io/assets/media/section-custom9a5c47fa7e40552b402c.svg",
    },
    {
      id: 1,
      name: "Courses",
      icon: "https://resume.io/assets/media/section-coursesac242920cf036913a538.svg",
    },
    {
      id: 2,
      name: "Extra-curricular Activities",
      icon: "https://resume.io/assets/media/section-activities6d0a105b290e6ee45eed.svg",
    },
    {
      id: 3,
      name: "Internships",
      icon: "https://resume.io/assets/media/section-internshipsc5602363c63601db351a.svg",
    },
    {
      id: 4,
      name: "Hobbies",
      icon: "https://resume.io/assets/media/section-hobbies155dd390ebb333be1ff4.svg",
    },
    {
      id: 5,
      name: "Languages",
      icon: "https://resume.io/assets/media/section-languages789a574878c2e639a263.svg",
    },
    {
      id: 6,
      name: "References",
      icon: "https://resume.io/assets/media/section-references276c7a8efed1f5481ae4.svg",
    },
  ];

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <EditResumeMarkup
      {...props}
      isMenuShown={isMenuShown}
      setIsMenuShown={setIsMenuShown}
      screenWidth={windowDimensions?.width}
      scrollValue={scrollValue}
      isHovered={isHovered}
      setIsHovered={setIsHovered}
      uploadIsHovered={uploadIsHovered}
      setUploadIsHovered={setUploadIsHovered}
      isShowAdditionalDetails={isShowAdditionalDetails}
      setIsShowAdditionalDetails={setIsShowAdditionalDetails}
      additionalIsHovered={additionalIsHovered}
      setAdditionalIsHovered={setAdditionalIsHovered}
      isChangedInputText={isChangedInputText}
      setIsChangedInputText={setIsChangedInputText}
      isNotShowExpertLevel={isNotShowExpertLevel}
      setIsNotShowExpertLevel={setIsNotShowExpertLevel}
      skillsData={skillsData}
      experienceLevelIsHovered={experienceLevelIsHovered}
      setExperienceLevelIsHovered={setExperienceLevelIsHovered}
      addSectionData={addSectionData}
      sectionIsHovered={sectionIsHovered}
      setSectionIsHovered={setSectionIsHovered}
      isShowPersonalIcon={isShowPersonalIcon}
      setIsShowPersonalIcon={setIsShowPersonalIcon}
    />
  );
};

export default EditResume;
