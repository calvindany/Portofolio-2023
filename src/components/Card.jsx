export default function Card({ title, period, description }) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="display-3">{title}</div>
          <div className="display-4">{period}</div>
        </div>
        <div className="display-4">{description}</div>
      </div>
    </>
  );
}
