import "./navbar.css";
import React, { useState } from "react";
import logo from "../../assets/logo.png";
import logoIcon from "../../assets/logoIcon.png";
import { CiSearch, CiHeart, CiBag1, CiUser } from "react-icons/ci";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="navbarMain">
        <div className="navLogoIcon">
          <div className="bars-icon" onClick={toggleDropdown}>
            <FaBars />
          </div>
          <Link to="/">
            <img src={logoIcon} alt="logo icon image" />
          </Link>
        </div>
        <div className="navLogoName">
          <img src={logo} alt="logo" />
        </div>
        <div className="navItems">
          <ul>
            <li>
              <Link to="/">
                <CiSearch />
              </Link>
            </li>
            <li>
              <Link to="/">
                <CiHeart />
              </Link>
            </li>
            <li>
              <Link to="/">
                <CiBag1 />
              </Link>
            </li>
            <li>
              <Link to="/">
                <CiUser />
              </Link>
            </li>
            <li>
              ABC <FaAngleDown />
            </li>
          </ul>
        </div>
      </div>
      <div className={`dropdown-content ${dropdownOpen ? "show" : ""}`}>
        <ul>
          <li>
            <Link to="/">SHOP</Link>
          </li>
          <li>
            <Link to="/stories">STORIES</Link>
          </li>
          <li>
            <Link to="/skills">SKILLS</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>
      </div>
      <div className="navList">
        <ul>
          <li>
            <Link to="/">SHOP</Link>
          </li>
          <li>
            <Link to="/stories">STORIES</Link>
          </li>
          <li>
            <Link to="/skills">SKILLS</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
