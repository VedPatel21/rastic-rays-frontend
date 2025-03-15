import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <div className="menu-page">
      <h1>Our Exquisite Menu</h1>
      <div className="menu-sections">
        <section className="menu-section">
          <h2>Starters</h2>
          <ul>
            <li>
              <span>Herbed Bruschetta</span>
              <span>₹350</span>
            </li>
            <li>
              <span>Spicy Chicken Wings</span>
              <span>₹450</span>
            </li>
            <li>
              <span>Stuffed Mushrooms</span>
              <span>₹400</span>
            </li>
          </ul>
        </section>
        <section className="menu-section">
          <h2>Main Course</h2>
          <ul>
            <li>
              <span>Grilled Salmon with Herbs</span>
              <span>₹950</span>
            </li>
            <li>
              <span>Rugged Lamb Chops</span>
              <span>₹1100</span>
            </li>
            <li>
              <span>Vegetable Medley Pasta</span>
              <span>₹800</span>
            </li>
          </ul>
        </section>
        <section className="menu-section">
          <h2>Desserts</h2>
          <ul>
            <li>
              <span>Chocolate Lava Cake</span>
              <span>₹500</span>
            </li>
            <li>
              <span>Classic Tiramisu</span>
              <span>₹550</span>
            </li>
            <li>
              <span>Seasonal Fruit Platter</span>
              <span>₹400</span>
            </li>
          </ul>
        </section>
        <section className="menu-section">
          <h2>Beverages</h2>
          <ul>
            <li>
              <span>Signature Cocktails</span>
              <span>₹600</span>
            </li>
            <li>
              <span>Fresh Juices & Mocktails</span>
              <span>₹350</span>
            </li>
            <li>
              <span>Fine Wine Selection</span>
              <span>₹800</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Menu;
