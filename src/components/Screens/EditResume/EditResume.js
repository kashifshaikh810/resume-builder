import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resumeDataSave } from "../../../redux/actions/resumeAction";

import EditResumeMarkup from "./EditResumeMarkup";

const EditResume = (props) => {
  // all inputs states
  const [wantedJobTitle, setWantedJobTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  // additional inputs
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [drivingLicense, setDrivingLicense] = useState("");
  const [nationality, setNationality] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  // professional summary
  const [professionalSummary, setProfessionalSummary] = useState("");

  // hobbies
  const [hobbies, setHobbies] = useState("");

  // redux
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.resumeData);

  // Employment history section states
  const [employmentInputList, setEmploymentInputList] = useState([]);
  const [employmentInput, setEmploymentInput] = useState("Employment History");
  const [isShowEmploymentInput, setIsShowEmploymentInput] = useState(false);
  const [isShowEmploymentIcon, setIsShowEmploymentIcon] = useState(false);
  const [isShowEmploymentBoxInput, setIsShowEmploymentBoxInput] = useState({
    show: false,
    num: Number,
  });
  const [isShowEmploymentBoxIcon, setIsShowEmploymentBoxIcon] = useState({
    show: false,
    num: Number,
  });
  const [isChangedDescInputText, setIsChangedDescInputText] = useState({
    name: "normal",
    num: Number,
  });
  // ------ end ----- //

  // Education section states
  const [educationInputList, setEducationInputList] = useState([]);
  const [educationInput, setEducationInput] = useState("Education");
  const [isShowEducationInput, setIsShowEducationInput] = useState(false);
  const [isShowEducationIcon, setIsShowEducationIcon] = useState(false);
  const [isShowEducationBoxInput, setIsShowEducationBoxInput] = useState({
    show: false,
    num: Number,
  });
  const [isShowEducationBoxIcon, setIsShowEducationBoxIcon] = useState({
    show: false,
    num: Number,
  });
  const [isChangedEducationDescInputText, setIsChangedEducationDescInputText] =
    useState({
      name: "normal",
      num: Number,
    });
  // ------ end ----- //

  // Websites & Social Links - section states
  const [websiteInputList, setWebsiteInputList] = useState([]);
  const [websiteInput, setWebsiteInput] = useState("Websites & Social Links");
  const [isShowWebsiteInput, setIsShowWebsiteInput] = useState(false);
  const [isShowWebsiteIcon, setIsShowWebsiteIcon] = useState(false);
  const [isShowWebsiteBoxInput, setIsShowWebsiteBoxInput] = useState({
    show: false,
    num: Number,
  });
  const [isShowWebsiteBoxIcon, setIsShowWebsiteBoxIcon] = useState({
    show: false,
    num: Number,
  });

  // ------ end ----- //

  // skills - section states
  const [skillsInputList, setSkillsInputList] = useState([]);
  const [skillsInput, setSkillsInput] = useState("Skills");
  const [isShowSkillsInput, setIsShowSkillsInput] = useState(false);
  const [isShowSkillsIcon, setIsShowSkillsIcon] = useState(false);
  const [isShowSkillsBoxInput, setIsShowSkillsBoxInput] = useState({
    show: false,
    num: Number,
  });
  const [isShowSkillsBoxIcon, setIsShowSkillsBoxIcon] = useState({
    show: false,
    num: Number,
  });

  const [isShowSkillsLevel, setIsShowSkillsLevel] = useState({
    level: "Novice",
    num: 0,
  });
  // ------ end ----- //

  // languages - section states
  const [languagesInputList, setLanguagesInputList] = useState([]);
  const [languagesInput, setLanguagesInput] = useState("Languages");
  const [isShowLanguagesInput, setIsShowLanguagesInput] = useState(false);
  const [isShowLanguagesIcon, setIsShowLanguagesIcon] = useState(false);
  const [isShowLanguagesBoxInput, setIsShowLanguagesBoxInput] = useState({
    show: false,
    num: Number,
  });
  const [isShowLanguagesBoxIcon, setIsShowLanguagesBoxIcon] = useState({
    show: false,
    num: Number,
  });
  // ------ end ----- //

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

  const [hobbiesInput, setHobbiesInput] = useState("Hobbies");
  const [isShowHobbiesInput, setIsShowHobbiesInput] = useState(false);
  const [isShowHobbiesIcon, setIsShowHobbiesIcon] = useState(false);

  const [titleInput, setTitleInput] = useState("Untitled");
  const [isShowTitleInput, setIsShowTitleInput] = useState(false);

  // Employment history section functions
  const employmentHandleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...employmentInputList];
    list[index][name] = value;
    setEmploymentInputList(list);
  };

  // handle click event of the Remove button
  const employmentHandleRemoveClick = (index) => {
    const list = [...employmentInputList];
    list.splice(index, 1);
    setEmploymentInputList(list);
  };

  // handle click event of the Add button
  const employmentHandleAddClick = () => {
    setEmploymentInputList([
      ...employmentInputList,
      {
        jobTitle: "",
        employer: "",
        startDate: "",
        endDate: "",
        city: "",
        description: "",
      },
    ]);
  };
  // ------ end ----- //

  // navigation state
  const navigate = props.navigate();

  // Education section functions
  const educationHandleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...educationInputList];
    list[index][name] = value;
    setEducationInputList(list);
  };

  // handle click event of the Remove button
  const educationHandleRemoveClick = (index) => {
    const list = [...educationInputList];
    list.splice(index, 1);
    setEducationInputList(list);
  };

  // handle click event of the Add button
  const educationHandleAddClick = () => {
    setEducationInputList([
      ...educationInputList,
      {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        city: "",
        description: "",
      },
    ]);
  };
  // ------ end ----- //

  // WebSites & social links section functions
  const websiteHandleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...websiteInputList];
    list[index][name] = value;
    setWebsiteInputList(list);
  };

  // handle click event of the Remove button
  const websiteHandleRemoveClick = (index) => {
    const list = [...websiteInputList];
    list.splice(index, 1);
    setWebsiteInputList(list);
  };

  // handle click event of the Add button
  const websiteHandleAddClick = () => {
    setWebsiteInputList([
      ...websiteInputList,
      {
        label: "",
        link: "",
      },
    ]);
  };
  // ------ end ----- //

  // skills section functions
  const skillsHandleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...skillsInputList];
    list[index][name] = value;
    setSkillsInputList(list);
  };

  // handle click event of the Remove button
  const skillsHandleRemoveClick = (index) => {
    const list = [...skillsInputList];
    list.splice(index, 1);
    setSkillsInputList(list);
  };

  // handle click event of the Add button
  const skillsHandleAddClick = (name) => {
    setSkillsInputList([
      ...skillsInputList,
      {
        skill: name ? name : "",
        level: "Expert",
      },
    ]);
  };
  // ------ end ----- //

  // Languages section functions
  const languagesHandleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...languagesInputList];
    list[index][name] = value;
    setLanguagesInputList(list);
  };

  // handle click event of the Remove button
  const languagesHandleRemoveClick = (index) => {
    const list = [...languagesInputList];
    list.splice(index, 1);
    setLanguagesInputList(list);
  };

  // handle click event of the Add button
  const languagesHandleAddClick = () => {
    setLanguagesInputList([
      ...languagesInputList,
      {
        language: "",
        level: "",
      },
    ]);
  };
  // ------ end ----- //

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

  useEffect(() => {
    let resumeData = {
      wantedJobTitle,
      firstName,
      lastName,
      email,
      phone,
      country,
      city,
      address,
      postalCode,
      drivingLicense,
      nationality,
      placeOfBirth,
      dateOfBirth,
      professionalSummary,
      employmentInputList,
      educationInputList,
      websiteInputList,
      skillsInputList,
      isNotShowExpertLevel,
      hobbies,
      languagesInputList,
    };

    dispatch(resumeDataSave(resumeData));
  }, [
    dispatch,
    wantedJobTitle,
    firstName,
    lastName,
    email,
    phone,
    country,
    city,
    address,
    postalCode,
    drivingLicense,
    nationality,
    placeOfBirth,
    dateOfBirth,
    professionalSummary,
    employmentInputList,
    educationInputList,
    websiteInputList,
    skillsInputList,
    isNotShowExpertLevel,
    hobbies,
    languagesInputList,
  ]);

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
      skillsInput={skillsInput}
      setSkillsInput={setSkillsInput}
      isShowSkillsInput={isShowSkillsInput}
      setIsShowSkillsInput={setIsShowSkillsInput}
      isShowSkillsIcon={isShowSkillsIcon}
      setIsShowSkillsIcon={setIsShowSkillsIcon}
      hobbiesInput={hobbiesInput}
      setHobbiesInput={setHobbiesInput}
      isShowHobbiesInput={isShowHobbiesInput}
      setIsShowHobbiesInput={setIsShowHobbiesInput}
      isShowHobbiesIcon={isShowHobbiesIcon}
      setIsShowHobbiesIcon={setIsShowHobbiesIcon}
      languagesInput={languagesInput}
      setLanguagesInput={setLanguagesInput}
      isShowLanguagesInput={isShowLanguagesInput}
      setIsShowLanguagesInput={setIsShowLanguagesInput}
      isShowLanguagesIcon={isShowLanguagesIcon}
      setIsShowLanguagesIcon={setIsShowLanguagesIcon}
      titleInput={titleInput}
      setTitleInput={setTitleInput}
      isShowTitleInput={isShowTitleInput}
      setIsShowTitleInput={setIsShowTitleInput}
      employmentInputList={employmentInputList}
      setEmploymentInputList={setEmploymentInputList}
      employmentHandleInputChange={employmentHandleInputChange}
      employmentHandleRemoveClick={employmentHandleRemoveClick}
      employmentHandleAddClick={employmentHandleAddClick}
      isShowEmploymentBoxInput={isShowEmploymentBoxInput}
      setIsShowEmploymentBoxInput={setIsShowEmploymentBoxInput}
      isShowEmploymentBoxIcon={isShowEmploymentBoxIcon}
      setIsShowEmploymentBoxIcon={setIsShowEmploymentBoxIcon}
      isChangedDescInputText={isChangedDescInputText}
      setIsChangedDescInputText={setIsChangedDescInputText}
      educationHandleInputChange={educationHandleInputChange}
      educationHandleRemoveClick={educationHandleRemoveClick}
      educationHandleAddClick={educationHandleAddClick}
      educationInputList={educationInputList}
      isShowEducationBoxIcon={isShowEducationBoxIcon}
      setIsShowEducationBoxIcon={setIsShowEducationBoxIcon}
      isShowEducationBoxInput={isShowEducationBoxInput}
      setIsShowEducationBoxInput={setIsShowEducationBoxInput}
      isChangedEducationDescInputText={isChangedEducationDescInputText}
      setIsChangedEducationDescInputText={setIsChangedEducationDescInputText}
      websiteHandleInputChange={websiteHandleInputChange}
      websiteHandleRemoveClick={websiteHandleRemoveClick}
      websiteHandleAddClick={websiteHandleAddClick}
      websiteInputList={websiteInputList}
      isShowWebsiteBoxInput={isShowWebsiteBoxInput}
      setIsShowWebsiteBoxInput={setIsShowWebsiteBoxInput}
      isShowWebsiteBoxIcon={isShowWebsiteBoxIcon}
      setIsShowWebsiteBoxIcon={setIsShowWebsiteBoxIcon}
      skillsInputList={skillsInputList}
      isShowSkillsBoxInput={isShowSkillsBoxInput}
      setIsShowSkillsBoxInput={setIsShowSkillsBoxInput}
      isShowSkillsBoxIcon={isShowSkillsBoxIcon}
      setIsShowSkillsBoxIcon={setIsShowSkillsBoxIcon}
      skillsHandleInputChange={skillsHandleInputChange}
      skillsHandleRemoveClick={skillsHandleRemoveClick}
      skillsHandleAddClick={skillsHandleAddClick}
      isShowSkillsLevel={isShowSkillsLevel}
      setIsShowSkillsLevel={setIsShowSkillsLevel}
      languagesInputList={languagesInputList}
      setLanguagesInputList={setLanguagesInputList}
      isShowLanguagesBoxInput={isShowLanguagesBoxInput}
      setIsShowLanguagesBoxInput={setIsShowLanguagesBoxInput}
      isShowLanguagesBoxIcon={isShowLanguagesBoxIcon}
      setIsShowLanguagesBoxIcon={setIsShowLanguagesBoxIcon}
      languagesHandleInputChange={languagesHandleInputChange}
      languagesHandleRemoveClick={languagesHandleRemoveClick}
      languagesHandleAddClick={languagesHandleAddClick}
      navigate={navigate}
      wantedJobTitle={wantedJobTitle}
      setWantedJobTitle={setWantedJobTitle}
      firstName={firstName}
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
      email={email}
      setEmail={setEmail}
      phone={phone}
      setPhone={setPhone}
      country={country}
      setCountry={setCountry}
      city={city}
      setCity={setCity}
      address={address}
      setAddress={setAddress}
      postalCode={postalCode}
      setPostalCode={setPostalCode}
      drivingLicense={drivingLicense}
      setDrivingLicense={setDrivingLicense}
      nationality={nationality}
      setNationality={setNationality}
      placeOfBirth={placeOfBirth}
      setPlaceOfBirth={setPlaceOfBirth}
      dateOfBirth={dateOfBirth}
      setDateOfBirth={setDateOfBirth}
      professionalSummary={professionalSummary}
      setProfessionalSummary={setProfessionalSummary}
      hobbies={hobbies}
      setHobbies={setHobbies}
      resumeData={data}
    />
  );
};

export default EditResume;
