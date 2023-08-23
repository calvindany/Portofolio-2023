import { NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <>
      <nav style={{ backgroundColor: "black" }}>
        <ul>
          <NavLink to="#About-Me">Home</NavLink>
          <NavLink to="#Tech-Stack">Home</NavLink>
          <NavLink to="#Experience">Home</NavLink>
          <NavLink to="#Projects">Project</NavLink>
        </ul>
      </nav>
    </>
  );
}
