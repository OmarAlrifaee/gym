import { createPortal } from "react-dom";
const PopUp = () => {
  return createPortal(
    <div className="wronge-search-popup bg-danger text-white fw-bold text-capitalize p-3 rounded">
      please try agine
    </div>,
    document.getElementById("popup")
  );
};

export default PopUp;
