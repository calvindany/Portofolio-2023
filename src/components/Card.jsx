import PropTypes from "prop-types";

export default function Card({ title, period, description }) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="display-3">{title}</div>
          <div className="display-4">{period}</div>
        </div>
        <div className="display-5">{description}</div>
      </div>
    </>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  period: PropTypes.string,
  description: PropTypes.string,
};
