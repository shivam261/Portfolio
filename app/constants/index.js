import company1 from "../../public/c1.jpeg";
import company2 from "../../public/c2.jpeg";
import company3 from "../../public/c3.jpeg";
import company4 from "../../public/c4.jpeg";
import ramujanLogo from "../../public/rulogo.png";
import project1 from "../../public/project1.jpeg";
import project2 from "../../public/project2.jpeg";
import project3 from "../../public/project3.jpeg";
import project4 from "../../public/project4.jpeg";

export const PROFILE = {
  name: "Shivam Tripathi",
  email: "Shivam1705of@gmail.com",
  city: "Bhopal, Madhya Pradesh 🇳🇪",
  greet: "Nice to Meet you!",
};

export const PROJECTS = [
  {
    name: "Email Campaign",
    image: project1,
    url: "https://github.com/shivam261/EmailCampaign",
  },
  {
    name: "School Manager",
    image: project2,
    url: "https://github.com/shivam261/schoolManagement",
  },
];

export const SKILLS = [
  "React, Docker , NextJs",
  "Node.js, Express  ",
  "C++, JAVA ,JavaScript ",
  "PostgreSQL, MySQL, MongoDB, ",
  "RESTful and GraphQL APIs",
  "AWS,JavaScript ",
];

export const EXPERIENCES = [
  {
    img: ramujanLogo,
    year: "june,2024 - july,2024",
    role: "High performance computing intern ",
    company: "Ramujan Universe",
    description: `Implemented OpenMPI based parallel algorithms to boost computational efficiency by 40% in HPC environments.Conducted comprehensive performance analysis and benchmarking of HPC systems using MPIP and Scalasca`,
    technologies: [
      "OpenMP",
      "Multiprocessing",
      "Multithreading",
      "C++",
      "Python",
      "CUDA",
    ],
  },
];
