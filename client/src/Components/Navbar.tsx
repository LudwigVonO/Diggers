import React, { useState, useEffect } from 'react';
import getMovies from '../Services/tmdb.api.service.ts';

interface NavbarProps {
  toggleOverlay:Function;
}

const Navbar: React.FC<NavbarProps> = ({toggleOverlay}:NavbarProps): JSX.Element => {

  return (
    <div id="navbar">
      <h2 className="accent"><span className="secondary">Movie</span>DIGGERS</h2>
      <div className='Icons'>
        <button className='icon-button' onClick={toggleOverlay}>
          <img className='icon' alt='add a recommendation' src='./add.png'></img>
        </button>
        <img className='icon' alt='go to your profile' src='./profile.png'></img>
      </div>
    </div>
  )
}

export default Navbar