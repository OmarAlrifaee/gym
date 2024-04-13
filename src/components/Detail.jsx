import bodyPartIcon from "../assets/icons/body-part.png";
import targetIcon from "../assets/icons/target.png";
import equipmentIcon from "../assets/icons/equipment.png";
import { useMemo } from "react";
const Detail = ({ exerciseDetail }) => {
  const { name, gifUrl, bodyPart, target, equipment } = exerciseDetail;

  // make an object for extra details
  const extraDetails = useMemo(
    () => [
      { icon: bodyPartIcon, name: bodyPart },
      { icon: targetIcon, name: target },
      { icon: equipmentIcon, name: equipment },
    ],
    [bodyPart, target, equipment]
  );
  return (
    <div className="exercise-detailes-container d-flex flex-lg-nowrap flex-wrap justify-content-lg-start justify-content-center gap-5 align-items-center my-5">
      <div className="text text-lg-start text-center">
        <h2 className="fw-bold text-capitalize">{name}</h2>
        <p className="text-capitalize lh-lg mt-3">
          exercises keep you strong. {name} is one pf the best exercises to
          target your {target}. it will help you improve your mood and gain
          energy
        </p>
        <div className="extraDetails mt-5">
          {extraDetails.map(({ icon, name }, index) => (
            // index is not the best practice but in this case its not harm anything so i used it
            <div
              key={index}
              className="mt-3 d-flex flex-lg-row flex-column align-items-center gap-3"
            >
              <img
                src={icon}
                alt={name}
                className="rounded-circle p-3 bg-danger-subtle"
              />
              <h4 className="text-capitalize fw-bold ">{name}</h4>
            </div>
          ))}
        </div>
      </div>
      <div className="image w-50">
        <img
          src={gifUrl}
          alt={name}
          loading="lazy"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </div>
    </div>
  );
};

export default Detail;
