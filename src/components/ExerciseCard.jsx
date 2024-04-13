import { Link } from "react-router-dom";
const ExerciseCard = ({
  name,
  target,
  bodyPart,
  equipment,
  gifUrl,
  id,
  index,
}) => {
  return (
    <Link
      to={`/exercise/${id}`}
      className="exercise-card border-top border-danger border-3 text-decoration-none "
      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
    >
      <img
        src={gifUrl}
        alt={name}
        loading="lazy"
      />
      <div className="buttons d-flex gap-3 mt-3">
        <div className="btn btn-warning rounded-pill text-white text-capitalize fw-bold text-decoration-none">
          {bodyPart}
        </div>
        <div className="btn btn-danger rounded-pill text-white text-capitalize fw-bold">
          {target}
        </div>
      </div>
      <h3 className="fw-bold text-capitalize mt-3 text-black fs-4">{name}</h3>
    </Link>
  );
};

export default ExerciseCard;
