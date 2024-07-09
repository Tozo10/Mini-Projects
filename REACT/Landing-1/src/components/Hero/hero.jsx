import React, { useEffect } from 'react';
import './hero.css';
import arrow_btn from '../../assets/arrow_btn.png';
import play_icon from '../../assets/play_icon.png';
import pause_icon from '../../assets/pause_icon.png';

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  useEffect(() => {
    let slideInterval;

    if (!playStatus) {
      slideInterval = setInterval(() => {
        setHeroCount((prevCount) => (prevCount + 1) % heroData.length);
      }, 3000); // Adjust the interval time as needed
    }

    return () => {
      clearInterval(slideInterval);
    };
  }, [playStatus, setHeroCount, heroData.length]);

  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData[heroCount].text1}</p>
        <p>{heroData[heroCount].text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow_btn} alt="Explore" />
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          {heroData.map((_, index) => (
            <li
              key={index}
              onClick={() => setHeroCount(index)}
              className={heroCount === index ? 'hero-dot hero-dot-orange' : 'hero-dot'}
            ></li>
          ))}
        </ul>
        <div className="hero-play">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt="Play/Pause"
          />
          <p>See the Video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
