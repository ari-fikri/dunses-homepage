function Header() {
  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerOffset = 20; // Small offset for better visibility
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header>
      <div className="brand">
        <div className="logo">D</div>
        <div className="brand-text">
          <div className="brand-title">Dunses</div>
          <div className="brand-tagline">From Leaf to Cup</div>
        </div>
      </div>
      <nav>
        <a href="#hero" onClick={handleNavClick}>Home</a>
        <a href="#products" onClick={handleNavClick}>Products</a>
        <a href="#services" onClick={handleNavClick}>Services and Solutions</a>
        <a href="#team" onClick={handleNavClick}>Our Team</a>
        <a href="#contact" onClick={handleNavClick}>Contact Us</a>
        <a href="#" className="cta">Shop</a>
      </nav>
    </header>
  )
}

export default Header;