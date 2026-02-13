import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";

export default function App() {
  return (
    <>
      <nav className="nav">
        <NavLink to="/" end className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/help" className="nav-link">
          Help
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  );
}
