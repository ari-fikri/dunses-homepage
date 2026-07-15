import avatarMan from '../assets/avatar-man.png';
import musthopa from '../assets/musthopa_profile.png';
import rizal from '../assets/rizal_profile.png';

function Team() {
  return (
    <section id="team" aria-label="Our Team">
      <h2 className="section-title">Our Team</h2>
      <div className="team">
        <article className="member">
          <img src={musthopa} alt="Musthopa Syarifudin" />
          <h3>Musthopa Syarifudin</h3>
          <p style={{color: 'var(--muted)'}}>Founder & Tea Specialist</p>
          <p className="quote" style={{fontSize: '13px', color: 'var(--muted)'}}>'We partner with small farmers to source the best leaves.'</p>
        </article>
        <article className="member">
          <img src={rizal} alt="Rizal Firdaus" />
          <h3>Rizal Firdaus</h3>
          <p style={{color: 'var(--muted)'}}>Director</p>
          <p className="quote" style={{fontSize: '13px', color: 'var(--muted)'}}>'We craft blends that tell a story.'</p>
        </article>
      </div>
    </section>
  )
}

export default Team;