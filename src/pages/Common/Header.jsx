import React, { useState, useEffect } from 'react';
import './CommonelemCSS/Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuClick() {
    setIsOpen(!isOpen);
  }

  function handleClickOutside(event) {
    const header = document.querySelector('.HeaderC');
    if (isOpen && header && !header.contains(event.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className={`HeaderC ${isOpen ? 'open' : ''}`}>
        <ul type="none">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </div>
      <button onClick={handleMenuClick}>Menu</button>
    </>
  );
};

export default Header;
