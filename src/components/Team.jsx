import avatarMan from '../assets/avatar-man.png';

function Team() {
  return (
    <section id="team" aria-label="Our Team">
      <h3 className="section-title">Our Team</h3>
      <div className="team">
        <div className="member">
          <img src={avatarMan} alt="Emma Wilson" />
          <h4>Emma Wilson</h4>
          <p style={{color: 'var(--muted)'}}>Founder & Tea Specialist</p>
          <p className="quote" style={{fontSize: '13px', color: 'var(--muted)'}}>'We partner with small farmers to source the best leaves.'</p>
        </div>
        <div className="member">
          <img src={avatarMan} alt="James Smith" />
          <h4>James Smith</h4>
          <p style={{color: 'var(--muted)'}}>Head of Blending</p>
          <p className="quote" style={{fontSize: '13px', color: 'var(--muted)'}}>'We craft blends that tell a story.'</p>
        </div>
      </div>
    </section>
  )
}

export default Team;