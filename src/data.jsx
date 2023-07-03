import {
  FaEnvelopeOpen,
  FaFile,
  FaFolderOpen,
  FaHome,
  FaStar,
  FaUser,
} from "react-icons/fa";

export const links = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: <FaHome className="nav-icon"></FaHome>,
  },
  {
    id: 2,
    name: "About",
    path: "/about",
    icon: <FaUser className="nav-icon"></FaUser>,
  },
  {
    id: 3,
    name: "Skills",
    path: "/skills",
    icon: <FaStar className="nav-icon"></FaStar>,
  },
  {
    id: 4,
    name: "Portfolio",
    path: "/portfolio",
    icon: <FaFolderOpen className="nav-icon"></FaFolderOpen>,
  },

  {
    id: 5,
    name: "Contact",
    path: "/contact",
    icon: <FaEnvelopeOpen className="nav-icon"></FaEnvelopeOpen>,
  },
];

export const skills = [
  { id: 1, title: "JavaScript", percentage: 90 },
  { id: 2, title: "HTML", percentage: 95 },
  { id: 3, title: "CSS", percentage: 90 },
  { id: 4, title: "React.js", percentage: 85 },
  { id: 5, title: "Node.js", percentage: 80 },
  { id: 6, title: "Express.js", percentage: 80 },
  { id: 7, title: "MongoDB", percentage: 75 },
  { id: 8, title: "tailwind", percentage: 70 },
  { id: 9, title: "Git", percentage: 85 },
  { id: 10, title: "Bootstrap", percentage: 80 },
  { id: 11, title: "Daisy ui", percentage: 70 },
];

export const portfolio = [
  {
    id: 1,
    image: "image1.jpg",
    work: "Web Development",
    title: "Video Editing",
    details: [
      {
        icon: <FaFile></FaFile>,
        title: "Project :",
        desc: "Video",
      },
      {
        icon: "icon2.jpg",
        title: "Detail 2",
        desc: "Sed ac fermentum nulla, vitae luctus purus.",
      },
      {
        icon: "icon3.jpg",
        title: "Detail 3",
        desc: "Vestibulum sed metus id turpis pretium congue eget vitae lorem.",
      },
    ],
  },
  {
    id: 2,
    image: "image2.jpg",
    work: "Graphic Design",
    title: "Project B",
    details: [
      {
        icon: "icon4.jpg",
        title: "Detail 1",
        desc: "Praesent a consequat mi. Vestibulum sed metus id turpis pretium congue eget vitae lorem.",
      },
      {
        icon: "icon5.jpg",
        title: "Detail 2",
        desc: "Donec facilisis eleifend enim, non posuere nisi eleifend vitae.",
      },
    ],
  },
  {
    id: 3,
    image: "image3.jpg",
    work: "Photography",
    title: "Project C",
    details: [
      {
        icon: "icon6.jpg",
        title: "Detail 1",
        desc: "Curabitur semper pretium mi nec dapibus.",
      },
      {
        icon: "icon7.jpg",
        title: "Detail 2",
        desc: "Nam eu risus efficitur, auctor quam ac, eleifend lacus.",
      },
    ],
  },
  {
    id: 4,
    image: "image4.jpg",
    work: "Mobile App Development",
    title: "Project D",
    details: [
      {
        icon: "icon8.jpg",
        title: "Detail 1",
        desc: "Fusce nec enim eget turpis accumsan efficitur.",
      },
      {
        icon: "icon9.jpg",
        title: "Detail 2",
        desc: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      },
    ],
  },
  {
    id: 5,
    image: "image5.jpg",
    work: "Illustration",
    title: "Project E",
    details: [
      {
        icon: "icon10.jpg",
        title: "Detail 1",
        desc: "Nulla nec elit massa.",
      },
      {
        icon: "icon11.jpg",
        title: "Detail 2",
        desc: "Aenean eget consequat metus, sed lobortis ipsum.",
      },
    ],
  },
];
