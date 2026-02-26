import { useState } from "react";

import Header from "./components/Header.jsx"; 
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`theme-wrapper ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="container">
        {/* Rendered the logic-heavy Header here */}
        <Header 
          toggleDark={() => setDarkMode(!darkMode)} 
          isDarkMode={darkMode} 
        />
        
        <main>

          <About />
          <Skills />
          <Education />
          <Contact />
        </main>

        <footer>
          <p>&copy; 2026 Rian Bello. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;