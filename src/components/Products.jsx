import tea01 from '../assets/tea_01.png';
import tea02 from '../assets/tea_02.png';
import tea03 from '../assets/tea_03.png';

function Products() {
  return (
    <section id="products" aria-label="Our Products">
      <h3 className="section-title">Our Products</h3>
      <div className="products">
        <article className="card">
          <img src={tea01} alt="Green Sunrise" />
          <h3>Green Sunrise</h3>
          <p>Bright notes, gentle aroma. Hand-picked from small farms.</p>
          <div className="card-footer">
            <div className="price">$12.00</div>
            <button className="add-to-cart">🛒</button>
          </div>
        </article>
        <article className="card">
          <img src={tea02} alt="Oolong Delight" />
          <h3>Oolong Delight</h3>
          <p>Floral and toasty - a balanced flavor profile.</p>
          <div className="card-footer">
            <div className="price">$18.00</div>
            <button className="add-to-cart">🛒</button>
          </div>
        </article>
        <article className="card">
          <img src={tea03} alt="Chai Spice" />
          <h3>Chai Spice</h3>
          <p>Warm spices blended with black tea for a cozy cup.</p>
          <div className="card-footer">
            <div className="price">$18.00</div>
            <button className="add-to-cart">🛒</button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Products;