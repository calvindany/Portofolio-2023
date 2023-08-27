import Bootstrap from "../img/bootstrap.png";
import HTML from "../img/html.png";
import CSS from "../img/css.png";
import JS from "../img/js.png";
import NodeJS from "../img/nodejs.png";
import Express from "../img/express.png";
import MongoDb from "../img/mongodb.png";

import BatiqueLanding from "../img/Batique/landing.png";
import BatiqueArtikel from "../img/Batique/artikel.png";
import BatiqueGaleri from "../img/Batique/galeri.png";
import BatiqueProfile from "../img/Batique/profile.png";
import BatiqueTentang from "../img/Batique/tentang.png";
import BatiqueLogin from "../img/Batique/login.png";
import BatiqueRegister from "../img/Batique/register.png";

import RozelineLanding from "../img/Rozeline/landing.png";
import RozelineFlora from "../img/Rozeline/flora.png";
import RozelineDetail from "../img/Rozeline/detail.png";

const TechsData = [
  {
    name: "Boostrap",
    logo: Bootstrap,
  },
  { name: "HTMl", logo: HTML },
  { name: "CSS", logo: CSS },
  { name: "JavaScript", logo: JS },
  { name: "Node JS", logo: NodeJS },
  { name: "Express JS", logo: Express },
  { name: "MongoDB", logo: MongoDb },
];

const Experiences = [
  {
    title: "Kedaireka - Research Assistant",
    period: "Sep 2022 - Dec 2022",
    description:
      "Creating an informational system that provides learning resources about various types of flora.",
  },
  {
    title: "LepKom - Laboratory Asisstant",
    period: "Mar 2022 - Present",
    description:
      "Conducting workshops and performing computer maintenance at Gunadarma University's laboratory.",
  },
  {
    title: "Bangkit Academy - Cloud Computing Student",
    period: "Feb 2023 - Jul 2023",
    description:
      "Conducting a lesson about the cloud service features available on the Google Cloud Platform and the basics of backend application using HapiJS and ExpressJS.",
  },
  {
    title: "Coding.ID - Coach Assistant",
    period: "Feb 2023 - Present",
    description:
      "Providing coaching on programming problems, starting from basic logic using the JavaScript programming language. Acting as a mentor for bootcamp participants to ensure they meet the requirements while working on the final project, as well as teaching the basics of becoming a fullstack engineer using the React.js and .NET Core framework.",
  },
];

const Projects = [
  {
    name: "Batique",
    opening:
      "An website-based application that provides information about various types of flora present in the Flower Garden of Penajam Paser Utara Regency, East Kalimantan.",
    generalDescription1:
      "This website application provides information about the various types of flora present in the Rozeline Flower Garden.",
    generalDescription2:
      "This website is collaboratively built within a team and I'm responsible for designing and creating the user interface of the pages.",
    techUsed: ["React JS", "Firebase"],
    images: [
      { title: "Landing Page", image: BatiqueLanding },
      { title: "About Page", image: BatiqueTentang },
      { title: "Article Page", image: BatiqueArtikel },
      { title: "Galery Page", image: BatiqueGaleri },
      { title: "Profile Page", image: BatiqueProfile },
      { title: "Login Page", image: BatiqueLogin },
      { title: "Register Page", image: BatiqueRegister },
    ],
  },
  {
    name: "Rozeline",
    opening:
      "An website-based application that provides information about various types of flora present in the Flower Garden of Penajam Paser Utara Regency, East Kalimantan.",
    generalDescription1:
      "This website application provides information about the various types of flora present in the Rozeline Flower Garden.",
    generalDescription2:
      "This website is collaboratively built within a team and I'm responsible for designing and creating the user interface of the pages.",
    techUsed: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Javascript",
      "MySQL",
      "CodeIgniter",
    ],
    images: [
      { title: "Landing Page", image: RozelineLanding },
      { title: "Flora Galery Page", image: RozelineFlora },
      { title: "Flora Detail Page", image: RozelineDetail },
    ],
  },
];

export { TechsData, Experiences, Projects };
