import React from 'react';
import '../css/header.css';
import {
    Link
  } from "react-router-dom";
  


const Header =()=> {
  return (
      <div className='header_main'>
          <div className='header_inner'>
                <div className='menu_section'>
                    <nav>
                        <ul>
                            <Link to='/'><li>Home</li></Link>
                            <a href="/#projects"><li>Projects</li></a>
                            <Link to='/blog'><li>Blog</li></Link>
                        </ul>
                    </nav>
                </div>
          </div>
      </div>
  );
}

export default Header;
