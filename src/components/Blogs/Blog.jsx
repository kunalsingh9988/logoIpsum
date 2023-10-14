import React, { useState } from "react";
import "./Blog.css"; // Importing the CSS for this component
import CaData from "../../CaData"; // Importing data 
import { Link } from "react-router-dom"; // Importing the Link component for routing
import { useSelector } from "react-redux"; // Importing the useSelector function from Redux for accessing state

const Blog = () => {
  // Using functional component to define the Blog component
  const filterTerm = useSelector((state) => state.filter.filterTerm); // Using Redux useSelector to access filterTerm from the state

  // Filtering data based on the filterTerm
  const filteredItems = CaData.filter((person) =>
    person.name.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <div id="blog">
      <h1>
        Want to <span>Join</span> Us?
      </h1>
      <p>
        To remain with us, it is essential that you diligently follow the steps
        provided
      </p>
      <div className="peopleContainer">
        {filteredItems.length === 0 && <h4>There is no such Person</h4>} 
        {/* Conditional rendering based on the length of filteredItems array */ }

        {filteredItems.map((person) => {
          const { id, name, intro, deliveryTime, price } = person;
          return (
            <div className="peopleCard" key={id}>
              <h2>
                <Link to={`/singlepage/${id}`}>{name}</Link>
                {/* Using Link to navigate to a single page with person's ID */}
              </h2>
              <p>{intro.slice(0, 70)} {/* Displaying a truncated intro */}
              </p>
              <div className="dateAndPrice">
                <div className="dueDate">
                  <h3>Due date</h3>
                  <p>{deliveryTime}</p> {/* Displaying the delivery time */}
                </div>
                <div className="price">
                  <h3>Penalty fees</h3>
                  <p>₹{price.slice(1, 10)} </p> {/* Displaying the price with currency symbol */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog; // Exporting the Blog component as the default export
