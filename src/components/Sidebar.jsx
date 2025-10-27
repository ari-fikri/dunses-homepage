import React from 'react';

const Sidebar = () => {
  const sidebarItems = [
    {
      id: 1,
      title: "From Leaf to Cup – Artisan Teas, Naturally",
      description: "Discover a selection of homecrafted teas a finitely sourced and sustainably grown",
      buttonText: "Shop Bestsellers",
      hasImage: true
    },
    {
      id: 2, 
      title: "Green Sunrise",
      description: "Delight in green tea that brings quiet vivid flavored blended sharapa",
      price: "$12.00",
      hasImage: true
    },
    {
      id: 3,
      title: "Tea Workshops", 
      description: "Enjoy tea ceremonies effectively to boost the vibrations holistically",
      price: "$15.00",
      hasImage: true
    }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-container">
          <span className="logo-text">☰ TeaCo</span>
          <button className="shop-btn btn btn-primary">Shop</button>
        </div>
      </div>
      
      {sidebarItems.map(item => (
        <div key={item.id} className="sidebar-section">
          <div className="sidebar-card">
            {item.hasImage && <div className="sidebar-image"></div>}
            <h3 className="sidebar-title">{item.title}</h3>
            <p className="sidebar-description">{item.description}</p>
            {item.price && <div className="sidebar-price">{item.price}</div>}
            {item.buttonText && (
              <button className="btn btn-secondary">{item.buttonText}</button>
            )}
            {!item.buttonText && !item.price && (
              <button className="btn btn-secondary">Our Story</button>
            )}
          </div>
        </div>
      ))}

      <div className="sidebar-section">
        <h3 className="sidebar-title">Contact Us</h3>
        <div className="contact-info">
          <p>📍 1234 Tea Long</p>
          <p>Green way B a floral</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;