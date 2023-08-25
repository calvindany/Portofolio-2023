import "../assets/css/Home.css";
export default function ImageProject({ image, name }) {
  return (
    <>
      <div className="image-project">
        <img src={image} alt="" />
      </div>
    </>
  );
}
