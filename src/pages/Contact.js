import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a production app, send form data to the server here.
    alert('Thank you for contacting Rustic Rays. We will get back to you soon.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p className="contact-info">For reservations or inquiries, please call: <a href="tel:8866992270">8866992270</a></p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="tel" 
          name="phone" 
          placeholder="Your Phone Number" 
          value={formData.phone} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
