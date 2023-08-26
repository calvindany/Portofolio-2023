import "../assets/css/Root.css";
import "../assets/css/Project.css";

import Rozeline from "../assets/img/rozeline.png";

export default function Project() {
  return (
    <>
      <section className="project-header">
        <div>
          <h1 className="display-1 highlight">Rozeline</h1>
          <h3 className="display-3">
            An website-based application that provides information about various
            types of flora present in the Flower Garden of Penajam Paser Utara
            Regency, East Kalimantan.
          </h3>
        </div>
        <div className="image-header">
          <img src={Rozeline} alt="" />
        </div>
      </section>

      <section className="project-description">
        <div className="general-description">
          <h1 className="display-2 highlight">General Description</h1>
        </div>
        <div className="technology-used"></div>
      </section>
    </>
  );
}
