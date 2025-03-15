import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-overlay">
          <h1>Welcome to Rustic Rays</h1>
          <p>A Rustic Realm of Exquisite Flavors</p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn">Explore Menu</Link>
            <Link to="/contact" className="btn btn-secondary">Book a Table</Link>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="intro">
        <h2>Experience Fine Dining Like Never Before</h2>
        <p>
          At Rustic Rays, we blend sustainability with luxury to create an ambience that honors nature and celebrates culinary craftsmanship.
        </p>
      </section>

      {/* Image Gallery Section */}
      <section className="gallery">
        <h2>Discover Our Atmosphere</h2>
        <p>
          Take a peek into the warmth and elegance of Rustic Rays. From cozy corners to vibrant dining spaces, we’ve crafted an environment where every detail enhances your experience.
        </p>
        <div className="gallery-grid">
          <img src="/images/image1.jpg" alt="Dining area" />
          <img src="/images/image2.jpg" alt="Bar area" />
          <img src="/images/image3.jpg" alt="Outdoor seating" />
          <img src="/images/image4.jpg" alt="Signature dish" />
          <img src="/images/image1.jpg" alt="Chef at work" />
          <img src="/images/image2.jpg" alt="Rustic interior" />
        </div>
      </section>
    </div>
  );
}

export default Home;
