import React from "react";
import "./Platform.css"; // Importing the CSS for this component
import fStudent from "../../assets/femalestudent.svg"; // Importing a female student image asset
import mStudent from "../../assets/maleStudent.svg"; // Importing a male student image asset
import searchIcon from "../../assets/searchIcon.svg"; // Importing a search icon image asset
import researchIcon from "../../assets/researchIcon.svg"; // Importing a research icon image asset
import academyIcon from "../../assets/academyIcon.svg"; // Importing an academy icon image asset
import connectIcon from "../../assets/connectIcon.svg"; // Importing a connect icon image asset

const Platform = () => {
  return (
    <div id="platform">
      <div className="leftPlatform">
        <h1>
          <span>All-in-One</span> platform that Makes Easier
        </h1>
        <p className="platformPara">
          We are more than a platform; We are your success partner. Discover our
          services to achieve your business and educational goals
        </p>
        <div className="gridIcons">
          <div className="leftGrid">
            <section>
              <img src={searchIcon} alt="" /> {/* Displaying the search icon */}
              <p>
                <span>SEARCH</span> for vital company information
              </p>
            </section>
            <section>
              <img src={researchIcon} alt="" /> {/* Displaying the research icon */}
              <p>
                <span>RESEARCH</span> and generate reports that drive growth
              </p>
            </section>
          </div>
          <div className="rightGrid">
            <section>
              <img src={connectIcon} alt="" /> {/* Displaying the connect icon */}
              <p>
                <span>CONNECT</span> with the resources to meet your business
                needs
              </p>
            </section>
            <section>
              <img src={academyIcon} alt="" /> {/* Displaying the academy icon */}
              <p>
                <span> ACADEMY</span> to give you the skills for success in your
                career
              </p>
            </section>
          </div>
        </div>
      </div>
      <div className="rightPlatform">
        <div className="rightOnePlatform">
          <div className="platformMessages">
            <p>Hey, check out loreumipsum services. </p>
            <p>I learned from their videos, got my first job. </p>
            <p>You won't be disappointed with their services. </p>
          </div>
          <img className="maleStudent" src={mStudent} alt="" /> {/* Displaying the male student image */}
        </div>
        <div className="rightTwoPlatform">
          <p>I got a perfect analysis report from them too</p>
          <p className="p2">Oh, that's great.</p>
          <img src={fStudent} alt="" /> {/* Displaying the female student image */}
        </div>
      </div>
    </div>
  );
};

export default Platform; // Exporting the Platform component as the default export
