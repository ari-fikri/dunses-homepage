function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Hero">
      <div className="hero-left" role="img" aria-label="Tea hero image">
        <div className="hero-card">
          <h1>From Leaf to Cup — Artisan Teas, Naturally</h1>
          <p>Discover a selection of home-crafted teas, ethically sourced and sustainably grown.</p>
          <div className="btn-row">
            <a className="btn primary" href="#">Shop Bestsellers</a>
            <a className="btn" href="#">Our Story</a>
          </div>
        </div>
      </div>
      <aside className="hero-right">
        <img src="/dunses-design.png" alt="cup" />
        <h2>From Leaf to Cup — Artisan Teas, Naturally</h2>
        <p style={{color: 'var(--muted)'}}>Discover our selection of premium teas and sustainably sourced ingredients.</p>
        <a className="btn primary" href="#" style={{display: 'inline-block', marginTop: '10px'}}>Shop Bestsellers</a>
      </aside>
    </section>
  );
}

export default Hero;