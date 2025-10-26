import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../assets/css/ContactPage.css';

export default function ContactPage() {
  const [feedback, setFeedback] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How do I track my order?",
      answer: "You can track your order from the 'My Orders' section in your profile."
    },
    {
      question: "Can I return an item?",
      answer: "Yes, items can be returned within 7 days of delivery if unused."
    },
    {
      question: "How do I contact support?",
      answer: "Email us at support@wardrobex.com or use this contact form."
    }
  ];

  const toggleAccordion = (index) => {
    const content = document.getElementById(`faq-content-${index}`);
    content.classList.toggle('active');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000); // Hide message after 3 seconds
  };

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
            WardrobeX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => navigate("/home")}>Home</Nav.Link>
              <Nav.Link onClick={() => navigate("/shop")}>Shop</Nav.Link>
              <Nav.Link onClick={() => navigate("/product")}>Product</Nav.Link>
              <Nav.Link onClick={() => navigate("/cart")}>
                🛒 Cart
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/contact")}>Contact</Nav.Link>
              <Nav.Link onClick={() => navigate("/")}>Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="contact-container">
        <h1 className="contact-title">Get in Touch 💬</h1>

        <div className="contact-grid">
          
          {/* Feedback Form */}
          <div className="card">
            <h2 className="card-title">We Value Your Feedback 📝</h2>
            <form className="form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Tell us what you think..." rows={4} required></textarea>

              <div className="emoji-rating">
                <span>Rate us:</span>
                {["😡", "😐", "😊", "😍"].map((emoji, idx) => (
                  <button
                    type="button"
                    key={idx}
                    className={`emoji ${feedback === emoji ? 'selected' : ''}`}
                    onClick={() => setFeedback(emoji)}
                  >
                    {emoji}
                  </button>
                ))}
              </div>

              <button type="submit" className="submit-btn">Submit Feedback</button>

              {formSubmitted && (
                <p className="success-message">✅ Feedback Submitted Successfully!</p>
              )}
            </form>
          </div>

          {/* Help Section */}
          <div className="card">
            <h2 className="card-title">Need Help? 🤔</h2>
            <div className="accordion">
              {faqs.map((faq, index) => (
                <div className="accordion-item" key={index}>
                  <button className="accordion-button" onClick={() => toggleAccordion(index)}>
                    {faq.question}
                  </button>
                  <div className="accordion-content" id={`faq-content-${index}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* WardrobeX Cares Section */}
      <div
        style={{
          backgroundColor: "#212529",
          color: "#ffffff",
          padding: "40px 20px",
          marginTop: "60px",
        }}
      >
        <Container className="text-center">
          <h3 style={{ marginBottom: "20px" }}>WardrobeX Cares</h3>
          <p
            style={{
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "16px",
              lineHeight: "1.6",
            }}
          >
            We do not ask for your bank account or card details verbally or
            telephonically. Do not divulge these to fraudsters and imposters
            claiming to be calling on our behalf.
          </p>
        </Container>
      </div>
    </>
  );
}
