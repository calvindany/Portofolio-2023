import "../assets/css/Home.css";
import "../assets/css/Root.css";

import { useNavigate } from "react-router-dom";

import ImageOverlay from "./ImageOverlay";

export default function ImageProject({ image, name }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="image-project" onClick={() => navigate("/project")}>
        <img src={image} alt="" />
        <ImageOverlay />
      </div>
    </>
  );
}
