import threeLeaves from '../assets/three_leaves.png';
import teaPot from '../assets/tea_pot.png';
import teaBrush from '../assets/tea_brush.png';

function Services() {
  return (
    <section id="services" aria-label="Services">
      <h3 className="section-title">Services and Solutions</h3>
      <div className="services">
        <div className="service">
          <div className="service-icon">
            <img src={threeLeaves} alt="Wholesale icon" />
          </div>
          <div className="service-content">
            <h4>Wholesale & Private Label</h4>
            <p>Custom packaging and bulk orders for retail partners.</p>
          </div>
        </div>
        <div className="service">
          <div className="service-icon">
            <img src={teaPot} alt="Custom blends icon" />
          </div>
          <div className="service-content">
            <h4>Custom Blends</h4>
            <p>Create unique blends for your brand or event.</p>
          </div>
        </div>
        <div className="service">
          <div className="service-icon">
            <img src={teaBrush} alt="Tea workshops icon" />
          </div>
          <div className="service-content">
            <h4>Tea Workshops</h4>
            <p>Hands-on classes to learn brewing and tasting techniques.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;