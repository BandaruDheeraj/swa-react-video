import React from 'react';
import exampleImage from './example.jpg'; 


const Home = () => (
  <div className="content-container">
    <div className="content-title-group">
      <h2 className="title">Shop at Home</h2>
      <p>
        Manage your shopping list! Become a preferred customer and gain access
        to discount codes, too.
      </p>
      <img src={exampleImage} alt="Example" />
      <p>Log in to start enjoying your benefits</p>
      <br />
      <div className="button-group">
        <button className="button" aria-label="My List" tabIndex="0">
          <a href="/products">
            <i className="fas fa-clipboard-list"></i>
            My List
          </a>
        </button>
        <button className="button" aria-label="My Discounts">
          <a href="/discounts">
            <i className="fas fa-money-bill-alt"></i>
            My Discounts
          </a>
        </button>
        <button className="button" aria-label="My Discounts">
          <a
            href="https://github.com/johnpapa/shopathome"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
            Code in GitHub
          </a>
        </button>
      </div>{' '}
    </div>
  </div>
);

export default Home;
