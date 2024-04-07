// MobileNav.tsx
import React, { useState } from 'react';
import './mobileNav.css'; // Предполагается, что стили будут определены в этом файле

const MobileNav: React.FC = () => {
 const [isOpen, setIsOpen] = useState(false);

 const toggleMenu = () => {
    setIsOpen(!isOpen);
 }

 return (
    <section className="banner">
      <label htmlFor="menu-control" className="hamburger" onClick={toggleMenu}>
        <div className='burger'>
        <i className="hamburger__icon"></i>
        <i className="hamburger__icon"></i>
        <i className="hamburger__icon"></i>
        </div>
      </label>

      <input type="checkbox" id="menu-control" className="menu-control" checked={isOpen} readOnly />

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav className="sidebar__menu">
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Shop</a>
          <a href="">Stores</a>
          <a href="">Contact</a>
        </nav>

        <label htmlFor="menu-control" className="sidebar__close" onClick={toggleMenu}></label>
      </aside>
    </section>
 );
};

export default MobileNav;
