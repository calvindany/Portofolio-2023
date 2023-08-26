import PropTypes from "prop-types";

export default function ImageOverlay({ name }) {
  return (
    <>
      <div className="overlay">
        <div className="content">
          <h1>{name}</h1>
        </div>
      </div>
    </>
  );
}

ImageOverlay.propTypes = {
  name: PropTypes.string,
};
