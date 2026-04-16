import { useState } from "react";
import Header from "./components/Header.jsx"; 
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import ContactList from "./components/ContactList.jsx"; 
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const skills = ["DJing", "Vintage computer enjoyer", "Arts & Design", "Virtual Simracer"];

  const education = [
    { year: "2028", program: "CITC-BSIT", school: "USTP – CDO Campus" },
    { year: "2023", program: "Senior High", school: "Nanuri School" },
    { year: "2021", program: "High School", school: "Corpus Christi School" },
    { year: "2016", program: "Elementary", school: "Corpus Christi School" }
  ];

  return (
    <div className={`theme-wrapper ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="container">
        <Header toggleDark={() => setDarkMode(!darkMode)} isDarkMode={darkMode} />
        <main>
          <About />
          <Skills skills={skills} />
          <Education education={education} />
          
          {/* TASK 4: Contact Form */}
          <Contact />

          {/* TASK 6: Display Stored Data */}
          <ContactList /> 
        </main>
        <footer>
          <p>&copy; 2026 Rian Bello. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
