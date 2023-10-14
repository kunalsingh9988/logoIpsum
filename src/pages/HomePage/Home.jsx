import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Blog from "../../components/Blogs/Blog";
import wave from '../../assets/waveBg.svg'

const Home = () => {
  return (
    <>
      <div id="bgGradient"></div>
      <div id="bgTilt"></div>
      <div id="home">
        <Header />
        <Hero />
        <Blog/>
        <img className="waveBg" src={wave} alt="" />
      </div>
    </>
  );
};

export default Home;
