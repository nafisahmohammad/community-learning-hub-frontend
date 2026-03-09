import { useEffect, useState } from "react";
import axios from "axios";

export default function Hubs() {
  const [hubs, setHubs] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/hubs/")
      .then((response) => setHubs(response.data))
      .catch((error) => console.error("Error fetching hubs:", error));
  }, []);

  return (
    <div className="page-container">
      <h2>Learning Hubs</h2>

      {hubs.length === 0 ? (
        <p>No hubs available.</p>
      ) : (
        hubs.map((hub) => (
          <div key={hub.id} className="card">
            <h3>{hub.name}</h3>
            <p>
              {hub.city}, {hub.country}
            </p>
          </div>
        ))
      )}
    </div>
  );
}