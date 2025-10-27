function Products() {
  return (
    <section id="products" aria-label="Our Products">
      <h3 className="section-title">Our Products</h3>
      <div className="products">
        <article className="card">
          <img src="/dunses-design.png" alt="Green Sunrise" />
          <h3>Green Sunrise</h3>
          <p>Bright notes, gentle aroma. Hand-picked from small farms.</p>
          <div className="price">$12.00</div>
        </article>
        <article className="card">
          <img src="/dunses-design.png" alt="Oolong Delight" />
          <h3>Oolong Delight</h3>
          <p>Floral and toasty - a balanced flavor profile.</p>
          <div className="price">$18.00</div>
        </article>
        <article className="card">
          <img src="/dunses-design.png" alt="Chai Spice" />
          <h3>Chai Spice</h3>
          <p>Warm spices blended with black tea for a cozy cup.</p>
          <div className="price">$18.00</div>
        </article>
      </div>
    </section>
  );
}

export default Products;