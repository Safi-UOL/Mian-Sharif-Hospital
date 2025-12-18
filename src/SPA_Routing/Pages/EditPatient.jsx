import { useParams } from "react-router-dom";

export default function EditPatient() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Patient</h2>
      <p>Editing Patient ID: {id}</p>

      <form>
        <input placeholder="Patient Name" /><br /><br />
        <input placeholder="Age" /><br /><br />
        <input placeholder="Disease" /><br /><br />
        <input placeholder="Phone Number" /><br /><br />

        <button>Update Patient</button>
      </form>
    </div>
  );
}
