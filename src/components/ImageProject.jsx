import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import "../assets/css/Home.css";
import "../assets/css/Root.css";

import ImageOverlay from "./ImageOverlay";

export default function ImageProject({ image, name, index }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="image-project"
        onClick={() => navigate(`/project?id=${index}`)}
      >
        <img src={image} alt="" />
        <ImageOverlay name={name} />
      </div>
    </>
  );
}

ImageProject.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.number,
};
