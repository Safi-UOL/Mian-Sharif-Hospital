import { useParams } from "react-router-dom";

export default function PatientDetails() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Patient Details</h2>
      <p>Patient ID: {id}</p>

      <p>Name: Sample Patient</p>
      <p>Disease: Sample Disease</p>
      <p>Phone: 0300-0000000</p>
    </div>
  );
}
