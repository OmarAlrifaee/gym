import { useContext } from "react";
import { exercisesSectionContext } from "../pages/Home";
import icon from "../assets/icons/gym.png";
const BodyParts = ({ item, bodyPart, setBodyPart }) => {
  const exercisesSectionRef = useContext(exercisesSectionContext);
  // functions
  const hundleBodyPart = () => {
    // set the body part to te current clicked item
    setBodyPart(item);
    // scroll to the exercises section offsetTop
    scrollTo({
      top: exercisesSectionRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`body-part-div ${
        (bodyPart === item && "active") || ""
      } text-center py-2`}
      onClick={hundleBodyPart}
    >
      <img
        src={icon}
        alt="body-parts-icon"
      />
      <h3 className="fw-bold text-black fs-6 mt-3 text-capitalize">{item}</h3>
    </div>
  );
};

export default BodyParts;
