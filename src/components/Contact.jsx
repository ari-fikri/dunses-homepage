import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS credentials
    const serviceID = 'service_4u1pzkg';
    const templateID = 'template_5frb7gl';
    const userID = 'KNA8jWtuKS-85g3Aa';

    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the message, please try again.');
      });
  };

  return (
    <section id="contact" aria-label="Contact">
      <h3 className="section-title">Contact Us</h3>
      <div className="contact">
        <form ref={form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" className="input" placeholder="Name" name="name" required />
          <label htmlFor="email">Email</label>
          <input id="email" className="input" placeholder="Email" type="email" name="email" required />
          <label htmlFor="phone">Mobile Phone Number</label>
          <input id="phone" className="input" placeholder="Mobile Phone Number" name="phone" />
          <label htmlFor="message">Message</label>
          <textarea id="message" className="input" rows="4" placeholder="Your message" name="message" required></textarea>
          <button className="submit" type="submit">Send Message</button>
        </form>
        <div style={{background: 'var(--card)', padding: '16px', borderRadius: '8px'}}>
          <h4>Contact Info</h4>
          <p style={{color: 'var(--muted)'}}>Address: Jl Terusan PPTK Gambung Km 3 No 12 Kec Pasirjambu, Kab Bandung, <br /> Jawa Barat 40231 - Indonesia</p>
          <p style={{color: 'var(--muted)'}}>Phone: +62 81 220 19811</p>
          <p style={{color: 'var(--muted)'}}>Email: <a href="mailto:dunses12@gmail.com">dunses12@gmail.com</a></p>
          <p style={{color: 'var(--muted)'}}>IG : <a href="https://www.instagram.com/dutaniagasukses" target="_blank" rel="noopener noreferrer">@dutaniagasukses</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;