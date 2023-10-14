import React, { useState } from "react";
import "./Header.css"; // Importing the CSS for this component
import logo from "../../assets/logo.svg"; // Importing an SVG logo
import { IoIosArrowDown } from "react-icons/io"; // Importing the down arrow icon from 'react-icons'
import { FiMenu } from 'react-icons/fi'; // Importing the menu icon from 'react-icons'
import { Link } from "react-router-dom"; // Importing Link for routing

const Header = () => {
  // Using a functional component for the Header
  const [sideBar, setSideBar] = useState(false); // Managing the state for the sidebar

  return (
    <>
      {/* Using semantic tags for header */}
      <header id="header">
        <Link to="/">
          <img src={logo} alt="" /> {/* Displaying the logo */}
        </Link>
        <FiMenu className="menuBar" onClick={() => setSideBar(!sideBar)} /> {/* Menu icon with onClick event */}
        <nav className={sideBar ? 'sideNav' : null}>
          {/* Navigation items */}
          <p>
            Solutions
            <IoIosArrowDown className="downArrow" />{" "}
          </p>
          <p>
            Features
            <IoIosArrowDown className="downArrow" />
          </p>
          <p>Blogs</p>
          <p>
            About
            <IoIosArrowDown className="downArrow" />
          </p>
        </nav>
        <div className={sideBar ? "headerBtnContainer active" : "headerBtnContainer "}>
          {/* Buttons container */}
          <button className="loginBtn headerBtn">Login</button>
          <button className="registerBtn headerBtn">Register</button>
        </div>
      </header>
    </>
  );
};

export default Header; // Exporting the Header component as the default export
