
import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const HomeContent = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">ZH</div>
        <ul className="nav-links">
          <Link to='login' className='nav-linkss'>Login</Link>
          <Link to='signup' className='nav-linkss'>Signup</Link>
        </ul>
      </nav>

      <h1 className='header'>Zero Hunger Initiative</h1>

      <main className="main-content">
        <section className="intro">
          <h2>Introduction</h2>
          <img src="https://t3.ftcdn.net/jpg/04/96/55/42/360_F_496554266_IXbKtk4TbSVRDU5HCQcabSyODNswA8Yd.jpg" alt="Introduction"  className='content-image'/>
          <p>
            Zero Hunger is one of the United Nations' Sustainable Development Goals (SDGs),
            aiming to end hunger, achieve food security and improved nutrition, and promote
            sustainable agriculture by 2030.
          </p>
        </section>

        <section className="challenges">
          <h2>Challenges</h2>
          <img src="https://advocacy.thp.org/wp-content/uploads/2014/02/postcard_zero1.png" alt="Challenges" className='content-image' />
          <p>
            Despite progress, millions of people worldwide still suffer from hunger and
            malnutrition. Challenges include poverty, lack of access to resources, climate
            change, and conflicts.
          </p>
        </section>

        <section className="initiatives">
          <h2>Initiatives</h2>
          <img src="https://www.statecraft.co.in/media/iBJbl0Q8EF.jpg" alt="Initiatives"  className='content-image'/>
          <p>
            Various initiatives, both global and local, are working towards Zero Hunger.
            These include promoting sustainable farming practices, improving food distribution,
            and addressing the root causes of hunger.
          </p>
        </section>

        <section className="impact">
          <h2>Impact</h2>
          <img src="https://gruenderatelier.de/wp-content/uploads/2021/07/zero-hunger-preview.png" alt="Impact" className='content-image' />
          <p>
            The efforts to achieve Zero Hunger have led to a significant impact on communities,
            reducing hunger-related diseases and improving overall well-being.
          </p>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Zero Hunger Initiative-Sridarsini. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomeContent;
