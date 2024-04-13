import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
const NavBar = () => {
  return (
    <nav className=" d-flex align-items-center gap-3 py-3 px-0 w-100">
      <div className=" d-flex align-items-center logo">
        <Link to={"/"}>
          <img
            src={Logo}
            alt="this is a logo"
          />
        </Link>
      </div>
      <ul className=" d-flex align-items-center gap-3 mb-0">
        <NavLink
          to={"/"}
          className={
            "text-black text-capitalize fw-bold py-2 text-decoration-none nav-links"
          }
        >
          Home
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
