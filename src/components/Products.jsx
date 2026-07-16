import tea01 from '../assets/tea_01.png';
import tea02 from '../assets/tea_02.png';
import tea03 from '../assets/tea_03.png';
import tea04 from '../assets/tea_04.png';
import waIco from '../assets/wa_white_ico_20x20.png';
import ReactGA from 'react-ga4';

function Products() {
  const phoneNumber = '628122019811';
  
  const createWhatsAppUrl = (productTitle) => {
    const message = encodeURIComponent(`Hello, I want to know more about your product : ${productTitle}`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const handleStartChatClick = (productTitle) => {
    ReactGA.event({
      category: 'Products',
      action: 'Start Chat Clicked',
      label: productTitle
    });
  };

  return (
    <section id="products" aria-label="Our Products">
      <h2 className="section-title">Our Products</h2>
      <div className="products">
        <article className="card">
          <img src={tea01} alt="Special Tea" />
          <h3>Special Tea</h3>
          <p>Our Special Tea Collection brings together natural blends from across Asia — <b>Chinese Oolong, White Tea, Assamica and Sinensis Full Leaf, IndoMatcha</b>, and also <b>Japan Matcha</b>.</p>
          <div className="card-footer">
            <a className="btn start-chat" href={createWhatsAppUrl('Special Tea')} target="_blank" rel="noopener noreferrer" onClick={() => handleStartChatClick('Special Tea')}>
              <img src={waIco} alt="WhatsApp" className="wa-icon" />
              Start Chat
            </a>
          </div>
        </article>
        <article className="card">
          <img src={tea02} alt="Green Tea" />
          <h3>Green Tea</h3>
          <p>Our Green Tea Collection is crafted with care using two traditional methods — <b>Pan-Fired and Steamed</b>. Each cup offers a fresh, natural taste and gentle aroma.</p>
          <div className="card-footer">
            <a className="btn start-chat" href={createWhatsAppUrl('Green Tea')} target="_blank" rel="noopener noreferrer" onClick={() => handleStartChatClick('Green Tea')}>
              <img src={waIco} alt="WhatsApp" className="wa-icon" />
              Start Chat
            </a>
          </div>
        </article>
        <article className="card">
          <img src={tea03} alt="Black Tea" />
          <h3>Black Tea</h3>
          <p>Our Black Tea Collection features two classic styles — <b>Orthodox and CTC</b>. Made from carefully selected leaves, these teas offer a bold, full-bodied taste with a natural aroma. Enjoy them plain or with milk, just as tea lovers have for generations.</p>
          <div className="card-footer">
            <a className="btn start-chat" href={createWhatsAppUrl('Black Tea')} target="_blank" rel="noopener noreferrer" onClick={() => handleStartChatClick('Black Tea')}>
              <img src={waIco} alt="WhatsApp" className="wa-icon" />
              Start Chat
            </a>
          </div>
        </article>
        <article className="card">
          <img src={tea04} alt="Blended Tea" />
          <h3>Blended Tea</h3>
          <p>Our Blended Tea Collection combines tradition and creativity in every cup. Enjoy the warmth of <b>Chai</b>, the toasty comfort of <b>Genmaicha</b>, and the soothing balance of <b>Tea & Tisane blends</b> — each made to bring harmony and flavor to your day</p>
          <div className="card-footer">
            <a className="btn start-chat" href={createWhatsAppUrl('Blended Tea')} target="_blank" rel="noopener noreferrer" onClick={() => handleStartChatClick('Blended Tea')}>
              <img src={waIco} alt="WhatsApp" className="wa-icon" />
              Start Chat
            </a>
          </div>
        </article>        
      </div>
    </section>
  );
}

export default Products;