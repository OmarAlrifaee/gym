import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Detail from "../components/Detail";
import {
  FetchData,
  exercisesOptions,
  searchYoutubeOptions,
} from "../utils/FetchData";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ExerciseVideos from "../components/ExerciseVideos";
import SimillerExercises from "../components/SimillerExercises";
import ErrorBoundry from "../components/ErrorBoundry";

function ExerciseDetail() {
  // states and params
  const [exerciseDetail, setExerciseDetail] = useState({}),
    [targetMuscleExercises, setTargetMuscleExercises] = useState({}),
    [equipmentMuscleExercises, setEquipmentExercises] = useState({}),
    [exerciseVideos, setExerciseVideos] = useState({}),
    { id } = useParams();

  useEffect(() => {
    (async () => {
      const exercisesDbUrl = "https://exercisedb.p.rapidapi.com";
      const youTubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      // get the exercises data by id
      const exerciseDetailData = await FetchData(
        `${exercisesDbUrl}/exercises/exercise/${id}`,
        exercisesOptions
      );
      // get exercises by the target to hundle the similer target component
      const targetMuscleExercisesData = await FetchData(
        `${exercisesDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exercisesOptions
      );
      // get exercises by the equipment to hundle the similer equipment component
      const equipmentMuscleExercisesData = await FetchData(
        `${exercisesDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exercisesOptions
      );
      const serachVideosData = await FetchData(
        `${youTubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        searchYoutubeOptions
      );
      // set the exersise detail data
      setExerciseDetail(exerciseDetailData);
      setExerciseVideos(serachVideosData?.contents);
      setTargetMuscleExercises(targetMuscleExercisesData);
      setEquipmentExercises(equipmentMuscleExercisesData);
    })();
  }, [id]);
  return (
    <>
      <div className="container">
        <NavBar />
        <Detail exerciseDetail={exerciseDetail} />
        <ErrorBoundry>
          <ExerciseVideos
            exerciseVideos={exerciseVideos}
            name={exerciseDetail.name}
          />
        </ErrorBoundry>
        <SimillerExercises
          targetMuscleExercises={targetMuscleExercises}
          equipmentMuscleExercises={equipmentMuscleExercises}
        />
      </div>
      <Footer />
    </>
  );
}

export default ExerciseDetail;
