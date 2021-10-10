import React from 'react';
import './Navbar.css';
import logo from './../../logo.svg';

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <a href="#news">KoohooBrands</a>
        </li>
        <li>
          <a href="#news">
            <img src={logo} />
          </a>
        </li>
        <li>
          <a href="#home">New</a>
        </li>
        <li>
          <a href="#news">sale</a>
        </li>
        <li>
          <a href="#contact">men</a>
        </li>
        <li>
          <a className="active" href="#contact">
            WOMEN
          </a>
        </li>
      </ul>
    </div>
  );
}
