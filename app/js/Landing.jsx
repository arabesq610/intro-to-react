import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>title</h1>
    <input type="text" placeholder="search" />
    <Link to="/search" href="https://www.google.com" />
  </div>
);

export default Landing;
