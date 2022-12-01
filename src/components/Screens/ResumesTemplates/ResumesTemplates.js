import React, { useState } from "react";
import ResumesTemplatesMarkup from "./ResumesTemplatesMarkup";
import { VscFiles } from "react-icons/vsc";
import { FaRegCopyright } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { TbBriefcase } from "react-icons/tb";
import { TbHandRock } from "react-icons/tb";

const ResumesTemplates = (props) => {
  const [showSelectedTab, setShowSelectedTab] = useState({
    id: 0,
    tabName: "All templates",
  });
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const navigate = props.navigate();

  const [isHovered, setIsHovered] = useState({});

  const openDrawer = () => {
    setToggleDrawer(!toggleDrawer);
  };

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
      id: "0231",
      name: "Vienna",
      description:
        "Striking modern header, professional two column template structure.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/406/persistent-resource/vienna-resume-templates.jpg",
    },
    {
      id: "4232",
      name: "Sydney",
      description:
        "Modern and eye-catching resume template. Beautiful contrasting structure.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/441/persistent-resource/sydney-resume-templates.jpg",
    },
    {
      id: "3422",
      name: "Moscow",
      description: "Open white-space template, excellent readability.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/1523/persistent-resource/moscow-resume-templates.jpg",
    },
    {
      id: "4232",
      name: "Sydney",
      description:
        "Modern and eye-catching resume template. Beautiful contrasting structure.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/441/persistent-resource/sydney-resume-templates.jpg",
    },
    {
      id: "4232",
      name: "Sydney",
      description:
        "Modern and eye-catching resume template. Beautiful contrasting structure.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/441/persistent-resource/sydney-resume-templates.jpg",
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
      id: "6666",
      name: "London",
      description:
        "Classically structured resume template, for a robust career history.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/481/persistent-resource/london-resume-templates.jpg",
    },
  ];

  const simpleData = [
    {
      id: "3424",
      name: "London",
      description:
        "Classically structured resume template, for a robust career history.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/481/persistent-resource/london-resume-templates.jpg",
    },
    {
      id: "4422",
      name: "Santiago",
      description:
        "Classic full-page resume template with sizable resume sections.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/383/persistent-resource/santiago-resume-templates.jpg",
    },
    {
      id: "3333",
      name: "Singapore",
      description: "Clean, orderly template structure with stylish minimalism.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/400/persistent-resource/singapore-resume-templates.jpg",
    },
    {
      id: "5664",
      name: "Oslo",
      description:
        "Reliable and elegant image. Minimalist single column outline.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/142/persistent-resource/oslo-resume-templates.jpg",
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
    {
      id: "5332",
      name: "Dublin",
      description:
        "A touch of personality with a well-organized resume structure.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/488/persistent-resource/dublin-resume-templates.jpg",
    },
  ];

  const modernData = [
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
      id: "3424",
      name: "London",
      description:
        "Classically structured resume template, for a robust career history.",
      cvImage:
        "https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/481/persistent-resource/london-resume-templates.jpg",
    },
  ];

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
    />
  );
};

export default ResumesTemplates;
