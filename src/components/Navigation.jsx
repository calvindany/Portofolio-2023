import "../assets/css/Navigation.css";
import { Link } from "react-scroll";
import { useLocation, NavLink } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  return (
    <>
      {location.pathname == "/project" ? (
        <div className="back-button display-3">
          <NavLink to="/" style={{ color: "#F8F7F9", textDecoration: "none" }}>
            Back To Home
          </NavLink>
        </div>
      ) : (
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-link">
              <Link
                to="about-me"
                smooth={true}
                spy={true}
                offset={-50}
                delay={10}
                activeClass="active"
              >
                About Me
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="tech-stack"
                smooth={true}
                spy={true}
                offset={-50}
                delay={10}
                activeClass="active"
              >
                Technology Stack
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="experiences"
                smooth={true}
                spy={true}
                offset={-50}
                delay={10}
                activeClass="active"
              >
                Experiences
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="projects"
                smooth={true}
                spy={true}
                offset={-50}
                delay={10}
                activeClass="active"
              >
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
