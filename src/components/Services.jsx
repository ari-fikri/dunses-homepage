import threeLeaves from '../assets/three_leaves.png';
import teaPot from '../assets/tea_pot.png';
import teaBrush from '../assets/tea_brush.png';
import teaBump from '../assets/tea_bump.png';

function Services() {
  return (
    <section id="services" aria-label="Services">
      <h2 className="section-title">Services and Solutions</h2>
      <div className="services">
        <article className="service">
          <div className="service-icon">
            <img src={teaBump} alt="Sales and Trading" />
          </div>
          <div className="service-content">
            <h3>Sales and Trading</h3>
            <p>We provide quality tea products — from general blends to premium specialties — connecting businesses with authentic teas for every market need.</p>
          </div>
        </article>
        <article className="service">
          <div className="service-icon">
            <img src={threeLeaves} alt="Consultation" />
          </div>
          <div className="service-content">
            <h3>Guest Speaker & Consultation</h3>
            <p>Gain Our experts insight to refine your tea products, menu, or brand through tailored, hands-on sessions.</p>
          </div>
        </article>
        <article className="service">
          <div className="service-icon">
            <img src={teaBrush} alt="Tea workshops icon" />
          </div>
          <div className="service-content">
            <h3>Training & Workshops</h3>
            <p>Our Tea Training takes you on a journey to discover how each leaf is crafted, tasted, and appreciated from garden to cup.</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Services;