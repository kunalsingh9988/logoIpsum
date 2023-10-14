import React from "react";
import "./Footer.css"; // Importing the CSS for this component
import whiteLogo from "../../assets/WhiteLogo.svg"; // Importing an image asset
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai"; // Importing icons from the 'react-icons' library

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="footerContainer">
          <div className="footerContainer01">
            <div className="logo">
              <img src={whiteLogo} alt="" /> {/* Displaying the white logo image */}
              <p>
                India's first platform dedicated to simplifying partner search
              </p>
            </div>
            <div className="company">
              <h5>Company</h5>
              <p>About</p>
              <p>Pricing</p>
              <p>Careers</p>
            </div>
            <div className="solutions">
              <h5>Solutions</h5>
              <p>Search</p>
              <p>Connect</p>
              <p>Research</p>
              <p>Academy</p>
            </div>
            <div className="resources">
              <h5>Resources</h5>
              <p>Blogs</p>
              <p>Company</p>
            </div>
            <div className="support">
              <h5>Support</h5>
              <p>Help</p>
              <p>Contact Us</p>
            </div>
            <div className="legal">
              <h5>Legal</h5>
              <p>Privacy</p>
              <p>Terms</p>
              <p>Accessibility</p>
            </div>
          </div>
          <hr /> {/* Horizontal line for separation */}
          <div className="footerContainer02">
            <p>
              Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071,
              Maharashtra
            </p>
            <div className="footerIcons">
              <AiFillFacebook className="footerIcon" />
              <AiOutlineInstagram className="footerIcon" />
              <AiOutlineLinkedin className="footerIcon" />
              <AiOutlineWhatsApp className="footerIcon" />
              {/* Displaying social media icons using 'react-icons' library */}
            </div>
          </div>
        </div>
        <div className="footerContainer03">
          <p>
            Registered trademark of India Private Limited © 2023 loerumipsum
            Inc. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer; // Exporting the Footer component as the default export
