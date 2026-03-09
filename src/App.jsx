import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Hubs from "./pages/Hubs";
import Courses from "./pages/Courses";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/hubs">Hubs</Link> |{" "}
        <Link to="/courses">Courses</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hubs" element={<Hubs />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
