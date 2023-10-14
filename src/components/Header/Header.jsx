import React, { useState } from "react";
// importing header css
import "./Header.css";
// importing logo svg
import logo from "../../assets/logo.svg";
// importing down arrow from react icons
import { IoIosArrowDown } from "react-icons/io";
import {FiMenu} from 'react-icons/fi'

const Header = () => {

  const[sideBar, setSideBar] = useState(false)

  return (
    // using semantic tags as it is a good practice
    <>
      <header id="header">
        <img src={logo} alt="" />
        <FiMenu className="menuBar" onClick={()=>setSideBar(!sideBar)}/>
        <nav className={sideBar?'sideNav':null}>
          {/* nav logo */}
          {/* using p tag instead of links because there is no need for it  */}
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
        <div className={sideBar?"headerBtnContainer active":"headerBtnContainer "}>
          <button className="loginBtn headerBtn">Login</button>
          <button className="registerBtn headerBtn">Register</button>
        </div>
   
      </header>
    </>
  );
};

export default Header;
