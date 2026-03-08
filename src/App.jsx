import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Hubs from "./pages/Hubs";
import Courses from "./pages/Courses";

function Navbar() {
  return (
    <nav style={{ padding: "16px", display: "flex", gap: "16px", borderBottom: "1px solid #ddd" }}>
      <Link to="/">Home</Link>
      <Link to="/hubs">Hubs</Link>
      <Link to="/courses">Courses</Link>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hubs" element={<Hubs />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}