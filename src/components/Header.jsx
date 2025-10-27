function Header() {
  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header>
      <div className="header-content">
        <div className="brand">
          <div className="logo">D</div>
          <div className="brand-text">
            <p className="brand-title">Dunses</p>
            <p className="brand-tagline">From Leaf to Cup</p>
          </div>
        </div>
        <nav>
          <a href="#hero" onClick={handleNavClick}>Home</a>
          <a href="#products" onClick={handleNavClick}>Products</a>
          <a href="#services" onClick={handleNavClick}>Services</a>
          <a href="#team" onClick={handleNavClick}>Team</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
        </nav>
        <a href="#" className="cta">Login</a>
      </div>
    </header>
  );
}

export default Header;