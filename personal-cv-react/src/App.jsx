import { useState } from "react";
import Header from "./components/header.jsx"; 
import About from "./components/about.jsx";
import Skills from "./components/skills.jsx";
import Education from "./components/education.jsx";
import Contact from "./components/contact.jsx";
import './index.css';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`theme-wrapper ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="container">
        {/* Pass darkMode state here */}
        <Header 
          toggleDark={() => setDarkMode(!darkMode)} 
          isDarkMode={darkMode} 
        />
        <main>
	  <header />
          <about />
          <skills />
          <education />
          <contact />
        </main>
        <footer>
          <p>&copy; 2026 Rian Bello. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
