import "../assets/css/Navigation.css";
import { Link } from "react-scroll";
export default function Navigation() {
  return (
    <>
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
    </>
  );
}
