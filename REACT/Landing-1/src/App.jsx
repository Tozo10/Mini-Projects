import { useEffect, useState } from "react";
import Background from "./components/Background/background";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";

const App = () => {
  const heroData = [
    { text1: "Dive into ", text2: "What you love" },
    { text1: "Indulge", text2: " your Passions" },
    { text1: "Give into", text2: "your passions" },
  ];
  
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    let slideInterval;

    if (!playStatus) {
      slideInterval = setInterval(() => {
        setHeroCount((count) => (count === heroData.length - 1 ? 0 : count + 1));
      }, 3000);
    }

    return () => {
      clearInterval(slideInterval);
    };
  }, [playStatus, heroData.length]);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
