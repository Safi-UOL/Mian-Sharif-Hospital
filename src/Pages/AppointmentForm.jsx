import { useState } from "react";

export default function AppointmentForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [disease, setDisease] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointmentData = {
      name,
      age,
      phone,
      disease,
      date,
    };

    console.log("Appointment Data:", appointmentData);

    setName("");
    setAge("");
    setPhone("");
    setDisease("");
    setDate("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Patient Appointment Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="text"
          placeholder="Disease"
          value={disease}
          onChange={(e) => setDisease(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
}