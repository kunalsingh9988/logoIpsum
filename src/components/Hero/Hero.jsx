import React from 'react'
import './Hero.css'
import peopleImage from '../../assets/Left.png'
const Hero = () => {
  return (
    <section id="hero">
      <div className="leftHero">
        <h1>Find <span>Parterns</span> (CA's) Available Online</h1>
        <p> <span>CONNECT</span> with us where your services are listed and visible to a myriad of businesses seeking CA's for compliance support</p>
        <div className="searchBtnContainer">
          <input type="text" placeholder='Search by Name'/>
          <button className='searchBtn'>Search</button>
        </div>
      </div>
      <div className="rightHero">
        <img src={peopleImage} alt="" />
      </div>
    </section>
  )
}

export default Hero