import React from "react";
import "./Blog.css";
import CaData from "../../CaData";

const Blog = () => {
  return (
    <div id="blog">
      <h1>Want to <span>Join</span> Us ?</h1>
      <p>
        To remain with us, it is essential that you diligently follow the steps
        provided
      </p>
      <div className="peopleContainer">
        {CaData.map((person) => {
            const {id,name,intro,deliveryTime,price} = person;
          return (
            <div className="peopleCard" key={id}>
              {/* <div className="signNo">1st</div> */}
              <h2>{name}</h2>
              <p>
                 {intro.slice(0,70)}
              </p>
              <div className="dateAndPrice">
                <div className="dueDate">
                  <h3>Due date</h3>
                  <p>{deliveryTime}</p>
                </div>
                <div className="price">
                  <h3>Penalty fees</h3>
                  <p>{price} </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Blog;
