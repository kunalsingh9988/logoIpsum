import React, { useState } from "react";
import "./Hero.css"; // Importing the CSS for this component
import peopleImage from "../../assets/Left.png"; // Importing an image asset
import { useDispatch } from "react-redux"; // Importing useDispatch from Redux for state management
import { setFilter, clearFilter } from "../../redux/filterSlice"; // Importing actions from Redux slice

const Hero = () => {
  const dispatch = useDispatch(); // Initializing the useDispatch function for Redux

  const [searchInputValue, setSearchInputValue] = useState(""); // State for the search input value
  const [isSearch, setIsSearch] = useState(false); // State to track whether a search is active

  const handleSearch = () => {
    dispatch(setFilter(searchInputValue)); // Dispatching the 'setFilter' action with the search input value
    setIsSearch(true); // Updating the state to indicate a search is active
  };

  const clearSearch = () => {
    dispatch(clearFilter()); // Dispatching the 'clearFilter' action to reset the filter
    setSearchInputValue(""); // Clearing the search input value
    setIsSearch(false); // Updating the state to indicate no active search
  };

  return (
    <section id="hero">
      <div className="leftHero">
        <h1>
          Find <span>Partners</span> (CA's) Available Online
        </h1>
        <p>
          {" "}
          <span>CONNECT</span> with us where your services are listed and
          visible to a myriad of businesses seeking CA's for compliance support
        </p>
        <div className="searchBtnContainer">
          <input
            type="text"
            placeholder="Search by Name"
            value={searchInputValue}
            onChange={(e) => setSearchInputValue(e.target.value)}
          />
          {isSearch ? (
            <button className="searchBtn" onClick={clearSearch}>
              Show All
            </button>
          ) : (
            <button className="searchBtn" onClick={handleSearch}>
              Search
            </button>
          )}
        </div>
      </div>
      <div className="rightHero">
        <img src={peopleImage} alt="" /> {/* Displaying the people image */}
      </div>
    </section>
  );
};

export default Hero; // Exporting the Hero component as the default export
