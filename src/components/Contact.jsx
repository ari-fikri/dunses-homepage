function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submit demo — integrate backend to handle submissions');
  };

  return (
    <section id="contact" aria-label="Contact">
      <h3 className="section-title">Contact Us</h3>
      <div className="contact">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" className="input" placeholder="Name" />
          <label htmlFor="email">Email</label>
          <input id="email" className="input" placeholder="Email" />
          <label htmlFor="phone">Mobile Phone </label>
          <input id="phone" className="input" placeholder="Mobile Phone" />
          <label htmlFor="message">Message</label>
          <textarea id="message" className="input" rows="4" placeholder="Your message"></textarea>
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