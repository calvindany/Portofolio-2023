import Bootstrap from "../img/bootstrap.png";
import HTML from "../img/html.png";
import CSS from "../img/css.png";
import JS from "../img/js.png";
import NodeJS from "../img/nodejs.png";
import Express from "../img/express.png";
import MongoDb from "../img/mongodb.png";

import Batique from "../img/batique.png";
import Rozeline from "../img/rozeline.png";
import Rozeline2 from "../img/rozeline2.png";
import Rozeline3 from "../img/rozeline3.png";

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
      "Creating an informational system that provides learning resources about various types of flora.",
  },
  {
    title: "Bangkit Academy - Cloud Computing Student",
    period: "Feb 2023 - Jul 2023",
    description:
      "Creating an informational system that provides learning resources about various types of flora.",
  },
  {
    title: "Coding.ID - Coach Assistant",
    period: "Feb 2023 - Present",
    description:
      "Creating an informational system that provides learning resources about various types of flora.",
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
    techUsed: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Javascript",
      "MySQL",
      "CodeIgniter",
    ],
    image: [Batique],
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
    image: [Rozeline, Rozeline2, Rozeline3],
  },
];

export { TechsData, Experiences, Projects };
