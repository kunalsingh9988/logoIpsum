import React, { useState, useEffect } from "react";
import "./SinglePage.css";
import { useParams } from "react-router-dom";
import CaData from "../../CaData";
import { AiFillStar } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
const SinglePage = () => {
  const { id } = useParams();
  const [recommendedPeople, setRecommendedPeople] = useState([]);

  const selectedPerson = CaData.find((person) => person.id === parseInt(id));

  useEffect(() => {

    const getRandomIds = () => {
      const randomIds = [];
      while (randomIds.length < 3) {
        const randomId = Math.floor(Math.random() * 10) + 1;
        if (randomId !== parseInt(id) && !randomIds.includes(randomId)) {
          randomIds.push(randomId);
        }
      }
      return randomIds;
    };

    const randomIds = getRandomIds();


    const recommendedPeopleData = randomIds.map((randomId) =>
      CaData.find((person) => person.id === randomId)
    );

    setRecommendedPeople(recommendedPeopleData);
  }, [id]);

  const {
    name,
    image,
    intro,
    rating,
    reviewCount,
    taskComplexity,
    price,
    deliveryTime,
    testimonial,
    about,
  } = selectedPerson;

  return (
    <div id="singlePage">
      <div className="singlePageContainer">
        <div className="singlePageleft">
          <div className="firstLeft">
            <h1>{name}</h1>
            <p>{intro}</p>
            <p className="rating">
              <AiFillStar className="star" /> <span>{rating}</span> (
              {reviewCount})
            </p>
          </div>
          <div className="secondLeft">
            <div className="basicTask">
              <p>{taskComplexity}</p>
              <p>
                <span>₹{price.slice(1, 10)}</span>
              </p>
            </div>
            <p>
              <SlCalender className="calenderIcon" /> {deliveryTime.slice(0, 9)}{" "}
              the job {deliveryTime.slice(11, 50)}
            </p>
            <div className="taskButtons">
              <button className="requestBtn">Request Proposal</button>
              <button className="chatBtn">Chat With me</button>
            </div>
          </div>
          <div className="thirdLeft">
            <h2>What People say</h2>
            <p>{testimonial.text}</p>
          </div>
        </div>
        <div className="singlePageRight">
          <img src={image} alt={name} />
          <h1>About Micheal Jackson</h1>
          <div className="details">
            <div>
              <span>From</span>

              <p>{about.from}</p>
            </div>
            <div>
              <span>Partner Since</span>
              <p>{about.partnerSince}</p>
            </div>
            <div>
              <span>Average Response Time </span>
              <p>{about.averageResponseTime}</p>
            </div>
          </div>
          <h3>About</h3>
          <p>{about.description}</p>
          <div className="services">
            <div>
              <p>Services Offer</p>
              <ul>
                {about.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
            <div>
              <p>Why me</p>
              <ul>
                {about.benefits.map((benfit, index) => (
                  <li key={index}>{benfit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="recommendedPeopleSection">
        <h1>Recommended For You</h1>
        <div className="recommendedContainer">
          {recommendedPeople.map((person) => {
            const { id, name, price, image, intro, rating, reviewCount } =
              person;
            return (
              <div className="recommendedPerson" key={id}>
                <img src={image} alt={name} />
                <div className="recommendedDetailsContainer">
                  <article>
                    <span>{name}</span> <span>${price.slice(0, 10)}</span>
                  </article>
                  <p>{intro}</p>
                  <p className="recommendedPara">
                    <span>
                      <AiFillStar className="star2" />
                      {rating}
                    </span>
                    ({reviewCount})
                  </p>
                  <button>ViewServices</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
