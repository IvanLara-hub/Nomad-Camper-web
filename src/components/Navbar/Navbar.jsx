import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import logoImg from "./../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg bg-app-primary" data-bs-theme="">
      <div className="container-fluid">
      <Link
  className="navbar-brand d-flex align-items-center justify-content-center"
  to="/"
>
  <img src={logoImg} alt="logo" style={{ width: "40px" }} />
  <small className="logo text-small ps-2 font-monospace" style={{ color: "white" }}>
    Nomad Camper
  </small>
</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-lg-0">
            <li
              className={`nav-item font-weight-light ${
                currentUser ? "d-none" : ""
              }`}
            >
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/profile"
              >
                {currentUser && currentUser.firstName}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/campers"
              >
                Campers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/gallery"
              >
                Comunidad
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/testimonial"
              >
                Vuestras valoraciones
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/signup"
              >
                Registrarse
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
