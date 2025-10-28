import bigTeaSmall from '../assets/big_tea_small.png';

function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Hero">
      <img src={bigTeaSmall} alt="Tea hero background" className="hero-bg-image" />
      <div className="hero-content">
        <div className="hero-card">
          <h1>From Leaf to Cup — Artisan Teas, Naturally</h1>
          <p>Discover a selection of home-crafted teas, ethically sourced and sustainably grown.</p>
          <div className="btn-row">
            <a className="btn primary" href="#">Get Quote</a>
            <a className="btn" href="#">Our Story</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;