import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import {
  coverLetterDataSaveAction,
  getCoverLetterDataAction,
  getCoverLetterTitleAction,
  getSelectCoverLetterTemplateAction,
} from "../../../redux/actions/coverLetterAction";

import {
  clearErrors,
  getResumeData,
  getResumeTitleAction,
  getSelectResumeTemplateAction,
  removeProfileImageFromDB,
  resumeDataSave,
  resumeTitleAction,
} from "../../../redux/actions/resumeAction";
import { REMOVE_PROFILE_IMAGE_RESET } from "../../../redux/constants/resumeConstants";
import EditResumeMarkup from "./EditResumeMarkup";

const EditResume = (props) => {
  // localStorageGetItem
  const tabName = JSON.parse(localStorage.getItem("tabName"));

  const componentPDF = useRef();

  // redux
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.resumeData);
  const { loading: coverLetterLoading, coverLetterTemplateData } = useSelector(
    (state) => state.coverLetterData
  );
  const { loading: resumeTemplateGetDataLoading, resumeTemplateGetData } =
    useSelector((state) => state.getResumeData);
  const { templateData } = useSelector((state) => state.selectTemplate);
  const { user } = useSelector((state) => state.currentUser);
  const { titleData } = useSelector((state) => state.resumeTitle);
  const { success, error } = useSelector((state) => state.removeProfileImage);
  const { coverLetterTitleData } = useSelector(
    (state) => state.coverLetterTitle
  );
  const {
    loading: coverLetterSelectedTemplateLoading,
    coverLetterSelectedTemplateData,
  } = useSelector((state) => state.selectCoverLetterTemplate);

  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const resumeTempId = 29364313;
  const coverTempId = 54274626;

  // cover letters states
  // const tabName = useParams()?.tabName;
  const [fullName, setFullName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [hiringManagerName, setHiringManagerName] = useState("");
  const [letterDetails, setLetterDetails] = useState("");

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
  const [isShowColorAfterClick, setIsShowColorAfterClick] = useState([]);

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

  // courses - section states
  const [coursesInputList, setCoursesInputList] = useState([]);
  const [coursesInput, setCoursesInput] = useState("Courses");
  const [isShowCoursesIcon, setIsShowCoursesIcon] = useState(false);
  const [isShowCoursesInput, setIsShowCoursesInput] = useState(false);
  const [isShowCoursesBoxInput, setIsShowCoursesBoxInput] = useState({
    show: false,
    num: Number,
  });
  const [isShowCoursesBoxIcon, setIsShowCoursesBoxIcon] = useState({
    show: false,
    num: Number,
  });

  // ------ end ----- //

  // extra-curricular activities - section states
  const [extraCurricularInputList, setExtraCurricularInputList] = useState([]);
  const [extraCurricularInput, setExtraCurricularInput] = useState(
    "Extra-curricular Activities"
  );
  const [isShowExtraCurricularIcon, setIsShowExtraCurricularIcon] =
    useState(false);
  const [isShowExtraCurricularInput, setIsShowExtraCurricularInput] =
    useState(false);
  const [isShowExtraCurricularBoxInput, setIsShowExtraCurricularBoxInput] =
    useState({
      show: false,
      num: Number,
    });
  const [isShowExtraCurricularBoxIcon, setIsShowExtraCurricularBoxIcon] =
    useState({
      show: false,
      num: Number,
    });
  const [
    isChangedExtraCurricularDescInputText,
    setIsChangedExtraCurricularDescInputText,
  ] = useState({
    name: "normal",
    num: Number,
  });

  // ------ end ----- //

  // internship - section states
  const [internshipInputList, setInternshipInputList] = useState([]);
  const [internshipInput, setInternshipInput] = useState("Ɪnternships");
  const [isShowInternshipIcon, setIsShowInternshipIcon] = useState(false);
  const [isShowInternshipInput, setIsShowInternshipInput] = useState(false);
  const [isShowInternshipBoxInput, setIsShowInternshipBoxInput] = useState({
    show: false,
    num: Number,
  });
  const [isShowInternshipBoxIcon, setIsShowInternshipBoxIcon] = useState({
    show: false,
    num: Number,
  });
  const [
    isChangedInternshipDescInputText,
    setIsChangedInternshipDescInputText,
  ] = useState({
    name: "normal",
    num: Number,
  });

  // ------ end ----- //

  // References - section states
  const [referencesInputList, setReferencesInputList] = useState([]);
  const [referencesInput, setReferencesInput] = useState("References");
  const [isShowReferencesIcon, setIsShowReferencesIcon] = useState(false);
  const [isShowReferencesInput, setIsShowReferencesInput] = useState(false);
  const [isNotShowIdLikeToHide, setIsNotShowIdLikeToHide] = useState(false);
  const [isShowReferencesBoxInput, setIsShowReferencesBoxInput] = useState({
    show: false,
    num: Number,
  });
  const [isShowReferencesBoxIcon, setIsShowReferencesBoxIcon] = useState({
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

  // Courses section functions
  const coursesHandleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...coursesInputList];
    list[index][name] = value;
    setCoursesInputList(list);
  };

  // handle click event of the Remove button
  const coursesHandleRemoveClick = (index) => {
    const list = [...coursesInputList];
    list.splice(index, 1);
    setCoursesInputList(list);
  };

  // handle click event of the Add button
  const coursesHandleAddClick = () => {
    setCoursesInputList([
      ...coursesInputList,
      {
        course: "",
        institution: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };
  // ------ end ----- //

  // Extra-Curricular section functions
  const extraCurricularHandleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...extraCurricularInputList];
    list[index][name] = value;
    setExtraCurricularInputList(list);
  };

  // handle click event of the Remove button
  const extraCurricularHandleRemoveClick = (index) => {
    const list = [...extraCurricularInputList];
    list.splice(index, 1);
    setExtraCurricularInputList(list);
  };

  // handle click event of the Add button
  const extraCurricularHandleAddClick = () => {
    setExtraCurricularInputList([
      ...extraCurricularInputList,
      {
        functionTitle: "",
        employer: "",
        startDate: "",
        endDate: "",
        city: "",
        description: "",
      },
    ]);
  };
  // ------ end ----- //

  // Internship section functions
  const internshipHandleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...internshipInputList];
    list[index][name] = value;
    setInternshipInputList(list);
  };

  // handle click event of the Remove button
  const internshipHandleRemoveClick = (index) => {
    const list = [...internshipInputList];
    list.splice(index, 1);
    setInternshipInputList(list);
  };

  // handle click event of the Add button
  const internshipHandleAddClick = () => {
    setInternshipInputList([
      ...internshipInputList,
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

  // Preferences section functions
  const preferencesHandleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...referencesInputList];
    list[index][name] = value;
    setReferencesInputList(list);
  };

  // handle click event of the Remove button
  const preferencesHandleRemoveClick = (index) => {
    const list = [...referencesInputList];
    list.splice(index, 1);
    setReferencesInputList(list);
  };

  // handle click event of the Add button
  const preferencesHandleAddClick = () => {
    setReferencesInputList([
      ...referencesInputList,
      {
        referentFullName: "",
        company: "",
        phone: "",
        email: "",
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

  const editResumeTitleOnPressHandler = () => {
    const data = {
      resumeTitle: titleInput,
      resumeTitleUpdated: Date.now(),
    };
    setIsShowTitleInput(!isShowTitleInput);

    if (isShowTitleInput) {
      dispatch(resumeTitleAction(user, data));
    }
  };

  const deleteProfileImageHandler = () => {
    const data = resumeTemplateGetData?.data;

    let resumeData = {
      profileImage: "",
      wantedJobTitle: wantedJobTitle,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      country: country,
      city: city,
      address: address,
      postalCode: postalCode,
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
      hobbies: hobbies,
      languagesInputList: languagesInputList
        ? languagesInputList
        : data?.languagesInputList,
      coursesInputList: coursesInputList
        ? coursesInputList
        : data?.coursesInputList,
      internshipInputList: internshipInputList
        ? internshipInputList
        : data?.internshipInputList,
      extraCurricularInputList: extraCurricularInputList
        ? extraCurricularInputList
        : data?.extraCurricularInputList,
      referencesInputList: referencesInputList
        ? referencesInputList
        : data?.referencesInputList,
      summaryInput: summaryInput ? summaryInput : data?.summaryInput,
      employmentInput: employmentInput
        ? employmentInput
        : data?.employmentInput,
      educationInput: educationInput ? educationInput : data?.educationInput,
      coursesInput,
      extraCurricularInput,
      internshipInput,
      referencesInput,
      personalDetailInput,
      skillsInput,
      hobbiesInput,
      languagesInput,
      websiteInput,
      disabledPreferences: isNotShowIdLikeToHide,
    };
    setProfileImage("");
    dispatch(removeProfileImageFromDB(user, resumeData));
  };

  useEffect(() => {
    if (titleData) {
      setTitleInput(titleData?.resumeTitle);
    }

    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    if (success) {
      setProfileImage("");
      dispatch({ type: REMOVE_PROFILE_IMAGE_RESET });
    }
  }, [titleData, dispatch, error, success]);

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
      colorShown: true,
    },
    {
      id: 1,
      name: "Courses",
      icon: "https://resume.io/assets/media/section-courses-gray4d8b41f522ce96ff8365.svg",
      colorShown: false,
    },
    {
      id: 2,
      name: "Extra-curricular Activities",
      icon: "https://resume.io/assets/media/section-activities-gray7e85425b6e65f494fbc1.svg",
      colorShown: false,
    },
    {
      id: 3,
      name: "Internships",
      icon: "https://resume.io/assets/media/section-internships-graybee0baf04fd1befdb2b3.svg",
      colorShown: false,
    },
    {
      id: 4,
      name: "Hobbies",
      icon: "https://resume.io/assets/media/section-hobbies-gray16eeda80651a8ed0a51b.svg",
      colorShown: false,
    },
    {
      id: 5,
      name: "Languages",
      icon: "https://resume.io/assets/media/section-languages-gray0bf8f846467e476276ab.svg",
      colorShown: false,
    },
    {
      id: 6,
      name: "References",
      icon: "https://resume.io/assets/media/section-references-graye4ee4dd2b1f140fa6ada.svg",
      colorShown: false,
    },
  ];

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const isObjectEmpty = (objectName) => {
    for (let prop in objectName) {
      if (objectName?.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  };

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

  const downloadPDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: `${user?.firstName}'s Resume`,
    onAfterPrint: () => alert("Downloaded Successfully"),
    onPrintError: () => alert("You have cancel the PDF"),
  });

  useEffect(() => {
    if (tabName === "resumes") {
      dispatch(getResumeData(user));
      dispatch(getSelectResumeTemplateAction(user));
      dispatch(getResumeTitleAction(user));
    } else {
      dispatch(getCoverLetterDataAction(user));
      dispatch(getSelectCoverLetterTemplateAction(user));
      dispatch(getCoverLetterTitleAction(user));
    }
  }, [dispatch, user, tabName]);

  useEffect(() => {
    const coverLetterStoreGetData = JSON.parse(
      localStorage.getItem("coverLetterTemplateData")
    );
    const coverLetterData = coverLetterStoreGetData?.data;

    if (coverLetterData && tabName === "cover-letters") {
      setFullName(coverLetterData?.fullName);
      setJobTitle(coverLetterData?.jobTitle);
      setAddress(coverLetterData?.address);
      setEmail(coverLetterData?.email);
      setPhone(coverLetterData?.phone);
      setCompanyName(coverLetterData?.companyName);
      setHiringManagerName(coverLetterData?.hiringManagerName);
      setLetterDetails(coverLetterData?.letterDetails);
    }
  }, [tabName]);

  // set states from database
  useEffect(() => {
    const storeGetData = JSON.parse(localStorage.getItem("resumeTemplateData"));
    const resumeData = storeGetData?.data;

    if (resumeData && tabName === "resumes") {
      setWantedJobTitle(resumeData?.wantedJobTitle);
      setProfileImage(resumeData?.profileImage);
      setFirstName(resumeData?.firstName);
      setLastName(resumeData?.lastName);
      setEmail(resumeData?.email);
      setPhone(resumeData?.phone);
      setCountry(resumeData?.country);
      setCity(resumeData?.city);
      setAddress(resumeData?.address);
      setPostalCode(resumeData?.postalCode);
      setDrivingLicense(resumeData?.drivingLicense);
      setNationality(resumeData?.nationality);
      setDateOfBirth(resumeData?.dateOfBirth);
      setPlaceOfBirth(resumeData?.placeOfBirth);
      setProfessionalSummary(resumeData?.professionalSummary);
      if (
        resumeData?.employmentInputList?.length >= 1 &&
        employmentInputList?.length === 0
      ) {
        setEmploymentInputList(resumeData?.employmentInputList);
      }
      if (resumeData?.educationInputList?.length >= 1) {
        setEducationInputList(resumeData?.educationInputList);
      }
      if (resumeData?.websiteInputList?.length >= 1) {
        setWebsiteInputList(resumeData?.websiteInputList);
      }
      if (resumeData?.skillsInputList?.length >= 1) {
        setSkillsInputList(resumeData?.skillsInputList);
      }
      setIsNotShowExpertLevel(resumeData?.isNotShowExpertLevel);
      setHobbies(resumeData?.hobbies);
      if (resumeData?.languagesInputList?.length >= 1) {
        setLanguagesInputList(resumeData?.languagesInputList);
      }
      if (resumeData?.coursesInputList?.length >= 1) {
        setCoursesInputList(resumeData?.coursesInputList);
      }
      if (resumeData?.extraCurricularInputList?.length >= 1) {
        setExtraCurricularInputList(resumeData?.extraCurricularInputList);
      }
      if (resumeData?.internshipInputList?.length >= 1) {
        setInternshipInputList(resumeData?.internshipInputList);
      }
      if (resumeData?.referencesInputList?.length >= 1) {
        setReferencesInputList(resumeData?.referencesInputList);
      }
      setIsNotShowIdLikeToHide(resumeData?.disabledPreferences);
      setPersonalDetailInput(resumeData?.personalDetailInput);
      setSummaryInput(resumeData?.summaryInput);
      setEmploymentInput(resumeData?.employmentInput);
      setEducationInput(resumeData?.educationInput);
      setWebsiteInput(resumeData?.websiteInput);
      setSkillsInput(resumeData?.skillsInput);
      setHobbiesInput(resumeData?.hobbiesInput);
      setLanguagesInput(resumeData?.languagesInput);
      setCoursesInput(resumeData?.coursesInput);
      setExtraCurricularInput(resumeData?.extraCurricularInput);
      setInternshipInput(resumeData?.internshipInput);
      setReferencesInput(resumeData?.referencesInput);
    }
  }, [tabName]);

  useEffect(() => {
    const storeGetData = JSON.parse(localStorage.getItem("resumeTemplateData"));
    const resumeData = storeGetData?.data;

    if (tabName === "resumes") {
      saveData(resumeData);
    }

    const coverLetterStoreGetData = JSON.parse(
      localStorage.getItem("coverLetterTemplateData")
    );
    const coverLetterData = coverLetterStoreGetData?.data;

    const dataOfCoverLetter = {
      fullName: fullName
        ? fullName
        : isObjectEmpty(coverLetterData)
        ? ""
        : coverLetterData?.fullName,
      jobTitle: jobTitle
        ? jobTitle
        : isObjectEmpty(coverLetterData)
        ? ""
        : coverLetterData?.jobTitle,
      address: address
        ? address
        : isObjectEmpty(coverLetterData)
        ? ""
        : coverLetterData?.address,
      email: email
        ? email
        : isObjectEmpty(coverLetterData)
        ? ""
        : coverLetterData?.email,
      phone: phone
        ? phone
        : isObjectEmpty(coverLetterData)
        ? ""
        : coverLetterData?.phone,
      companyName: companyName
        ? companyName
        : isObjectEmpty(coverLetterData)
        ? ""
        : coverLetterData?.companyName,
      hiringManagerName: hiringManagerName
        ? hiringManagerName
        : isObjectEmpty(coverLetterData)
        ? ""
        : coverLetterData?.hiringManagerName,
      letterDetails: letterDetails
        ? letterDetails
        : isObjectEmpty(coverLetterData)
        ? ""
        : coverLetterData?.letterDetails,
    };
    if (tabName === "cover-letters") {
      dispatch(coverLetterDataSaveAction(user, dataOfCoverLetter));
    }
  }, [
    dispatch,
    profileImage,
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
    coursesInputList,
    internshipInputList,
    extraCurricularInputList,
    referencesInputList,
    summaryInput,
    employmentInput,
    educationInput,
    coursesInput,
    extraCurricularInput,
    internshipInput,
    referencesInput,
    personalDetailInput,
    skillsInput,
    hobbiesInput,
    languagesInput,
    websiteInput,
    isNotShowIdLikeToHide,
    fullName,
    jobTitle,
    address,
    email,
    phone,
    companyName,
    hiringManagerName,
    letterDetails,
    user,
    resumeTemplateGetData,
    success,
    tabName,
  ]);

  const saveData = async (getData) => {
    let resumeData = {
      profileImage: profileImage
        ? profileImage
        : isObjectEmpty(getData)
        ? ""
        : getData?.profileImage,
      wantedJobTitle: wantedJobTitle
        ? wantedJobTitle
        : isObjectEmpty(getData)
        ? ""
        : getData?.wantedJobTitle,
      firstName: firstName
        ? firstName
        : isObjectEmpty(getData)
        ? ""
        : getData?.firstName,
      lastName: lastName
        ? lastName
        : isObjectEmpty(getData)
        ? ""
        : getData?.lastName,
      email: email ? email : isObjectEmpty(getData) ? "" : getData?.email,
      phone: phone ? phone : isObjectEmpty(getData) ? "" : getData?.phone,
      country: country
        ? country
        : isObjectEmpty(getData)
        ? ""
        : getData?.country,
      city: city ? city : isObjectEmpty(getData) ? "" : getData?.city,
      address: address
        ? address
        : isObjectEmpty(getData)
        ? ""
        : getData?.address,
      postalCode: postalCode
        ? postalCode
        : isObjectEmpty(getData)
        ? ""
        : getData?.postalCode,
      drivingLicense: drivingLicense
        ? drivingLicense
        : isObjectEmpty(getData)
        ? ""
        : getData?.drivingLicense,
      nationality: nationality
        ? nationality
        : isObjectEmpty(getData)
        ? ""
        : getData?.nationality,
      placeOfBirth: placeOfBirth
        ? placeOfBirth
        : isObjectEmpty(getData)
        ? ""
        : getData?.placeOfBirth,
      dateOfBirth: dateOfBirth
        ? dateOfBirth
        : isObjectEmpty(getData)
        ? ""
        : getData?.dateOfBirth,
      professionalSummary: professionalSummary
        ? professionalSummary
        : isObjectEmpty(getData)
        ? ""
        : getData?.professionalSummary,
      employmentInputList: employmentInputList
        ? employmentInputList
        : isObjectEmpty(getData)
        ? ""
        : getData?.employmentInputList,
      educationInputList: educationInputList
        ? educationInputList
        : isObjectEmpty(getData)
        ? ""
        : getData?.educationInputList,
      websiteInputList: websiteInputList
        ? websiteInputList
        : isObjectEmpty(getData)
        ? ""
        : getData?.websiteInputList,
      skillsInputList: skillsInputList
        ? skillsInputList
        : isObjectEmpty(getData)
        ? ""
        : getData?.skillsInputList,
      isNotShowExpertLevel: isNotShowExpertLevel
        ? isNotShowExpertLevel
        : isObjectEmpty(getData)
        ? ""
        : getData?.isNotShowExpertLevel,
      hobbies: hobbies
        ? hobbies
        : isObjectEmpty(getData)
        ? ""
        : getData?.hobbies,
      languagesInputList: languagesInputList
        ? languagesInputList
        : isObjectEmpty(getData)
        ? ""
        : getData?.languagesInputList,
      coursesInputList: coursesInputList
        ? coursesInputList
        : isObjectEmpty(getData)
        ? ""
        : getData?.coursesInputList,
      internshipInputList: internshipInputList
        ? internshipInputList
        : isObjectEmpty(getData)
        ? ""
        : getData?.internshipInputList,
      extraCurricularInputList: extraCurricularInputList
        ? extraCurricularInputList
        : isObjectEmpty(getData)
        ? ""
        : getData?.extraCurricularInputList,
      referencesInputList: referencesInputList
        ? referencesInputList
        : isObjectEmpty(getData)
        ? ""
        : getData?.referencesInputList,
      summaryInput: summaryInput
        ? summaryInput
        : isObjectEmpty(getData)
        ? ""
        : getData?.summaryInput,
      employmentInput: employmentInput
        ? employmentInput
        : isObjectEmpty(getData)
        ? ""
        : getData?.employmentInput,
      educationInput: educationInput
        ? educationInput
        : isObjectEmpty(getData)
        ? ""
        : getData?.educationInput,
      coursesInput: coursesInput
        ? coursesInput
        : isObjectEmpty(getData)
        ? ""
        : getData?.coursesInput,
      extraCurricularInput: extraCurricularInput
        ? extraCurricularInput
        : isObjectEmpty(getData)
        ? ""
        : getData?.extraCurricularInput,
      internshipInput: internshipInput
        ? internshipInput
        : isObjectEmpty(getData)
        ? ""
        : getData?.internshipInput,
      referencesInput: referencesInput
        ? referencesInput
        : isObjectEmpty(getData)
        ? ""
        : getData?.referencesInput,
      personalDetailInput: personalDetailInput
        ? personalDetailInput
        : isObjectEmpty(getData)
        ? ""
        : getData?.personalDetailInput,
      skillsInput: skillsInput
        ? skillsInput
        : isObjectEmpty(getData)
        ? ""
        : getData?.skillsInput,
      hobbiesInput: hobbiesInput
        ? hobbiesInput
        : isObjectEmpty(getData)
        ? ""
        : getData?.hobbiesInput,
      languagesInput: languagesInput
        ? languagesInput
        : isObjectEmpty(getData)
        ? ""
        : getData?.languagesInput,
      websiteInput: websiteInput
        ? websiteInput
        : isObjectEmpty(getData)
        ? ""
        : getData?.websiteInput,
      disabledPreferences: isNotShowIdLikeToHide
        ? isNotShowIdLikeToHide
        : isObjectEmpty(getData)
        ? ""
        : getData?.disabledPreferences,
    };

    dispatch(resumeDataSave(user, resumeData));
  };

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
      resumeData={resumeTemplateGetData?.data}
      coursesInputList={coursesInputList}
      coursesInput={coursesInput}
      setCoursesInput={setCoursesInput}
      isShowCoursesIcon={isShowCoursesIcon}
      setIsShowCoursesIcon={setIsShowCoursesIcon}
      isShowCoursesInput={isShowCoursesInput}
      setIsShowCoursesInput={setIsShowCoursesInput}
      coursesHandleInputChange={coursesHandleInputChange}
      coursesHandleRemoveClick={coursesHandleRemoveClick}
      coursesHandleAddClick={coursesHandleAddClick}
      isShowCoursesBoxIcon={isShowCoursesBoxIcon}
      setIsShowCoursesBoxIcon={setIsShowCoursesBoxIcon}
      isShowCoursesBoxInput={isShowCoursesBoxInput}
      setIsShowCoursesBoxInput={setIsShowCoursesBoxInput}
      internshipInputList={internshipInputList}
      setInternshipInputList={setInternshipInputList}
      internshipInput={internshipInput}
      setInternshipInput={setInternshipInput}
      isShowInternshipIcon={isShowInternshipIcon}
      setIsShowInternshipIcon={setIsShowInternshipIcon}
      isShowInternshipInput={isShowInternshipInput}
      setIsShowInternshipInput={setIsShowInternshipInput}
      isShowInternshipBoxInput={isShowInternshipBoxInput}
      setIsShowInternshipBoxInput={setIsShowInternshipBoxInput}
      isShowInternshipBoxIcon={isShowInternshipBoxIcon}
      setIsShowInternshipBoxIcon={setIsShowInternshipBoxIcon}
      internshipHandleInputChange={internshipHandleInputChange}
      internshipHandleRemoveClick={internshipHandleRemoveClick}
      internshipHandleAddClick={internshipHandleAddClick}
      isChangedInternshipDescInputText={isChangedInternshipDescInputText}
      setIsChangedInternshipDescInputText={setIsChangedInternshipDescInputText}
      extraCurricularHandleInputChange={extraCurricularHandleInputChange}
      extraCurricularHandleRemoveClick={extraCurricularHandleRemoveClick}
      extraCurricularHandleAddClick={extraCurricularHandleAddClick}
      extraCurricularInputList={extraCurricularInputList}
      setExtraCurricularInputList={setExtraCurricularInputList}
      extraCurricularInput={extraCurricularInput}
      setExtraCurricularInput={setExtraCurricularInput}
      isShowExtraCurricularIcon={isShowExtraCurricularIcon}
      setIsShowExtraCurricularIcon={setIsShowExtraCurricularIcon}
      isShowExtraCurricularInput={isShowExtraCurricularInput}
      setIsShowExtraCurricularInput={setIsShowExtraCurricularInput}
      isShowExtraCurricularBoxInput={isShowExtraCurricularBoxInput}
      setIsShowExtraCurricularBoxInput={setIsShowExtraCurricularBoxInput}
      isShowExtraCurricularBoxIcon={isShowExtraCurricularBoxIcon}
      setIsShowExtraCurricularBoxIcon={setIsShowExtraCurricularBoxIcon}
      isChangedExtraCurricularDescInputText={
        isChangedExtraCurricularDescInputText
      }
      setIsChangedExtraCurricularDescInputText={
        setIsChangedExtraCurricularDescInputText
      }
      isNotShowIdLikeToHide={isNotShowIdLikeToHide}
      setIsNotShowIdLikeToHide={setIsNotShowIdLikeToHide}
      preferencesHandleInputChange={preferencesHandleInputChange}
      preferencesHandleRemoveClick={preferencesHandleRemoveClick}
      preferencesHandleAddClick={preferencesHandleAddClick}
      referencesInputList={referencesInputList}
      setReferencesInputList={setReferencesInputList}
      referencesInput={referencesInput}
      setReferencesInput={setReferencesInput}
      isShowReferencesIcon={isShowReferencesIcon}
      setIsShowReferencesIcon={setIsShowReferencesIcon}
      isShowReferencesInput={isShowReferencesInput}
      setIsShowReferencesInput={setIsShowReferencesInput}
      isShowReferencesBoxInput={isShowReferencesBoxInput}
      setIsShowReferencesBoxInput={setIsShowReferencesBoxInput}
      isShowReferencesBoxIcon={isShowReferencesBoxIcon}
      setIsShowReferencesBoxIcon={setIsShowReferencesBoxIcon}
      isShowColorAfterClick={isShowColorAfterClick}
      setIsShowColorAfterClick={setIsShowColorAfterClick}
      page={page}
      setPage={setPage}
      totalPage={totalPage}
      setTotalPage={setTotalPage}
      tabName={tabName}
      fullName={fullName}
      setFullName={setFullName}
      jobTitle={jobTitle}
      setJobTitle={setJobTitle}
      companyName={companyName}
      setCompanyName={setCompanyName}
      hiringManagerName={hiringManagerName}
      setHiringManagerName={setHiringManagerName}
      letterDetails={letterDetails}
      setLetterDetails={setLetterDetails}
      coverLetterData={coverLetterTemplateData?.data}
      templateData={templateData}
      resumeTempId={resumeTempId}
      coverTempId={coverTempId}
      editResumeTitleOnPressHandler={editResumeTitleOnPressHandler}
      titleData={titleData}
      loading={resumeTemplateGetDataLoading}
      saveLoading={tabName === "resumes" ? loading : coverLetterLoading}
      deleteProfileImageHandler={deleteProfileImageHandler}
      coverLetterTitleData={coverLetterTitleData}
      coverLetterSelectedTemplateLoading={coverLetterSelectedTemplateLoading}
      coverLetterSelectedTemplateData={coverLetterSelectedTemplateData}
      downloadPDF={downloadPDF}
      componentPDF={componentPDF}
    />
  );
};

export default EditResume;
