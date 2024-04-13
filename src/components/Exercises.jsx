import { useEffect, memo } from "react";
import { FetchData, exercisesOptions } from "../utils/FetchData";
import { useContext } from "react";
import { exercisesSectionContext } from "../pages/Home";
import ExerciseCard from "./ExerciseCard";
const Exercises = ({ setExercises, exercises, bodyPart }) => {
  // get the Ref context
  const exercisesSectionRef = useContext(exercisesSectionContext);
  // fetch the data on component render and on bodypart changes
  useEffect(() => {
    (async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        // fetch All exerxises
        exercisesData = await FetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exercisesOptions
        );
      } else {
        // fetch only the similer body part
        exercisesData = await FetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exercisesOptions
        );
      }
      // now set the data
      setExercises(exercisesData);
    })();
  }, [bodyPart, setExercises]);
  return (
    <div className="exercises py-5" id="exercises">
      <h3 className="fw-bold text-capitalize text-center">
        results: {exercises.length}
      </h3>
      <div
        className="exercises-container d-flex flex-wrap justify-content-center gap-5 mt-5"
        ref={exercisesSectionRef}
      >
        {exercises.map(
          ({ name, target, bodyPart, equipment, gifUrl, id }, index) => (
            <ExerciseCard
              key={id}
              name={name}
              target={target}
              bodyPart={bodyPart}
              equipment={equipment}
              gifUrl={gifUrl}
              id={id}
              index={index}
            />
          )
        )}
      </div>
    </div>
  );
};

export const ExercisesMemo = memo(Exercises);
