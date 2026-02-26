import { useState } from "react";
import Header from "./components/header";
import About from "./components/about";
import Skills from "./components/skills";
import Education from "./components/education";
import Contact from "./components/contact";
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`theme-wrapper ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="container">
        <Header toggleDark={() => setDarkMode(!darkMode)} />
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


