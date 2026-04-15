import { useState } from "react";

function Contact() {
  // 1. Setup state for all form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 2. Send data to your XAMPP PHP backend
    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // 3. Improved logic: Check if message exists in the JSON response
        if (data.message) {
          alert(data.message);
          // Clear form on success
          setName("");
          setEmail("");
          setMessage("");
        } else {
          alert("Unexpected error occurred.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Server error: Make sure XAMPP Apache is running.");
      });
  };

  return (
    <section className="card">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;