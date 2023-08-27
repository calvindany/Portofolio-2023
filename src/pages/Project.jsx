import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";
import { motion } from "framer-motion";

import "../assets/css/Root.css";
import "../assets/css/Project.css";
import "../assets/css/Home.css";

import { Projects } from "../assets/data/data";

import ImageProject from "../components/ImageProject";

export default function Project() {
  const [id, setId] = useState();
  const [projectInformation, setProjectInformation] = useState(null);
  const searchParams = useLocation();
  useEffect(() => {
    setId(searchParams.search.split("=")[1]);
    window.scrollTo(top);
  }, [searchParams]);

  useEffect(() => {
    setProjectInformation(Projects[id]);
  }, [id]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {projectInformation ? (
        <>
          <section className="project-header" id="project-header">
            <div>
              <h1 className="display-1 highlight">{projectInformation.name}</h1>
              <h3 className="display-3">{projectInformation.opening}</h3>
            </div>
            <div className="image-header">
              <img src={projectInformation.image[0]} alt="" />
            </div>
          </section>

          <section className="project-description" id="project-description">
            <div className="project-description-wrapper">
              <div className="general-description">
                <h1 className="display-2 highlight">General Description</h1>
                <div className="description">
                  <p className="display-3">
                    {projectInformation.generalDescription1}
                  </p>
                  <p className="display-3">
                    {projectInformation.generalDescription2}
                  </p>
                </div>
              </div>
              <div className="technology-used">
                <h1 className="display-2 highlight">Used Tech</h1>
                <div className="list-tech display-4">
                  {projectInformation.techUsed.map((tech, index) => (
                    <p className="display-3" key={index}>
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="project-overview" id="project-overview">
            <h1 className="display-2 highlight">Project Overview</h1>
            <div className="list-overview">
              {projectInformation.image.map((image, index) => (
                <ImageProject image={image} key={index} />
              ))}
            </div>
          </section>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "50px 64px",
          }}
        >
          <GridLoader color="#372B22" />
        </div>
      )}
    </motion.div>
  );
}
