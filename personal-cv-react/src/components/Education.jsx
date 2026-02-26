function Education() {
  return (
    <section className="card">
      <h2>Education</h2>
      <table style={{ border: "1px solid black", borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Program</th>
            <th>Institution</th>
            <th>Year Graduated</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>CITC-BSIT</td><td>USTP – CDO Campus</td><td>2028</td></tr>
          <tr><td>Senior High</td><td>Nanuri School</td><td>2023</td></tr>
          <tr><td>High School</td><td>Corpus Christi School</td><td>2021</td></tr>
          <tr><td>Elementary</td><td>Corpus Christi School</td><td>2016</td></tr>
        </tbody>
      </table>
    </section>
  );
}
export default Education;
