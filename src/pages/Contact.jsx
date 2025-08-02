// src/pages/Contact.jsx
import './Pages.css';

export default function Contact() {
  return (
    <section id="contact" className="page contact-page">
      <h2 className="heading">Contact Me</h2>
      <div className="contact-container">
        <p className="contact-intro">Feel free to reach out to me via email or fill out the form below!</p>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>

          <label>
            Email:
            <input type="email" name="email" required />
          </label>

          <label>
            Message:
            <textarea name="message" rows="5" required></textarea>
          </label>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}