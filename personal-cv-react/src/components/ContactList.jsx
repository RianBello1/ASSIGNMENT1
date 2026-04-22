import { useEffect, useState } from "react";

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make sure the filename matches your PHP file (get_contacts.php vs getContacts.php)
   fetch("http://localhost/cv-api/getContacts.php")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading contacts...</p>;

  return (
    <div className="contact-list-container">
      <h2>Saved Contacts</h2>
      {contacts.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <div className="contacts-grid">
          {contacts.map((contact) => (
            <div key={contact.id} className="contact-card" style={cardStyle}>
              <h3>{contact.name}</h3>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Message:</strong></p>
              <blockquote style={messageStyle}>{contact.message}</blockquote>
              <small>
                Sent on: {new Date(contact.created_at).toLocaleString()}
              </small>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Simple inline styles for better visibility
const cardStyle = {
  border: "1px solid #ddd",
  padding: "15px",
  margin: "10px 0",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
  textAlign: "left"
};

const messageStyle = {
  fontStyle: "italic",
  color: "#555",
  margin: "10px 0",
  paddingLeft: "10px",
  borderLeft: "3px solid #ccc"
};

export default ContactList;