import React, { useState } from 'react';

const ContactForm = () => {
  const [FormData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://ieltsmaster.test/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(FormData),
      });

      const data = await response.json();

      if (data.message) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="contact-form-section">
      <h2>Send a Message</h2>
      {success && <p className="success-message">{success}</p>}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
            type="text" name="name" value={FormData.name} onChange={handleChange} placeholder="Your Name" required 
         />
        <input 
           type="email" name="email" value={FormData.email} onChange={handleChange} placeholder="Your Email" required />
        <textarea name="message" value={FormData.message} onChange={handleChange} placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
