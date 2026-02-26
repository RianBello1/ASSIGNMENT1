function Header({ toggleDark, isDarkMode }) {
  return (
    <header>
      <section className="card">
        <h1>Rian Nathaniel V. Bello</h1>
        <p>IT Student | Web Systems and Technologies</p>
        
        {/* The text inside the button now changes based on the mode */}
        <button onClick={toggleDark}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        
        <p>
          Email: <a href="mailto:bello.riannathaniel@gmail.com">bello.riannathaniel@gmail.com</a><br />
          GitHub: <a href="https://github.com" target="_blank" rel="noreferrer">github.com</a>
        </p>
      </section>
    </header>
  );
}

export default Header;
