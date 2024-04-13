import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import { SearchExercisesMemo } from "../components/SearchExercises";
import { createContext, useRef, useState } from "react";
import { ExercisesMemo } from "../components/Exercises";
import ErrorBoundry from "../components/ErrorBoundry";

export const exercisesSectionContext = createContext();
function Home() {
  const [exercises, setExercises] = useState([]),
    [bodyPart, setBodyPart] = useState("all"),
    exercisesSectionRef = useRef();
  return (
    <>
      <div className="navbar-section bg-danger-subtle">
        <div className="container">
          <NavBar />
        </div>
      </div>
      <div className="hero-banner-section bg-danger-subtle">
        <div className="container">
          <HeroBanner />
        </div>
      </div>
      <div className="exercises-section py-5">
        <div className="container">
          <exercisesSectionContext.Provider value={exercisesSectionRef}>
            <ErrorBoundry>
              <SearchExercisesMemo
                setExercises={setExercises}
                setBodyPart={setBodyPart}
                bodyPart={bodyPart}
                exercises={exercises}
              />
            </ErrorBoundry>
            <ErrorBoundry>
              <ExercisesMemo
                setExercises={setExercises}
                bodyPart={bodyPart}
                exercises={exercises}
              />
            </ErrorBoundry>
          </exercisesSectionContext.Provider>
        </div>
      </div>
      <div className="footer-section">
        <Footer />
      </div>
    </>
  );
}

export default Home;
