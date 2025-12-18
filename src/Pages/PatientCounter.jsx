import { useState } from "react";

export default function PatientCounter() {
  const [patients, setPatients] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>OPD Daily Patient Counter</h2>

      <h1>{patients}</h1>

      <button onClick={() => setPatients(patients + 1)}>
        Patient Aaya
      </button>

      <button
        onClick={() => setPatients(patients - 1)}
        style={{ marginLeft: "10px" }}
      >
        Patient Gaya
      </button>

      <br /><br />

      <button onClick={() => setPatients(0)}>
        Reset Day Counter
      </button>
    </div>
  );
}
