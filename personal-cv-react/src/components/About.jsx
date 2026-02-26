import profileImg from '../images/profile.jpg'; 

function About() {
  return (
    <section className="card">
      <h2>About Me</h2>
      <p>
        Welcome to my personal CV webpage. I am a creative professional with a 
        passion for arts and technology.
      </p>
      {}
      <img src={profileImg} alt="Profile" />
    </section>
  );
}

export default About;
