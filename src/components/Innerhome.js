import React from 'react';
import { Link } from 'react-router-dom';
import './InnerHome.css';

const InnerHome = () => {
  return (
    <div>
      <nav className="inner-navbar">
        <div className="logo">ZH</div>
        <ul>
          <Link to='/home' className='nav-links-innerhome'>Home</Link>
          <Link to='/donation' className='nav-links-innerhome'>Donation</Link>
          <Link to='/distribution' className='nav-links-innerhome'>Distribution Request</Link>
        </ul>
      </nav>

      <header className="inner-header">
        <h1>Welcome to Zero Hunger Initiative</h1>
      </header>

      <main className="inner-main-content">
        <section className="inner-intro">
          <h2>Zero Hunger</h2>
          <p>
            Zero Hunger is one of the United Nations' Sustainable Development Goals (SDGs),
            aiming to end hunger, achieve food security and improved nutrition, and promote
            sustainable agriculture by 2030. Despite significant progress, millions of people
            around the world still suffer from hunger and malnutrition. The journey toward
            Zero Hunger involves addressing complex challenges such as poverty, lack of access
            to resources, climate change, and conflicts.
          </p>
          <p>
            The Zero Hunger Initiative focuses on various initiatives, both global and local,
            working towards the goal of eliminating hunger. These initiatives include promoting
            sustainable farming practices, improving food distribution systems, and addressing
            the root causes of hunger. By coming together, we can make a meaningful impact
            and create a world where everyone has access to nutritious food.
          </p>
        </section>

        <section className="image-section">
          <img
            src="https://static.vecteezy.com/system/resources/previews/005/295/671/original/food-donation-concept-illustration-depicting-hands-donating-a-box-of-food-to-the-needy-and-poor-people-charity-benevolence-and-humanitarian-help-vector.jpg"
            alt="Zero Hunger Initiative"
            className="zero-hunger-image"
          />
          <p>
            If you're interested in donating food, please contact us or visit our donation centers
            to drop off your contributions. Together, we can make a difference in the lives of those
            facing food insecurity.
          </p>
        </section>
        <section className="image-section">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvKWhKltRKFiCFrkteEjtoafhhDL_ydC-ikQ&usqp=CAU"
            alt="Zero Hunger Initiative"
            className="zero-hunger-image"
          />
          <p>
            Your contribution of food can make a significant impact on the fight against hunger.
            Whether it's non-perishable items, fresh produce, or prepared meals, every donation
            brings us one step closer to a world with Zero Hunger.
          </p>
        </section>
      </main>

      <footer className="inner-footer">
        <p>&copy; 2024 Zero Hunger Initiative-Sridarsini. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default InnerHome;
