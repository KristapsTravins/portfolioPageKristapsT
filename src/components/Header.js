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
                            <li><Link to='/'>Home</Link></li>
                           <li> <a href="/#projects">Projects</a></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </nav>
                </div>
          </div>
      </div>
  );
}

export default Header;
