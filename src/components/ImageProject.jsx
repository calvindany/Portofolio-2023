import "../assets/css/Home.css";
import "../assets/css/Root.css";
import ImageOverlay from "./ImageOverlay";
export default function ImageProject({ data }) {
  return (
    <>
      <div className="image-project">
        <img src={data.image} alt="" />
        <ImageOverlay title={data.title} />
      </div>
    </>
  );
}
