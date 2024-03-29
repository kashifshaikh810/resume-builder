import React, { useEffect, useState } from "react";
import { VscFiles } from "react-icons/vsc";
import { FaRegCopyright } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { TbBriefcase } from "react-icons/tb";
import { TbHandRock } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";

import ResumesTemplatesMarkup from "./ResumesTemplatesMarkup";
import {
  clearErrors,
  getSelectResumeTemplateAction,
  selectResumeTemplateAction,
} from "../../../redux/actions/resumeAction";
import { SELECTED_RESUME_TEMPLATE_RESET } from "../../../redux/constants/resumeConstants";

const ResumesTemplates = (props) => {
  const [showSelectedTab, setShowSelectedTab] = useState({
    id: 0,
    tabName: "All templates",
  });
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const navigate = props.navigate();

  const [isHovered, setIsHovered] = useState({});

  const { innerWidth: width } = window;

  const openDrawer = () => {
    setToggleDrawer(!toggleDrawer);
  };

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.currentUser);
  const { templateData, success, error } = useSelector(
    (state) => state.selectTemplate
  );

  const tabsData = [
    { id: 0, tabName: "All templates", tabIcon: () => <VscFiles size={25} /> },
    { id: 1, tabName: "Creative", tabIcon: () => <FaRegCopyright size={25} /> },
    { id: 2, tabName: "Simple", tabIcon: () => <BsStars size={25} /> },
    {
      id: 3,
      tabName: "Professional",
      tabIcon: () => <TbBriefcase size={25} />,
    },
    { id: 4, tabName: "Modern", tabIcon: () => <TbHandRock size={25} /> },
  ];

  const creativeData = [
    {
      id: "0431",
      name: "Toronto",
      description:
        "A web-inspired resume template perfect for chatting up your achievements.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3501/persistent-resource/toronto-resume-templates.jpg",
    },
    {
      id: "5553",
      name: "Stockholm",
      description:
        "Perfect balance of fresh and functional resume template design.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/389/persistent-resource/new-york-resume-templates.jpg",
    },
    {
      id: "9433",
      name: "New York",
      description:
        "Professional and elegant resume template with a timeline structure.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1523/persistent-resource/moscow-resume-templates.jpg",
    },
    {
      id: "5344",
      name: "Vienna",
      description:
        "Striking modern header, professional two column template structure.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/407/persistent-resource/vienna-resume-templates.jpg",
    },
  ];

  const allTempData = [
    {
      id: "0431",
      name: "Toronto",
      description:
        "A web-inspired resume template perfect for chatting up your achievements.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3501/persistent-resource/toronto-resume-templates.jpg",
    },
    {
      id: "5553",
      name: "Stockholm",
      description:
        "Perfect balance of fresh and functional resume template design.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/389/persistent-resource/new-york-resume-templates.jpg",
    },
    {
      id: "9433",
      name: "New York",
      description:
        "Professional and elegant resume template with a timeline structure.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1523/persistent-resource/moscow-resume-templates.jpg",
    },
    {
      id: "5344",
      name: "Vienna",
      description:
        "Striking modern header, professional two column template structure.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/407/persistent-resource/vienna-resume-templates.jpg",
    },
  ];

  const simpleData = [
    {
      id: "0431",
      name: "Toronto",
      description:
        "A web-inspired resume template perfect for chatting up your achievements.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3501/persistent-resource/toronto-resume-templates.jpg",
    },
    {
      id: "5553",
      name: "Stockholm",
      description:
        "Perfect balance of fresh and functional resume template design.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/389/persistent-resource/new-york-resume-templates.jpg",
    },
    {
      id: "9433",
      name: "New York",
      description:
        "Professional and elegant resume template with a timeline structure.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1523/persistent-resource/moscow-resume-templates.jpg",
    },
    {
      id: "5344",
      name: "Vienna",
      description:
        "Striking modern header, professional two column template structure.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/407/persistent-resource/vienna-resume-templates.jpg",
    },
  ];

  const professionalData = [
    {
      id: "4552",
      name: "Toronto",
      description:
        "A web-inspired resume template perfect for chatting up your achievements.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3367/persistent-resource/toronto-resume-templates.jpg",
    },
    {
      id: "6534",
      name: "Stockholm",
      description:
        "Perfect balance of fresh and functional resume template design.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg",
    },
    {
      id: "3553",
      name: "New York",
      description:
        "Professional and elegant resume template with a timeline structure.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/389/persistent-resource/new-york-resume-templates.jpg",
    },
    {
      id: "5344",
      name: "Vienna",
      description:
        "Striking modern header, professional two column template structure.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/407/persistent-resource/vienna-resume-templates.jpg",
    },
  ];

  const modernData = [
    {
      id: "0431",
      name: "Toronto",
      description:
        "A web-inspired resume template perfect for chatting up your achievements.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/3501/persistent-resource/toronto-resume-templates.jpg",
    },
    {
      id: "5553",
      name: "Stockholm",
      description:
        "Perfect balance of fresh and functional resume template design.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/389/persistent-resource/new-york-resume-templates.jpg",
    },
    {
      id: "9433",
      name: "New York",
      description:
        "Professional and elegant resume template with a timeline structure.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1523/persistent-resource/moscow-resume-templates.jpg",
    },
    {
      id: "5344",
      name: "Vienna",
      description:
        "Striking modern header, professional two column template structure.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/407/persistent-resource/vienna-resume-templates.jpg",
    },
  ];

  const selectTemplateHandler = (user, templateName, index) => {
    if (
      templateData?.selectedTemplate === "Toronto" ||
      (templateName === "Toronto" && index === 0)
    ) {
      const isSelectedTemplate = {
        nameOfSelectedVal: templateName,
        numOfSelectedVal: index,
      };
      dispatch(
        selectResumeTemplateAction(user, templateName, isSelectedTemplate)
      );
    } else if (
      templateData?.selectedTemplate === "Stockholm" ||
      (templateName === "Stockholm" && index === 1)
    ) {
      const isSelectedTemplate = {
        nameOfSelectedVal: templateName,
        numOfSelectedVal: index,
      };
      dispatch(
        selectResumeTemplateAction(user, templateName, isSelectedTemplate)
      );
    } else if (
      templateData?.selectedTemplate === "New York" ||
      (templateName === "New York" && index === 2)
    ) {
      const isSelectedTemplate = {
        nameOfSelectedVal: templateName,
        numOfSelectedVal: index,
      };
      dispatch(
        selectResumeTemplateAction(user, templateName, isSelectedTemplate)
      );
    } else if (
      templateData?.selectedTemplate === "Vienna" ||
      (templateName === "Vienna" && index === 3)
    ) {
      const isSelectedTemplate = {
        nameOfSelectedVal: templateName,
        numOfSelectedVal: index,
      };
      dispatch(
        selectResumeTemplateAction(user, templateName, isSelectedTemplate)
      );
    }
  };

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(getSelectResumeTemplateAction(user));

    if (success) {
      dispatch(getSelectResumeTemplateAction(user));
      navigate("/app");
      dispatch({ type: SELECTED_RESUME_TEMPLATE_RESET });
    }
  }, [dispatch, error, navigate, success, user]);

  return (
    <ResumesTemplatesMarkup
      {...props}
      showSelectedTab={showSelectedTab}
      setShowSelectedTab={setShowSelectedTab}
      openDrawer={openDrawer}
      navigate={navigate}
      toggleDrawer={toggleDrawer}
      creativeData={creativeData}
      modernData={modernData}
      professionalData={professionalData}
      allTempData={allTempData}
      simpleData={simpleData}
      tabsData={tabsData}
      isHovered={isHovered}
      setIsHovered={setIsHovered}
      screenWidth={width}
      selectTemplateHandler={selectTemplateHandler}
      user={user}
      templateData={templateData}
    />
  );
};

export default ResumesTemplates;
