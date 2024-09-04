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
          <div className="timeline-date left">2001</div>
          <div className="timeline-content right">
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
            <img src=".com/images/makegoodfood.jpg" alt="Sider 1" />
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

      {/*Event Banner Section*/}
      <section class="event-banner">
        <div className="overlay">
        <h1>Come say <span className="italic">hello</span></h1>
        <div className="event-details">
        <p className="event-date">MAR 27, 2022</p>
                    <p className="event-location">Golden Gate Park</p>
                    <p className="event-address">4976 Fulton Street<br/>San Francisco, CA 94121</p>
                    <div className="event-time">2:00 pm – 9:00 pm</div>
        </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequent questions</h2>
        <div className="faq-item">
          <h3>Where are you located?</h3>
          <span class="faq-toggle">+</span>
        </div>
        <div className="faq-item">
          <h3>What are your hours of operation?</h3>
          <span class="faq-toggle">+</span>
        </div>
        <div class="faq-item">
            <h3>What allergens are in your food?</h3>
            <span class="faq-toggle">+</span>
        </div>
        <div class="faq-item">
            <h3>Do you offer catering?</h3>
            <span class="faq-toggle">+</span>
        </div>

      </section>

      {/* Gone Say Hello Section */}
      <section className="Footer-container">
      <div className="footer-top-content">
      <h2>Come say <span className="highlight">hello</span></h2>
      <button className="schedule-button">View weekly schedule</button>
      </div>
      <div className="center-section">
      <ul className="footer-menu-links">
                            <li>Menu</li>
                            <li>Schedule</li>
                            <li>Contact</li>
                            <li>Privacy policy</li>
                            <li>About</li>
                            <li>Catering</li>
                     </ul>
                </div>
           </section>
    </div>
  );
}

export default AboutPlantFood;
