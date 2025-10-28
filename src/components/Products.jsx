import tea01 from '../assets/tea_01.png';
import tea02 from '../assets/tea_02.png';
import tea03 from '../assets/tea_03.png';
import tea04 from '../assets/tea_04.png';

function Products() {
  return (
    <section id="products" aria-label="Our Products">
      <h3 className="section-title">Our Products</h3>
      <div className="products">
        <article className="card">
          <img src={tea01} alt="Special Tea" />
          <h3>Special Tea</h3>
          <p>Our Special Tea Collection brings together natural blends from across Asia — <b>Chinese Oolong, White Tea, Assamica and Sinensis Full Leaf, IndoMatcha</b>, and also <b>Japan Matcha</b>.</p>
          <div className="card-footer">
            <div className="price">Rp : call</div>
          </div>
        </article>
        <article className="card">
          <img src={tea02} alt="Green Tea" />
          <h3>Green Tea</h3>
          <p>Our Green Tea Collection is crafted with care using two traditional methods — <b>Pan-Fired and Steamed</b>. Each cup offers a fresh, natural taste and gentle aroma.</p>
          <div className="card-footer">
            <div className="price">Rp : call</div>
          </div>
        </article>
        <article className="card">
          <img src={tea03} alt="Black Tea" />
          <h3>Black Tea</h3>
          <p>Our Black Tea Collection features two classic styles — <b>Orthodox and CTC</b>. Made from carefully selected leaves, these teas offer a bold, full-bodied taste with a natural aroma. Enjoy them plain or with milk, just as tea lovers have for generations.</p>
          <div className="card-footer">
            <div className="price">Rp : call</div>
          </div>
        </article>
        <article className="card">
          <img src={tea04} alt="Blended Tea" />
          <h3>Blended Tea</h3>
          <p>Our Blended Tea Collection combines tradition and creativity in every cup. Enjoy the warmth of <b>Chai</b>, the toasty comfort of <b>Genmaicha</b>, and the soothing balance of <b>Tea & Tisane blends</b> — each made to bring harmony and flavor to your day</p>
          <div className="card-footer">
            <div className="price">Rp : call</div>
          </div>
        </article>        
      </div>
    </section>
  );
}

export default Products;