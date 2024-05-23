import udemy_diploma from "../images/diploma Udemy-ztm_jpg.jpg";
import intership_diploma from "../images/Recommendation letter Bocanel Valerica.jpg";
import udemy_logo from "../images/Udemy-Logo.png";
import devzone_logo from "../images/devzone-logo.jpg";
import binarcode_logo from "../images/binarcode_logo.png";

export const experiences = [
  {
    id: 0,
    img: udemy_logo,
    role: "Self learner",
    company: "Udemy courses",
    date: "2022-2024",
    desc: "I studied on my own several courses on Udemy to develop my knowledge of Web Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "NodeJs", "Express"],
    doc: udemy_diploma,
  },
  {
    id: 1,
    img: devzone_logo,
    role: "Mentorship",
    company: "DevZone",
    date: "01/2023-08-2023",
    desc: "I participated in an intensive training program under the guidance of a Senior Front-End Developer, aiming to acquire the essential skills and knowledge required to excel as a proficient programmer.",
    skills: ["HTML", "CSS", "JavaScript", "React", "NodeJs", "Express"],
    doc: "",
  },
  {
    id: 2,
    img: binarcode_logo,
    role: "Intership",
    company: "BinarCode",
    date: "12/2022-03-2023",
    desc: "During my internship at BinarCode, I worked on the Task Management project, enhancing my front-end development skills. Under the guidance of a mentor, I contributed to developing a project management web application, quickly learning new technologies and applying my problem-solving abilities. This experience significantly boosted my proficiency as a front-end developer.",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    doc: intership_diploma,
  },
];
