import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Project from "../pages/Project";

export default function Router() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/project" element={<Project />} />
      </Routes>
    </>
  );
}
