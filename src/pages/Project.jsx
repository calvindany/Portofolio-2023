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
        <div>
          <div className="general-description">
            <h1 className="display-2 highlight">General Description</h1>

            <div className="description">
              <p className="display-3">
                This website application provides information about the various
                types of flora present in the Rozeline Flower Garden.
              </p>
              <p className="display-3">
                This website is collaboratively built within a team and I’m
                responsible for designing and creating the user interface of the
                pages.
              </p>
            </div>
          </div>
          <div className="technology-used">
            <h1 className="display-2 highlight">Used Tech</h1>
            <div className="list-tech display-4">
              <p>HTML 5</p>
              <p>CSS 3</p>
              <p>Bootstrap</p>
              <p>Javascript</p>
              <p>MySQL</p>
              <p>CodeIgniter</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
