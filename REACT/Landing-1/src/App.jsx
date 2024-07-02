import { useState } from "react";
import Background from "./components/Background/background";
import Navbar from "./components/Navbar/navbar";
const App = () => {
  let heroData = [
    {text1 : "Dive into ", text2 : "What you love"},
    {text1 : "Indulge", text2 : " your Passions"},
    {text1 : "Give into", text2 : "your passions"},
  ]
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <div>
    <Background playStatus = {playStatus} heroCount = {heroCount}/>
    <Navbar/>
    </div>
  );
};

export default App;
