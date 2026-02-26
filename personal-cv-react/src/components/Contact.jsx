function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from refreshing on submit
    alert("Message sent! (Logic handled by React)");
  };

  return (
    <section className="card">
      <h2>Contact Mee</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" id="name" placeholder="Name" />
        <input type="email" id="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <br /><br />
        <button type="submit" id="submitBtn">Send</button>
      </form>
    </section>
  );
}

export default Contact;
