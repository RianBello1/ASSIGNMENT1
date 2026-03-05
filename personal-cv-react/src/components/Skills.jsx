import { useState } from "react";

function Skills({ skills }) {
  const [visible, setVisible] = useState(true);

  return (
    <section className="card">
      <h2>Skills</h2>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"} Skills
      </button>
      {visible && (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
export default Skills;
