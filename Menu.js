import React from 'react';
import './Menu.css';

const MenuItem = ({ title, price }) => {
  return (
    <div className="menu-item">
      <h2>{title}</h2>
      <p>4oz &nbsp; 8oz</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor consequat netus tristique.</p>
      <p className="price">{price}</p>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="menu-section">
      <div className="top-section">
        <img src="/path-to-your-image/tacos.jpg" alt="Tacos" className="menu-image" />
        <div className="top-right-items">
          <MenuItem title="Jack Fruit Tacos" price="$8.50" />
          <MenuItem title="Baja Cali Tacos" price="$7.25" />
          <MenuItem title="Impossible Tacos" price="$9.00" />
        </div>
      </div>

      <div className="bottom-section">
        <div className="menu-column">
          <MenuItem title="Jack Fruit Tacos" price="$8.50" />
          <MenuItem title="Baja Cali Tacos" price="$7.25" />
          <MenuItem title="Impossible Tacos" price="$9.00" />
        </div>
        <div className="menu-column">
          <MenuItem title="Jack Fruit Tacos" price="$8.50" />
          <MenuItem title="Baja Cali Tacos" price="$7.25" />
          <MenuItem title="Impossible Tacos" price="$9.00" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
