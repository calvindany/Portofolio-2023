import { Router, Route, Routes } from "react-router-dom";
import Home from "./../pages/Home";
export default function Routers() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={Home} />
          {/* <Route path="/projects" component={() => <div></div>} /> */}
        </Routes>
      </Router>
    </>
  );
}
