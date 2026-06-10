import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home"; // create this
import "./App.css";

function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: 20, flexDirection: "column" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App
