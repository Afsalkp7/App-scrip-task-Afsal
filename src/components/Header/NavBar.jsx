import './navbar.css'
import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import logoIcon from '../../assets/logoIcon.png'
import { CiSearch, CiHeart, CiBag1, CiUser } from "react-icons/ci";
import { FaAngleDown, FaBars } from "react-icons/fa";

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <>
      <div className='navbarMain'>
        <div className='navLogoIcon'>
          <div className='bars-icon' onClick={toggleDropdown}>
            <FaBars />
          </div>
          <img src={logoIcon} alt='logo icon image' />
        </div>
        <div className='navLogoName'>
          <img src={logo} alt='logo' />
        </div>
        <div className='navItems'>
          <ul>
            <li><CiSearch /></li>
            <li><CiHeart /></li>
            <li><CiBag1 /></li>
            <li><CiUser /></li>
            <li>ABC <FaAngleDown /></li>
          </ul>
        </div>
      </div>
      <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
        <ul>
          <li>SHOP</li>
          <li>STORIES</li>
          <li>SKILLS</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </div>
      <div className='navList'>
        <ul>
          <li>SHOP</li>
          <li>STORIES</li>
          <li>SKILLS</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </>
  )
}

export default NavBar;
