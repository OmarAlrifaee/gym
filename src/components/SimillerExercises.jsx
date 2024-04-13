import { Link } from "react-router-dom";
import Loader from "./Loader";
const SimillerExercises = ({
  targetMuscleExercises,
  equipmentMuscleExercises,
}) => {
  return (
    <div className="similer-exercises mt-5">
      <h3 className="fw-bold text-lg-start text-center text-capitalize">
        exercises that target the same muscle
      </h3>
      <div className="similer-target-exercises d-flex align-items-center gap-5 p-3 overflow-auto">
        {targetMuscleExercises.length ? (
          targetMuscleExercises.map(
            ({ name, target, bodyPart, gifUrl, id }) => (
              <Link
                to={`/exercise/${id}`}
                className="exercise-card border-top border-danger border-3 text-decoration-none "
                key={id}
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
                <h3 className="fw-bold text-capitalize mt-3 text-black fs-4">
                  {name}
                </h3>
              </Link>
            )
          )
        ) : (
          <Loader />
        )}
      </div>
      <h3 className="fw-bold text-lg-start text-center text-capitalize mt-5 pt-5">
        exercises that equipment the same muscle
      </h3>
      <div className="similer-equipment-exercises d-flex align-items-center gap-5 p-3 overflow-auto">
        {equipmentMuscleExercises.length ? (
          equipmentMuscleExercises.map(
            ({ name, target, bodyPart, gifUrl, id }) => (
              <Link
                to={`/exercise/${id}`}
                className="exercise-card border-top border-danger border-3 text-decoration-none "
                key={id}
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
                <h3 className="fw-bold text-capitalize mt-3 text-black fs-4">
                  {name}
                </h3>
              </Link>
            )
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default SimillerExercises;
