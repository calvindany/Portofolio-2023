import "../assets/css/Home.css";
import "../assets/css/Root.css";
import ImageOverlay from "./ImageOverlay";
export default function ImageProject({ image, name }) {
  return (
    <>
      <div className="image-project">
        <img src={image} alt="" />
        <ImageOverlay />
      </div>
    </>
  );
}
