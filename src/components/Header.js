import React from 'react';
import '../css/header.css';



const Header =()=> {
  return (
      <div className='header_main'>
          <div className='header_inner'>
                <div className='menu_section'>
                    <nav>
                        <ul>
                            <li>Home</li>
                            <li>Rrojects</li>
                            <li>Blog</li>
                        </ul>
                    </nav>
                </div>
          </div>
      </div>
  );
}

export default Header;
