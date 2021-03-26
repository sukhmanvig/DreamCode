import React from "react";
import "../css/contact-style.css";
const Contact = ({ title }) => {
  return (
    <main className="contact">
      <div className="header-bg"></div>

      <div id="main-contact">
        <h1 className="pg-title">Contact</h1>

        <div id="contact-info">
          <h2>Contact Information</h2>
          <p>
            Phone:
            <a href="tel:555-555-5555">555-555-5555</a>
          </p>
          <p>
            Email:
            <a href="mailto:abc@example.com">dreamteam@outlook.com</a>
          </p>
          <div>
            <h3>Social Media</h3>
            <p>
              Instagram: <a href="https://www.instagram.com/">DreamTeam</a>
            </p>
            <p>
              Twitter: <a href="https://twitter.com/">DreamTeam</a>
            </p>
            <p>
              Facebook: <a href="https://www.facebook.com/">DreamTeam</a>
            </p>

            <img
              src="https://cdn.discordapp.com/attachments/261348830216192004/814739762182619146/unknown.png"
              alt="Girl using laptop"
            />
          </div>
        </div>

        <div id="contact-form">
          <h2>Send us a message</h2>
          <form action="contact-form.php" method="post">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
            />

            <label for="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="johndoe@gmail.com"
              required
            />

            <label for="subject" name="subject">
              Subject
            </label>
            <input type="text" id="subject" name="subject" required />
            <label for="message" name="message">
              Message
            </label>
            <textarea id="message" name="message" required></textarea>

            <input id="btn-submit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <footer>
        <p>Footer is displayed in this section</p>
      </footer>
    </main>
  );
};

export default Contact;
