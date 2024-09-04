import React from 'react';
import './AboutPlantFood.css';

function AboutPlantFood() {
  return (
    <div className="about-plant-food">
      {/* About Us Section */}
      <section className="about-us">
        <h2>About us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor consequat netus tristique at sem ipsum fames. Sed a molestie enim ac sed.</p>
        <div className="about-content">
          <img src="path/to/your/image.jpg" alt="Food" />
          <div className="plant-food-info">
            <h3>All plants. <span className="italic-text">No animals.</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor consequat netus tristique at sem ipsum fames. Sed a molestie enim ac sed.</p>
          </div>
        </div>
        <div className="belief">
          <p>We believe making <span className="italic-text">delicious</span> and nourishing <span className="italic-text">plant-based</span> food will help to create a <span className="italic-text">healthier</span> and <span className="italic-text">happier</span> planet.</p>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="timeline-container">
        <div className="timeline-item">
          <div className="timeline-date">2001</div>
          <div className="timeline-content">
            <h3>How it all <span className="italic-text">started</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor consequat netus tristique at sem ipsum fames. Sed a molestie enim ac sed.</p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-date">2006</div>
          <div className="timeline-content">
            <h3>How it all <span className="italic-text">started</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor consequat netus tristique at sem ipsum fames. Sed a molestie enim ac sed.</p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-date">2010</div>
          <div className="timeline-content">
            <h3>How it all <span className="italic-text">started</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor consequat netus tristique at sem ipsum fames. Sed a molestie enim ac sed.</p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-date">2012</div>
          <div className="timeline-content">
            <h3>How it all <span className="italic-text">started</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor consequat netus tristique at sem ipsum fames. Sed a molestie enim ac sed.</p>
          </div>
        </div>
      </section>

      {/* Our Siders Section */}
      <section className="our-siders">
        <h2>Our Siders</h2>
        <div className="sider-cards">
          <div className="sider-card">
            <img src="path/to/sider1.jpg" alt="Sider 1" />
            <h3>Sider 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="sider-card">
            <img src="path/to/sider2.jpg" alt="Sider 2" />
            <h3>Sider 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="sider-card">
            <img src="path/to/sider3.jpg" alt="Sider 3" />
            <h3>Sider 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>

      {/* Gone Say Hello Section */}
      <section className="gone-say-hello">
        <h2>Gone say hello</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Contact Us</button>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequent questions</h2>
        <div className="faq-item">
          <h3>What is plant-based food?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="faq-item">
          <h3>How do you ensure quality?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>
    </div>
  );
}

export default AboutPlantFood;