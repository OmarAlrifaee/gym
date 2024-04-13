import { useState, useEffect, useContext, useRef, memo } from "react";
import { FetchData, exercisesOptions } from "../utils/FetchData";
import HorsintalScrollBar from "./HorsintalScrollBar";
import { exercisesSectionContext } from "../pages/Home";
import ErrorBoundry from "./ErrorBoundry";
import PopUp from "./PopUp";
const SearchExercises = ({
  setExercises,
  setBodyPart,
  bodyPart,
  exercises,
}) => {
  // states
  const [search, setSearch] = useState(""),
    [bodyParts, setBodyParts] = useState([]),
    [popup, setPopup] = useState(false);
  // button ref
  const buttonRef = useRef();
  const exercisesSectionRef = useContext(exercisesSectionContext);
  useEffect(() => {
    (async () => {
      const bodyPartsData = await FetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exercisesOptions
      );
      // set the body parts list to the state
      setBodyParts(["all", ...bodyPartsData]);
    })();
  }, []);

  // functions
  const hundleSearch = () => {
    // filter the data to the serch value
    const searchedData = exercises.filter(
      (ele) =>
        ele.name.toLowerCase().includes(search) ||
        ele.target.toLowerCase().includes(search) ||
        ele.bodyPart.toLowerCase().includes(search)
    );
    if (searchedData.length) {
      // hide the popup
      setPopup(false);
      // scroll to the exercises section
      scrollTo({
        top: exercisesSectionRef.current.offsetTop,
        behavior: "smooth",
      });
      // clear the search
      setSearch("");
      // set the exercises to the state
      setExercises(searchedData);
    } else {
      setPopup(true); // show the popup
    }
  };
  const hundleEnter = (e) => e.key === "Enter" && buttonRef.current.click();
  return (
    <div className="py-5 mt-5 search-exercises">
      {popup && <PopUp />}
      <h2 className="title mx-auto text-center fw-bold text-black text-capitalize">
        awesome exercises you <br /> should know
      </h2>
      <div className="search-div my-5 d-flex gap-2 align-items-center">
        <input
          type="text"
          className="px-2 py-2 rounded d-block w-75 border-1"
          placeholder={`Search in ${bodyPart}`}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          onKeyUpCapture={(e) => hundleEnter(e)}
        />
        <button
          className="btn px-2 py-2 btn-danger text-white w-25 fw-bold border-1 text-capitalize fw-bold"
          onClick={hundleSearch}
          ref={buttonRef}
        >
          search
        </button>
      </div>
      <HorsintalScrollBar
        data={bodyParts}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
    </div>
  );
};

export const SearchExercisesMemo = memo(SearchExercises);
