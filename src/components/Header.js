import React from 'react';
import '../css/header.css';
import LightModeIcon from '@mui/icons-material/LightMode';


const Header =()=> {
  return (
      <div className='header_main'>
          <div className='header_inner'>
                <div className='menu_section'>
                    <nav>
                        <ul>
                            <li>Projects</li>
                            <li>Resume</li>
                            <li>Contact</li>
                            <li><LightModeIcon /></li>
                        </ul>
                    </nav>
                </div>
          </div>
      </div>
  );
}

export default Header;
