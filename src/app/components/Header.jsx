'use client';
import React from 'react';
import { MdLocalPhone } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import  "../styles/Header.css"
const Header = () => {
	return <header className='headerredaeh'>
    {/* main div conainer */}
    <div className="mainheadercontainer">
      {/* first logo container */}
      <div className="logocontainer">
        <h1 className='better'>Better</h1>
      </div>
      {/* Second right container */}
      <div className="secondrightcontainer">
        <div className="firstrightdiv">
        <MdLocalPhone className='mylogo' size={16} />
        </div>
        <div className="secondrightdiv">
          <h2 className='signinin'>Sign in</h2>
        </div>
        <div className="thirdrightdiv">
          <h2 className='mythirddiv'>Get Started</h2>
        </div>
        <div className="fourthrightdiv">
          <GiHamburgerMenu size={24} />
        </div>
      </div>
    </div>
  </header>;
};

export default Header;
