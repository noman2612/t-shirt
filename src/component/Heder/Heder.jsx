import React from 'react';
import { Link } from 'react-router-dom';
import './heder.css'
const Heder = () => {
    return (
        <div className='heder'>
          <Link to="/">Home</Link>
          <Link to="/order">Order</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
    );
};

export default Heder;