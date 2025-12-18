import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Hospital Management System (SPA Assignment)</h2>
      <p>
        This section demonstrates Single Page Application routing and
        CRUD operations using Firebase Firestore.
      </p>

      <ul>
        <li>
          <Link to="/assignment/create">Register New Patient</Link>
        </li>
        <li>
          <Link to="/assignment/patients">View All Patients</Link>
        </li>
      </ul>
    </div>
  );
}
