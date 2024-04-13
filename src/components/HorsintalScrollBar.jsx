import BodyParts from "./BodyParts";
const BodyPartsComp = ({ data, setBodyPart, bodyPart }) => {
  return (
    <div className="menu d-flex align-items-center py-5 px-3 gap-5">
      {data.map((item, index) => (
        <BodyParts
          item={item}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          key={index}
        />
      ))}
    </div>
  );
};

export default BodyPartsComp;
