import avatarMan from '../assets/avatar-man.png';
import musthopa from '../assets/musthopa_profile.png';
import rizal from '../assets/rizal_profile.png';

function Team() {
  return (
    <section id="team" aria-label="Our Team">
      <h3 className="section-title">Our Team</h3>
      <div className="team">
        <div className="member">
          <img src={musthopa} alt="Musthopa Syarifudin" />
          <h4>Musthopa Syarifudin</h4>
          <p style={{color: 'var(--muted)'}}>Founder & Tea Specialist</p>
          <p className="quote" style={{fontSize: '13px', color: 'var(--muted)'}}>'We partner with small farmers to source the best leaves.'</p>
        </div>
        <div className="member">
          <img src={rizal} alt="Rizal Firdaus" />
          <h4>Rizal Firdaus</h4>
          <p style={{color: 'var(--muted)'}}>Director</p>
          <p className="quote" style={{fontSize: '13px', color: 'var(--muted)'}}>'We craft blends that tell a story.'</p>
        </div>
      </div>
    </section>
  )
}

export default Team;