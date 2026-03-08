import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "32px" }}>
      <h1>Community Learning Hub</h1>
      <p>
        Learn digital skills through community hubs. Explore available hubs and courses.
      </p>
      <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
        <Link to="/hubs">
          <button>View Hubs</button>
        </Link>
        <Link to="/courses">
          <button>Explore Courses</button>
        </Link>
      </div>
    </div>
  );
}