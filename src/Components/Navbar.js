import React from 'react';
const Navbar = () => {
  return <div className='container'>
    <h1 className="icon">Coffe</h1>
    <ul className="nav">
      <li className="nav-item"><a href="#">Home</a></li>
      <li className="nav-item"><a href="#gallery">Services</a> <span>V</span> </li>
      <li className="nav-item"><a href="#Abouts">About</a></li>
      <li className="nav-item"><a href="#Contact">Contact</a></li>
    </ul>
  </div>;
};

export default Navbar;
