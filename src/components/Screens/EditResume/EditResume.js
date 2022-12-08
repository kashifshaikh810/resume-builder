import React, { useEffect, useRef, useState } from "react";
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
  const [showModal, setShowModal] = useState(false);
  const hiddenFileInput = useRef(null);
  const [profileImage, setProfileImage] = useState("");
  const [isShowPersonalInput, setIsShowPersonalInput] = useState(false);
  const [personalDetailInput, setPersonalDetailInput] =
    useState("Personal Details");

  const [isShowSummaryIcon, setIsShowSummaryIcon] = useState(false);
  const [isShowSummaryInput, setIsShowSummaryInput] = useState(false);
  const [summaryInput, setSummaryInput] = useState("Professional Summary");

  const [employmentInput, setEmploymentInput] = useState("Employment History");
  const [isShowEmploymentInput, setIsShowEmploymentInput] = useState(false);
  const [isShowEmploymentIcon, setIsShowEmploymentIcon] = useState(false);

  const [educationInput, setEducationInput] = useState("Education");
  const [isShowEducationInput, setIsShowEducationInput] = useState(false);
  const [isShowEducationIcon, setIsShowEducationIcon] = useState(false);

  const [websiteInput, setWebsiteInput] = useState("Websites & Social Links");
  const [isShowWebsiteInput, setIsShowWebsiteInput] = useState(false);
  const [isShowWebsiteIcon, setIsShowWebsiteIcon] = useState(false);

  const handleChange = (event) => {
    let fileUploaded = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(fileUploaded);
    reader.onload = (upload) => {
      setProfileImage(upload.target.result);
    };
    setShowModal(false);
  };

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
      showModal={showModal}
      setShowModal={setShowModal}
      hiddenFileInput={hiddenFileInput}
      handleChange={handleChange}
      profileImage={profileImage}
      setProfileImage={setProfileImage}
      isShowPersonalInput={isShowPersonalInput}
      setIsShowPersonalInput={setIsShowPersonalInput}
      personalDetailInput={personalDetailInput}
      setPersonalDetailInput={setPersonalDetailInput}
      isShowSummaryIcon={isShowSummaryIcon}
      setIsShowSummaryIcon={setIsShowSummaryIcon}
      isShowSummaryInput={isShowSummaryInput}
      setIsShowSummaryInput={setIsShowSummaryInput}
      summaryInput={summaryInput}
      setSummaryInput={setSummaryInput}
      employmentInput={employmentInput}
      setEmploymentInput={setEmploymentInput}
      isShowEmploymentInput={isShowEmploymentInput}
      setIsShowEmploymentInput={setIsShowEmploymentInput}
      isShowEmploymentIcon={isShowEmploymentIcon}
      setIsShowEmploymentIcon={setIsShowEmploymentIcon}
      educationInput={educationInput}
      setEducationInput={setEducationInput}
      isShowEducationInput={isShowEducationInput}
      setIsShowEducationInput={setIsShowEducationInput}
      isShowEducationIcon={isShowEducationIcon}
      setIsShowEducationIcon={setIsShowEducationIcon}
      websiteInput={websiteInput}
      setWebsiteInput={setWebsiteInput}
      isShowWebsiteInput={isShowWebsiteInput}
      setIsShowWebsiteInput={setIsShowWebsiteInput}
      isShowWebsiteIcon={isShowWebsiteIcon}
      setIsShowWebsiteIcon={setIsShowWebsiteIcon}
    />
  );
};

export default EditResume;
