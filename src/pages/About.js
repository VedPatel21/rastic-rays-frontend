import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Rustic Rays</h1>
      </section>
      <section className="about-content">
        <p>
          Rustic Rays is not just a restaurant – it’s an experience where fine dining meets sustainability.
          Our interiors are crafted using reclaimed wood, eco-friendly bamboo, and locally sourced materials,
          creating a rustic yet luxurious ambience.
        </p>
        <p>
          Inspired by nature, our design ethos embraces natural textures and timeless elegance. Every element is
          carefully curated to honor the bounty of the earth while offering a dining experience that delights every sense.
        </p>
      </section>
      <section className="about-highlights">
        <div className="highlight">
          <h2>Fine Dining</h2>
          <p>Exquisite culinary creations that satisfy both the palate and the soul.</p>
        </div>
        <div className="highlight">
          <h2>Sustainable Design</h2>
          <p>Innovative use of eco-friendly materials and sustainable practices.</p>
        </div>
        <div className="highlight">
          <h2>Luxurious Ambience</h2>
          <p>An inviting space designed for memorable experiences.</p>
        </div>
      </section>
    </div>
  );
}

export default About;
