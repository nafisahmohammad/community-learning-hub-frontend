import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page-container">
      <h1>Community Learning Hub</h1>
      <p>
        Learn digital skills through community hubs. Explore available hubs and courses.
      </p>

      <div style={{ marginTop: "24px" }}>
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