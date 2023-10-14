import React from "react";
import "./Home.css";
import Hero from "../../components/Hero/Hero";  // Import the Hero component
import Blog from "../../components/Blogs/Blog";  // Import the Blog component
import wave from "../../assets/waveBg.svg";  // Import the wave background image
import Platform from "../../components/Platform/Platform";  // Import the Platform component

const Home = () => {
  return (
    <>
      <div id="bgGradient"></div>  {/* Background gradient element */}
      <div id="bgTilt"></div>  {/* Background tilt element */}
      <div id="home">
        <Hero />  {/* Render the Hero component */}
        <Blog />  {/* Render the Blog component */}
        <Platform />  {/* Render the Platform component */}
      </div>
      <img className="waveBg" src={wave} alt="" />  {/* Wave background image */}
    </>
  );
};

export default Home;
