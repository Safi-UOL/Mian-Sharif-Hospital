import { Link } from "react-router-dom";

export default function Patients() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>All Patients</h2>

      <ul>
        <li>
          Ali (Fever)
          {" "} | <Link to="/assignment/patients/1">View</Link>
          {" "} | <Link to="/assignment/edit/1">Edit</Link>
        </li>

        <li>
          Ahmed (Diabetes)
          {" "} | <Link to="/assignment/patients/2">View</Link>
          {" "} | <Link to="/assignment/edit/2">Edit</Link>
        </li>
      </ul>
    </div>
  );
}
