// NavPrasad.js
import React, { useState, useEffect } from 'react';
import './navigcss.css';

const Navig = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [iconSrc, setIconSrc] = useState('./COMPANYLOGO.png'); // Replace with your actual image source

  // Function to handle scrolling event
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    // Set the initial state based on the scroll position when the component mounts
    handleScroll();

    // Add event listener for the scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="navig">
        <li className={`before-scroll-icon ${isScrolled ? 'hide-icon' : ''}`}>
          <div className="logo-container">
            <img src={iconSrc} height="100" width="100" alt="COMPANY LOGO" />
            <span className="logo-name">
              <h3>PharmaSync</h3>
            </span>
          </div>
        </li>

        {/* Show the after-scroll-icon only when the user has scrolled */}
        <ul className={`navig-list ${isScrolled ? '' : 'hide-icon'}`}>
          <li className="after-scroll-icon">
            <img src={iconSrc} height="50" width="50" alt="SCROLLED ICON" />
          </li>
          <li className='active'>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/product">Product</a>
          </li>
          <li>
            <a href="/add">Add</a>
          </li>
          <li>
            <a href="/sell">Sell Medicine</a>
          </li>
        </ul>
      </nav>

    </>
  );
};

export default Navig;
